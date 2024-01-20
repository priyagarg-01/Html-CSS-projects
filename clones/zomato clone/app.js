const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=80;

// app.use(express.static('static',options));
// app.use('/static',express.static('static'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
// for setting the template engine-pug
 app.set('view engine','html');

// set the view directory
app.set('/views',path.join(__dirname,'/views'));

app.get('/', (req, res) => {
    const params={};
    res.status(200).render('home.html',params);
  });

app.get('/delivery', (req, res) => {
    const params={};
    res.status(200).render('delivery.html',params);
  });

app.get('/dining_out', (req, res) => {
    const params={};
    res.status(200).render('dining.html',params);
  });

//  START THE SERVER
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port} `);
});