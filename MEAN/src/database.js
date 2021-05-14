const mongoose = require('mongoose');
const proDuctSchema = require('./schemas/product.schema');
const userSchema = require('./schemas/user.schema');
const proDuct = require('./models/product.model');
const user = require('./models/user.model');

class Database{

    /**
     * @type {Database}
     */
    //singleturn
    static _cache = null;

    constructor(connectionString){
        /**
         * @type {String}
         */
        this.connectionString = connectionString;
        /**
         * @type {mongoose.Model<any>}
         */
        this.proDuct = mongoose.model("products",proDuctSchema);
        /**
         * @type {mongoose.Model<any>}
         */
        this.user = mongoose.model("users",userSchema);
    }   
    //lay ra 1 thuc the duy nhat cua db
    /**
     * @returns {Database}
     */
    static get instance() {
        if(this._cache == null){
            this._cache = new Database("");
        }
        return this._cache;
    }

    /**
     * @returns {Promise<mongoose.Connection>}
     */
    async connect(connectionString){
        this.connectionString = connectionString;
        return new Promise((resolve,reject)=>{
            mongoose.connect(this.connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
            this.conncetion = mongoose.connection;
            this.conncetion.on("error",(err)=>{
                console.error("Cannot conncet to DB")
                reject(err);
            });
            this.conncetion.once("open",()=>{
                console.log("CONNCETED TO DATABASE !");
                resolve(this.conncetion);
            });
        });
    } 

    /**
     * 
     * @param {user} user 
     */
    async createUser(user) {
        await this.user.create(user);
    }
    //check account 
    async checkAccount(userAccount) {
        return await this.user.find({userAccount:userAccount});
    }
    async getUsers() {
        return await this.user.find();
    }
    /**
     * 
     * @param {string} id 
     * @returns 
     */
    async getUser(userAccount) {
        return await this.user.find({userAccount:userAccount});
    }
}
    
module.exports = Database;