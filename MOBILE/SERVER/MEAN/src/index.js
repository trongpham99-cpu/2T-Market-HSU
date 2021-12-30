const server = require('./server');
const config = require('./config');
const Database = require('./database');
const http = require('http').createServer(server);
const io = require('socket.io')(http);

async function main(){
    await Database.instance.connect("hihi");
    server.listen(process.env.PORT || 3000,()=>{
        console.log(`SERVER IS RUNNING!`);
    });
    io.on('connection',(socket)=>{
        console.log(`connect`);
    })
}

main();
