const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

});

app.listen(port, function(){
  console.log("Server is running on port " + port);
});
