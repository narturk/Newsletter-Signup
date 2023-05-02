const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const port = 3000;
const https = require('https');
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

mailchimp.setConfig({
    apiKey: "b2ed6b7525b51f7baa349452be8414e4-us211",
    server: "us21",
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const listID = "9083bd08d4";

  async function addMember() {
    var response
    try {
      response = await mailchimp.lists.addListMember(listID, {
          email_address: email,
          status: "subscribed",
          merge_fields: {
              FNAME: firstName,
              LNAME: lastName,
          }
      });
      console.log(response);
      console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
    } catch (error) {
      console.error("error111111111");
}
  }
  addMember();

});

app.listen(port, function(){
  console.log("Server is running on port " + port);
});


// b2ed6b7525b51f7baa349452be8414e4-us21

 // 9083bd08d4
