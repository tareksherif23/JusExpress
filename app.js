const express = require('express');

// catch/invoke createApplication function exported by express into const app
const app = express();

// create a general server using app.all()
app.all('*',(req,res)=>{
    //Express handles startlines, headers, end (unlike basic node!)
    res.send(`<html><head></head><body style="justify-content: center;background-color: aliceblue;display: flex;"><h1 style="color: #dd6644;">Hello Fucker!! </h1></body></html>`);
})

app.listen(3000);
