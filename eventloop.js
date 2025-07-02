const fs=require("fs");
console.log("start");
setTimeout(()=>{console.log("timer callback")},0)
setImmediate(()=>{
    console.log("set immidate")
})
fs.readFile("demo.txt",(data)=>{
    console.log("poll callback")
    setTimeout(()=>{
        console.log("timer 2")

    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
})
console.log("end")