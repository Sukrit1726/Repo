const express = require("express");
const { m1, m2 } = require("./middlware/firstmidleware");
const { m3 } = require("./middlware/pathlevel");

const app =express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(m1)
//app.use(m2)
app.get("/health",m3,(req,res,next)=>{
console.log("running cf")
next()
res.json({
    status:"ok",
    message:"server running ok"
})
})
app.get("/home",(req,res,next)=>{
    console.log("running home endpt");
    res.json({
        success:true,
        message:"welcome to homepage"
    })
})
app.use(m2)

app.listen(5775,()=>{
    console.log("server started")})