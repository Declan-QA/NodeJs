import express from 'express';
import { paswordcheck, validateDate, validateEmailDomain } from './functions.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const middle = express.json();
console.log("Please open the url: http://localhost:3000")

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.post("/validateEmail",middle, function(request,response){
    let responsedata;
    if (validateEmailDomain(request.body.email)){
        responsedata = true
    } else {
        responsedata = [
            "<p class='error'>Email must end in valid domain e.g. .io,.co.uk,.com</p>"
        ]
    }
    response.json({ "data": responsedata });
});

app.post("/validateDate",middle, function(request,response){
    let responsedata;
    if (validateDate(request.body.birthday)){
        responsedata = true
    } else {
        responsedata = [
            "<p class='error'>Birthday cannot be a future date</p>"
        ]
    }
    response.json({ "data": responsedata });
});

app.post("/validatePassword",middle, function(request,response){
    let responsedata;
    let check = paswordcheck(request.body.password);
    if ( check === true){
        responsedata = true
    } else {
        responsedata = check.map(value =>{return `<p class='error'>${value}</p>`}).join("")
    }
    response.json({ "data": responsedata });
});


app.get("/",function(request,response){
    response.sendFile(path.join(__dirname, "/src/index.html"));
})



app.listen(3000);