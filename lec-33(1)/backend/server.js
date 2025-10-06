const {WebSocketServer } = require ('ws');
const wss = new WebSocketServer({ port: 8888});
// wss.on("connection",function(socket){
//     console.log("user connected")
//     allSocket.push(socket)
//     socket.on("message",function(message){
//         console.log("message recieved"+""+messagetoString())
//         if(messagetoString()=="ping"){
//             socket.send("pong")
//         }

//     })})





let allSocket=[]
wss.on("connection",function(socket){
    console.log("user connected")
    allSocket.push(socket)
    socket.on("message",function(message){
        console.log("message recieved"+" "+message.toString())
        // if(messagetoString()=="ping"){
        //     socket.send("pong")
        // }
        allSocket.forEach((s)=>{
        s.send(message.toString())
        })

    })})
