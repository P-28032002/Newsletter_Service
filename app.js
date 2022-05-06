require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const nodemailer = require('nodemailer');
const app = express();
const db=require('./database');
const cron = require('node-cron');
const store = require('store2');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

  
app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', function(req, res){
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    inputData ={
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        topics:req.body.topics,
    }

    var sql='SELECT * FROM newsletter WHERE email =?';
    db.query(sql, [inputData.email] ,function (err, data, fields) {
     if(err) throw err
     if(data.length>1){
         var msg = inputData.email+ " was already exist!!!";
     }
     else{
         
       var sql = 'INSERT INTO newsletter SET ?';
       db.query(sql, inputData, function (err, data) {
          if (err) res.sendFile(__dirname + '/failure.html');
          else{
            res.sendFile(__dirname + '/success.html')  
          }
               });
        }
    })
    
               
})

app.post('/failure', function(req, res){
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, function(){
    console.log('server is running on port 3000');
})


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL',
      pass: 'YOUR_PASSWORD'
    }
});

//Function to send the mail to the subscriber after every single min.
cron.schedule('* * * * *', () => {
    var sql2='SELECT * FROM newsletter';
    db.query(sql2,function (err, data, fields) {
     if(err) throw err
     else{
      for(var i = 0;i<data.length;i++){
         let email = data[i].email;
      var sql3 ='SELECT * FROM topics where topics_id =?'
      db.query(sql3, data[i].topics,function (err, result, fields) {
            if(err) throw err
            else{
        let mailOptions = {
            from: 'FROM_EMAIL',
            to: email,

            subject: 'NewsLetter Service by Pratham Madhani :) !',
            text: result[0].description
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
      }
       });
    }
  }
})
 });
