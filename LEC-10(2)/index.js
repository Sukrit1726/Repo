//creating a server usiong express
// server.js

const express = require('express');
const app = express();
//app.use(express.json());
app.use(express.static(__dirname+"/public"))

 app.get('/', (req, res) => {
   res.sendFile(__dirname+"/index.html")});
   app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
   })


app.listen(3000, () => {
  console.log("Server is listening on port 3000");  
})