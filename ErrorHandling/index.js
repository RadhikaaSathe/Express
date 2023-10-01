const express = require("express");
const app = express();
let port =8080;
 const ExpressError = require("./ExpressError");

const checkToken= (req,res,next)=>{
    let {token}=req.query;
    if(token=="giveaccess"){
        next();
    }else{
        throw new ExpressError(401,"Access denied")
    }

}

app.get('/api',checkToken,(req,res)=>{
    res.send("Data")
})

app.get('/',(req,res)=>{
    res.send("Get Working")
})

app.use((err,req,res,next)=>{
    console.log("--------Error-------")
     let {status,message}= err;
     //if we are no pssing any status it will say undfined status error
     //we can give default in this case let {status=500,message="Some Error"}= err;
     res.status(status).send(message);

})

app.listen(port,()=>{
    console.log("server listing on port ",port)
})