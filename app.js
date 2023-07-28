const express = require('express');

const http = require('http');

const bcrypt = require('bcrypt');

const path = require("path");

const bodyParser = require('body-parser');

const users = require('./data').userDB;




const app = express();

const server = http.createServer(app);




app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'./public')));





app.get('/',(req,res) => {

    res.sendFile(path.join(__dirname,'./public/index.html'));

});





app.post('/register', async (req, res) => {

    res.send("Data added Successfully")

});




server.listen(3000, function(){

    console.log("server is listening on port: 3000");

});
