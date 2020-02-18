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

app.get('/transferBank', async (req, res) => {
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

app.get('/buy', async (req, res) => {
  const teamId = req.query.teamId
  const cash = req.query.cash
  const iron = req.query.iron
  const oil = req.query.oil
  const technology = req.query.technology
  const water = req.query.water
  const health = req.query.health
  const electric = req.query.electric
  
  const snapshot = await admin.database().ref('/scoreboard/'+teamId).once('value')
  let update = {
    'cash': parseInt(snapshot.val().cash) - parseInt(cash),
    'stock_iron': parseInt(snapshot.val().stock_iron) + parseInt(iron),
    'stock_oil': parseInt(snapshot.val().stock_oil) + parseInt(oil),
    'stock_technology': parseInt(snapshot.val().stock_technology) + parseInt(technology),
    'stock_water': parseInt(snapshot.val().stock_water) + parseInt(water),
    'stock_health': parseInt(snapshot.val().stock_health) + parseInt(health),
    'stock_electric': parseInt(snapshot.val().stock_electric) + parseInt(electric),
  }
  
  admin.database().ref('/scoreboard/'+teamId).update(update);

  var today = new Date();

  admin.database().ref('log').push({
      'teamId' : teamId,
      'message' : 'buy stock '+update,
      'datetime': today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      'timestamp': new Date().getTime()
  });

  res.send({'status': true, 'total': parseInt(cash)});
});

app.get('/sold', async (req, res) => {
  const teamId = req.query.teamId
  const iron = req.query.iron
  const oil = req.query.oil
  const technology = req.query.technology
  const water = req.query.water
  const health = req.query.health
  const electric = req.query.electric
  
  let snapshot = await admin.database().ref('/game/info').once('value')
  
  const giveMoney = parseInt(snapshot.val().iron)*parseInt(iron) + parseInt(snapshot.val().oil)*parseInt(oil) + parseInt(snapshot.val().technology)*parseInt(technology) + parseInt(snapshot.val().water)*parseInt(water) + parseInt(snapshot.val().health)*parseInt(health) + parseInt(snapshot.val().electric)*parseInt(electric)

  snapshot = await admin.database().ref('/scoreboard/'+teamId).once('value')
  let update = {
    'cash': parseInt(snapshot.val().cash) + parseInt(giveMoney),
    'stock_iron': parseInt(snapshot.val().stock_iron) - parseInt(iron),
    'stock_oil': parseInt(snapshot.val().stock_oil) - parseInt(oil),
    'stock_technology': parseInt(snapshot.val().stock_technology) - parseInt(technology),
    'stock_water': parseInt(snapshot.val().stock_water) - parseInt(water),
    'stock_health': parseInt(snapshot.val().stock_health) - parseInt(health),
    'stock_electric': parseInt(snapshot.val().stock_electric) - parseInt(electric),
  }

  admin.database().ref('/scoreboard/'+teamId).update(update);

  var today = new Date();

  admin.database().ref('log').push({
      'teamId' : teamId,
      'message' : 'sold stock',
      'datetime': today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      'timestamp': new Date().getTime()
  });

  res.send({'status': true, 'total': parseInt(giveMoney)});
});

// Expose Express API as a single Cloud Function:
exports.api = functions.region('asia-east2').https.onRequest(app);