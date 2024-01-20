const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=80;

// app.use(express.static('static',options));
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
// for setting the template engine-pug
app.set('view engine','pug');

// set the view directory
app.set('/views',path.join(__dirname,'views'));

app.get('/home', (req, res) => {
    const params={};
    res.status(200).render('home.pug',params);
  });

app.get('/contact', (req, res) => {
    const params={};
    res.status(200).render('contact.pug',params);
  });

//  START THE SERVER
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port} `);
});