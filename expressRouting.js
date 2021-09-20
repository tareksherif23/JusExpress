const express = require('express');
const path = require('path')


const app = express();




app.all('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})


//app object methods: HTTP VERBS or REST verbs ==> get,put,post and delete or All app.all (accept anything)
app.get('/',(req,res)=>{
    res.send("Gett welcome page!")
})
app.post('/',(req,res)=>{
    res.send("Post welcome page!")
})


//app.use to invoke middleware in express, express.static('') serves static folder
app.use(express.static('public'));




app.listen(3000);
