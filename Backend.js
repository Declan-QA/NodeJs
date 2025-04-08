import express from 'express';
import cors from 'cors';

console.log("Please run index.html with:\n  Your Webbrowser\n  Live Server Extension \nNot: \n  Live preview")
const app = express();

app.use(cors()); 
const middle = express.json();


app.post('/upload', middle,function(req, res) {
   console.log(req.body);
});

app.listen(3000);