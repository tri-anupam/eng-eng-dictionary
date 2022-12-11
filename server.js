//Initlize Express
const express = require('express')
const app = express()

//calling main Router -->index.js from routes folder
const mainRouter = require('./routes/index')
//calling about Router --> about.js form routes folder
const aboutRouter = require('./routes/about')

//Creating a port
const PORT = process.env.PORT || 3500

//Initlize ejs template engine
app.set("view engine","ejs");

//Static Middleware
app.use(express.static('public'));

//calling mainRouter
app.use(mainRouter)
//calling aboutRouter
app.use(aboutRouter)




//Listening the port
app.listen(PORT,() =>{
    console.log(`linstening on port ${PORT}`);
})