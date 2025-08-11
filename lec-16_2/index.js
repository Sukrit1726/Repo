const express = require("express")
const mongoose= require("mongoose")
const app = express();

app.listen(4445,()=>{
    console.log("server started")
})
mongoose.connect('mongodb://127.0.0.1:27017/g26database')
  .then(() => console.log('Connected!'));