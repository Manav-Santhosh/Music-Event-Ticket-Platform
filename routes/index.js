var express = require('express');
var router = express.Router();
var fs = require('fs')
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about')
})
router.get("/events", function(req, res, next) {
  res.render('gallery')
})
router.get('/contact', function(req, res, next) {
  res.render('contact')
})
router.post('/submit', function(req, res, next) {
let name = req.body.name
let email = req.body.email
let number = req.body.number
fs.appendFile('data.txt',`name :${name}, email :${email}, number :${number}\n`, function(e){
  var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
  
      user:'pawan.teach.demo@gmail.com',
      pass:'cmaojfvghnvwmlvl'
    }
  })
  var mailOptions= {
    from:'email adress',
    to:req.body.email,
    subject:'The itenary of the Rated-R Concert Show Tickets', 
    text:'Congratulations, you have succesfully booked tickets to the world famous concert with hip-hop, pop, rock legends from all around the world'

  }
  transporter.sendMail(mailOptions,function(error,info){
    if (error){
      console.log(error)
    }
    else {
      res.render('Success')
    }
  })
})
})

module.exports = router;

