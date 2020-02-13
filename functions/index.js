const functions = require('firebase-functions');
const admin = require('firebase-admin')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://the-millionaire-41e7b.firebaseio.com"
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// http://localhost:5001/the-millionaire-41e7b/asia-east2/transferBank?teamId=-M-zvF-MNSjQcldmYf5J&cash=2000
exports.transferBank = functions.region('asia-east2').https.onRequest(async (req, res) => {
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


    res.send('ok');
  });