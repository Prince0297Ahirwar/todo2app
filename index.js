const express = require('express');
const app = express();

const port = 8000;

//adding mongoose
const db = require('./config/mongoose');
//setting up ejs engine and path

app.set("view engine","ejs");
app.set("views",'./views');

//for parsing parsing form data using express

app.use(express.urlencoded({ extended: true }));


//routing to routes

app.use('/',require('./routes'));
//setting static files for app

app.use(express.static('assets'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in starting server ${err} `);
        return;
    }
    console.log(`Server started on port: ${port}`);
});