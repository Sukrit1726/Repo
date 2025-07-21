const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
//   res.send('Hello World!')
//   res.send("<h1>okay</h2>")
//   res.sendFile(__dirname+"/index.html")
//   res.json({
//     name:"sukrit",
//     age:31
//   })
  res.end("hii!") 
})
// path-variable 
//1. query parm 
app.get("/watch",(req,res)=>{
    console.log(req.query.v);
    res.send("id got done")
}) 







// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(3000,function(){
    console.log("sever started")
});
