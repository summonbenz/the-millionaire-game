const functions = require('firebase-functions');
const admin = require('firebase-admin')
const cors = require('cors');
const express = require('express');
const app = express();

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://the-millionaire-41e7b.firebaseio.com"
});

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/', async (req, res) => {
    const teamId = req.query.teamId
    const cash = req.query.cash
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/scoreboard/'+teamId).once('value')
    let currentCash = snapshot.val().cash - cash
    admin.database().ref('/scoreboard/'+teamId).update({'cash': currentCash});

    var today = new Date();

    admin.database().ref('log').push({
        'teamId' : teamId,
        'message' : 'transfer to bank '+cash+' baht',
        'datetime': today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        'timestamp': new Date().getTime()
    });

    res.send({'status': true});
});

// Expose Express API as a single Cloud Function:
exports.transferBank = functions.region('asia-east2').https.onRequest(app);