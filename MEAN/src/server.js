const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./database');
const proDuct = require('./models/product.model');
const User = require('./models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
const jwt = require('jsonwebtoken');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
//name-product

app.get("/products/xe",async (req,res)=>{
    let proDucts = await Database.instance.getProductByLoaiSp();
    res.send(proDucts);
}); 

//product
app.post("/products",async (req,res)=>{
    const {productImage, productName, productPrice, description,productAddress,checkStatus,loai_sp,nguoi_dang} = req.body;
    await Database.instance.createProduct(new proDuct(productImage, productName, productPrice, description,productAddress,checkStatus,loai_sp,nguoi_dang));
    res.send("Created product !!!"); 
});

app.get("/products",async (req,res)=>{
    let proDucts = await Database.instance.getAllProducts();
    res.send(proDucts);
}); 

app.put("/products",async (req,res)=>{
    const { id ,productImage, productName, productPrice, description,productAddress,checkStatus} = req.body;
    try{
        await Database.instance.updateProduct(id ,new proDuct(productImage, productName, productPrice, description,productAddress,checkStatus));
        res.send({message: `Updated`});
    }catch(err){
        res.status(400).send({message: `cannot update`});
    }
   
});

app.delete("/products", async(req,res)=>{
    const{id} = req.body;
    try{
        await Database.instance.deleteProduct(id);
        res.send({massage : `Deleted`});
    }catch(err){
        res.status(400).send({message:`cannot delete [${id}]`});
    }
});


//register
app.post("/users",async (req,res)=>{
    let temp = '';
    const {userAccount,userPassword,userName,userPhone,userAddress,userImage,userCoin} = req.body;
    
    let check = await Database.instance.checkAccount(userAccount);
    if(!check){
        await bcrypt.genSalt(saltRounds,(err,salt)=>{
            bcrypt.hash(userPassword, salt, (err, hash)=>{
                temp = hash;
                Database.instance.createUser(new User(userAccount,temp,userName,userPhone,userAddress,userImage,userCoin));
                console.log("thanh cong ", temp);
                res.send(`Created success: ${userAccount}`);
            });
        });
        }else {
            console.log("fail !")
            res.send(`Created fail: ${userAccount} da ton tai`);
        }
});

//product/id
app.post("/product",async (req,res)=>{
    
    const {id} = req.query;
    try{
        let product_id = await Database.instance.findOneProduct(id);
        res.send(` ${product_id}`);
        // console.log(product_id);
    }catch(err){
        res.send(`cannot found : ${id}`);
    }
  
});

app.get("/product",async (req,res)=>{
    const {id} = req.query;
    console.log(id);
    let detail = await Database.instance.getDetail(id);
    // res.redirect('/detail/'+id)
    res.send(detail);
});

app.post("/user/login", async (req,res)=>{
    const {userAccount,userPassword} = req.body;
    // res.send(`User Account: ${userAccount} User Password: ${userPassword}` );

    // let login = await Database.instance.checkUser(userAccount,userPassword);
    let user =  await Database.instance.findUser(userAccount,userPassword);   
    console.log(user); 
    // res.send(user);
   
        bcrypt.compare(userPassword, user[0].userPassword, function(err,resp){
                if(resp){
                    res.send('dc')
                    console.log("success");
                    console.log(userAccount);
                    console.log(userPassword);
                }
                else {
                    res.send('fail')
                    console.log("fail");
                }
        })
});

app.get("/users",async (req,res)=>{
    let User = await Database.instance.getAllUser();
    res.send(User);
});


module.exports = app;