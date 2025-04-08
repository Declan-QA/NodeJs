import express from 'express';
import cors from 'cors';
import { validateEmailDomain } from './functions.js';
console.log("Please run index.html with:\n  Your Webbrowser\n  Live Server Extension \nNot: \n  Live preview")
const app = express();

app.use(cors()); 
const middle = express.json();


app.post('/upload', middle,function(request, response) {
   console.log(request.body);
});

app.post("/validateEmail",middle, function(request,response){
    console.log("run functions to check this")
    let responsedata;
    if (validateEmailDomain(request.body.email)){
        responsedata = true
    } else {
        responsedata = ["<p>Error</p>","<p>Email must end in vald domain</p>"]
    }
    response.json({ "data": responsedata });
});



app.listen(3000);