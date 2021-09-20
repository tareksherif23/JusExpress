const express = require('express');
const path = require('path')
const helmet = require('helmet');

const app = express();

function validateUser(req,res,next){

    res.locals.validated = true;
    console.log("User Validated!");
    //calling next to invoke next function in the pipeline which is app.get in this case
    next();
}

//registering validateUser as Middleware to be used before app.get()
//app.use(validateUser);
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req,res,next)=>{
    //instead of calling function here for every single route
    //validateUser();
    res.send(`<h2>Main Page</h2>`);

})

app.get('/admin',(req,res,next)=>{
    //instead of calling function here for every single route
    //validateUser();
    res.send(`<h2>Admin Page</h2>`);

})


app.listen(3000);