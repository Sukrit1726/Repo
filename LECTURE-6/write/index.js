const fs = require("fs");

fs.writeFile("../demo2.txt","g27hello",function(err){


if(err) return console.log(err);
console.log("sucess1"); 
})
