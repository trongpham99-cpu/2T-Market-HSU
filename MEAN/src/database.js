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
                console.log("Connected to Database !!!");
                resolve(this.conncetion);
            });
        });
    } 
    /**
     * 
     * @param {proDuct} proDuct 
     */
    async createProduct(proDuct){
        await this.proDuct.create(proDuct);
    }
    /**
     * 
     * @param {user} user 
     */
    async createUser(user) {
        await this.user.create(user);
    }

    async getAllUser() {
        return await this.user.find();
    }

    async getAllProducts(){
        return await this.proDuct.find();
    }

    // async getProductByPrice(from, to){
    //     return await this.proDuct.find({ price: { $gte:from} })
    // }
    async getProductByLoaiSp(loai_sp) {
        return await this.proDuct.find({loai_sp:"Xe Cộ"});
    }

    /**
     * 
     * @param {String} id
     * @param {proDuct} proDuct 
     */
    async updateProduct(id, proDuct) {
        await this.proDuct.findByIdAndUpdate(id, proDuct);
    }

    async deleteProduct(id) {
        await this.proDuct.findOneAndRemove(id);
    }

    //check user 
    async checkUser(userAccount,userPassword) {
            return await this.user.find({userAccount:userAccount,userPassword:userPassword});
    }
    //check account 
    async checkAccount(userAccount) {
        return await this.user.find({userAccount:userAccount});
    }

    async findOneProduct(id) {
        return await this.proDuct.findById(id);
    }
    async findUser(userAccount){
       const users= (await   this.user.find( {
            "userAccount" : userAccount
        }))
        return users;
    }
 
    async getDetail(id) {
        return await this.proDuct.findById(id);
    }

    

}
    
module.exports = Database;