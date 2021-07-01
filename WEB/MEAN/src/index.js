const server = require('./server');
const config = require('./config');
const Database = require('./database');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});
async function main(){
    await Database.instance.connect("mongodb+srv://admin:admin@cluster0.keosc.mongodb.net/shop-web?retryWrites=true&w=majority");
    server.listen(process.env.PORT || 8080,()=>{
        console.log(`SERVER IS RUNNING!`);
    });

    let userList = new Map();

    io.on('connection', (socket) => {
        let userName = socket.handshake.query.userName;
        addUser(userName, socket.id);
        console.log("hihi")
        socket.broadcast.emit('user-list', [...userList.keys()]);
        socket.emit('user-list', [...userList.keys()]);
    
        socket.on('message', (msg) => {
            socket.broadcast.emit('message-broadcast', {message: msg, userName: userName});
        })
    
        socket.on('disconnect', (reason) => {
            removeUser(userName, socket.id);
        })
    });
    function addUser(userName, id) {
        if (!userList.has(userName)) {
            userList.set(userName, new Set(id));
        } else {
            userList.get(userName).add(id);
        }
    }

    function removeUser(userName, id) {
        if (userList.has(userName)) {
            let userIds = userList.get(userName);
            if (userIds.size == 0) {
                userList.delete(userName);
            }
        }
    }
}

main();