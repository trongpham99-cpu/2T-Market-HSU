const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>{
    res.send("hello");
})

io.on('connection', (socket)=>{
    console.log('co ng cn');
})

app.listen(3000, ()=>{
    console.log(`sv run`)
})