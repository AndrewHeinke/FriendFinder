var path = require('path');
var bodyParser = require('body-parser');
var friendsList = require('../data/friends.js');

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsList);
  });
  // need to fix post 
  app.post("/api/friends", function (req, res) {
    var user = req.body;
    var userIndex = 0;
    var diffArray = [];
    while (userIndex < userArray.length) {
      var difference = 0;
      for (var i = 0; i < user.scores.length; i++ ) {
        difference += Math.abs(parseInt(userArray[userIndex].scores[i]) - parserInt(user.scores[i]));
      }
      diffArray.push(difference);
      userIndex++;
    }
    console.log("Differences: " + diffArray);

    var low = diffArray[0];
    for (var j = 0; j < diffArray.length; j++) {
      if (diffArray[j] < low) {
        low = diffArray[j];
      }
    }
     var chosenFriend = diffArray.indexOf(low);

    res.json(chosenFriend);
    friendsList.push(user);
  });
};
