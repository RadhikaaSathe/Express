const express = require("express");
const app = express();
let port = 3000;
app.listen(port,()=>{console.log("Hi i am server");})
// app.use((req,res)=>{
//     console.log("serving req");
//    // console.log(req);
//    let fruit="<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><ul>";
//    res.send(fruit);
// })
app.get('/',(req,res)=>{
    let fruit="<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><ul>";
     res.send(fruit);
})

// app.get('/Orange',(req,res)=>{
//     let fruit="<h1>Fruits</h1><ul><li>Orange</li><ul>";
//      res.send(fruit);
// })

// app.get('/Apple',(req,res)=>{
//     let fruit="<h1>Fruits</h1><ul><li>Red Apple</li><ul>";
//      res.send(fruit);
// })

// //client post req will be listen here
// app.post('/',(req,res)=>{
//     let fruit="post req";
//      res.send(fruit);
// })

//  app.get("*",(req,res)=>{res.send("This path is not valid");});


//path parameter
app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    res.send(`Welcome to page of @${username}.`);
})
app.get("/search",(req,res)=>{
    let{q}=req.query;
    if(!q){
        res.send("you havnt search");
    }
    res.send(`search result for query @${q}.`);
})