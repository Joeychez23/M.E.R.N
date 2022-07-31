const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const books = require('./books.js');


const path = require('path');


const port = process.env.PORT || 5000;
const username = 'mydb'
const password = 'test123'
const cluster = 'Clustor0';
const dbname = 'bookstore';
const uri = `mongodb+srv://mydb:testval@Cluster0.haknbyf.mongodb.net/bookstore?retryWrites=true&w=majority`




//app.use(express.json({limit: '1mb'}));
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
//app.set('view engine', 'ejs');
console.log("START");


//connects to database
async function connect() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
      })
      console.log("connected")
    } catch (error) {
      console.error(error);
  
    }
  }
  
  connect();






  app.get('/books', function(req, res) {
    let titleCheck = 0;
    console.log('books');
    const newbook = new books({
      Title: 'Greer',
      Author: 'Joseph Sanchez'
    })
  
    books.find((err, foundItem) => {
      if(err) {
        console.log(err);
      } else {
    
        for(let i = 0; i < foundItem.length; i++) {
          if(foundItem[i].Title != newbook.Title) {
            titleCheck += 1;
  
          }
        }
        if(titleCheck == foundItem.length) {
          newbook.save().then((result) => {
            //console.log(titleCheck);
            console.log(foundItem.length);
            //res.json(foundItem);
          }).catch((err) => {
            console.log(err);
          })     
        }
        else {
          //console.log(titleCheck);
          //console.log(foundItem.length);
          console.log(`Title's taken`);
          //res.json(foundItem);
  
        }
      }
      res.json(foundItem);
    })
  
  
    
  })











if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}



app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Server running on ${port}`);
})


books.find((err, foundItem) => {
    if(err) {
      console.log(err);
    } else {console.log(foundItem)}})



  
  
  