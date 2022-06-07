const express=require('express');
const path=require('path');
const bodyparser = require("body-parser");
const app=express();
const session = require("expression-session");
const {v4:uuidv4} = require("uuid")


const port=process.env.Port||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extented:true}))

app.set('view engine','ejs');

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: true
}));

//home route//
app.get('/',(req,res)=> {
    res.render('base',{title:"Login System"})
})

app.listen(port, ()=>{console.log("lostening to the server on http://localhost:3000")})





