/* This is using the node server from the docs
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
 */


/* RUN THE SRVER USING NODEMON
Nodemon keeps a watch on the app.js so u dont need to close and again start the server so saves some types
 */



//This is using the express framework which internally does the work in built.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 


/*
 app.get('/', function(req, res){
    res.send("Hellloo WORLDD");
 })


 app.get('/about', (req , res) => {
    res.send('<h1>About</h1>');
 })


app.get('/users/:name', (req, res) => {
    let user = req.params.name;
    res.send('<h1>'+user+'</h1>');
}) */



//Set the static path
app.use(express.static(path.join(__dirname,  'public')));


//Creating the json of users           http://127.0.0.1:3000/users
app.get('/users', (req, res) => {
    let users = [
        {
            first_name : "Jatin",
            last_name: "Varlyani",
            age: "18",
            gender: "Male",

        },
        {
            first_name: "Tom",
            last_name: "Cruise",
            age: "28",
            gender: "Male",

        },
        {
            first_name: "Angelina",
            last_name: "Smith",
            age: "38",
            gender: "Female",

        },
    ];
    //convert the users in json and send it as a Response
    res.json(users);
});



//We can also download the file wen we go on this url   http://127.0.0.1:3000/downloads
app.get('/downloads', (req,res)=>{
    res.download(path.join(__dirname, '/downloads/1.pdf'));
});


//This is to redirect to the about.html
app.get('/about', (req, res) => {
    res.redirect('/about.html');
});


//For the subscribe              http://127.0.0.1:3000/subscribe
app.post('/subscribe', (req,res) => {
    let email = req.body.email;         //Getting the names from the form
    let name = req.body.name;           //Getting the names from the form
    console.log(name +'has subscribed with '+email);    //Just logging it on terminal

});







//This will constantly listen on the port specified
 app.listen(3000, () => {
     console.log("Server started on port 3000");
 });