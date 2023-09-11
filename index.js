const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>hello shyam</h1>")
})
app.post("/home",(req,res)=>{
    res.send("<h1>hello janvika</h1>")
})
app.put("/home",(req,res)=>{
    res.send("<h1>hello janvika</h1>")
})
app.listen(3000,()=>console.log("server is up"))
