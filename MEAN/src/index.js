const server = require('./server');
const config = require('./config');
const Database = require('./database');

async function main(){
    await Database.instance.connect("mongodb+srv://admin:admin@cluster0.keosc.mongodb.net/shop-web?retryWrites=true&w=majority");
    server.listen(config.PORT,config.HOST,()=>{
        console.log(`SERVER IS RUNNING ON ${config.HOST}:${config.PORT} !`);
    });
}

main();