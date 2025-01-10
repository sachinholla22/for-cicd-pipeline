const express=require("express");
const app=express();
const port=4500;

app.get('/',(req,res)=>{
    res.send("Hello World!");

})

app.listen(port,()=>{
    console.log(`App is running is on the port ${port}`)
})