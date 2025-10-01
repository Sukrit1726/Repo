const  { WebSocketServer } =require=('ws');
//const app=express()
const ws = new WebSocketServer({
  port: 8080});
ws.on("connection",function(socket){
    console.log(socket);
})





