import express from 'express';
import cors from 'cors';
import { paswordcheck, validateDate, validateEmailDomain } from './functions.js';;
console.log("Please run index.html with:\n  Your Webbrowser\n  Live Server Extension \nNot: \n  Live preview")
const app = express();

app.use(cors()); 
const middle = express.json();




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



app.listen(3000);