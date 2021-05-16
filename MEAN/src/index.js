const server = require('./server');
const config = require('./config');
const Database = require('./database');
const http = require('http').createServer(server);
const io = require('socket.io')(http);

async function main(){
    await Database.instance.connect("mongodb+srv://admin:admin@cluster0.keosc.mongodb.net/shop-web?retryWrites=true&w=majority");
    server.listen(config.PORT,config.HOST,()=>{
        console.log(`SERVER IS RUNNING ON ${config.HOST}:${config.PORT} !`);
    });
    io.on('connection',(socket)=>{
        console.log(`connect`);
    })
}

main();