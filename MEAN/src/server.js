const express = require("express");
const bodyParser = require("body-parser");
const Database = require("./database");
const proDuct = require("./models/product.model");
const User = require("./models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const cors = require("cors");
const jwt = require("jsonwebtoken");
var cookiesParser = require("cookie-parser");
//image
const path = require("path");
const profilesRoutes = require("./routes/profiles");
const categoriesRoutes = require("./routes/categories");
const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookiesParser());
//CATEGORY

app.get("/products/xe", async (req, res) => {
    let proDucts = await Database.instance.getProductByLoaiSp();
    res.send(proDucts);
});

//PRODUCT
app.post("/products", async (req, res) => {
    const {
        productImage,
        productName,
        productPrice,
        description,
        productAddress,
        checkStatus,
        loai_sp,
        nguoi_dang,
    } = req.body;
    await Database.instance.createProduct(
        new proDuct(
            productImage,
            productName,
            productPrice,
            description,
            productAddress,
            checkStatus,
            loai_sp,
            nguoi_dang
        )
    );
    res.send("Created product !!!");
});

app.get("/products", async (req, res) => {
    let proDucts = await Database.instance.getAllProducts();
    res.send(proDucts);
});

app.put("/products", async (req, res) => {
    const {
        id,
        productImage,
        productName,
        productPrice,
        description,
        productAddress,
        checkStatus,
    } = req.body;
    try {
        await Database.instance.updateProduct(
            id,
            new proDuct(
                productImage,
                productName,
                productPrice,
                description,
                productAddress,
                checkStatus
            )
        );
        res.send({ message: `Updated` });
    } catch (err) {
        res.status(400).send({ message: `cannot update` });
    }
});

app.delete("/products", async (req, res) => {
    const { id } = req.body;
    try {
        await Database.instance.deleteProduct(id);
        res.send({ massage: `Deleted` });
    } catch (err) {
        res.status(400).send({ message: `cannot delete [${id}]` });
    }
});

//DETAIL
app.post("/product", async (req, res) => {
    const { id } = req.body;
    try {
        let product_id = await Database.instance.findOneProduct(id);
        res.send(` ${product_id}`);
        // console.log(product_id);
    } catch (err) {
        res.send(`cannot found : ${id}`);
    }
});

app.get("/product", async (req, res) => {
    const { id } = req.query;
    console.log(id);
    let detail = await Database.instance.getDetail(id);
    // res.redirect('/detail/'+id)
    res.send(detail);
});
//USER
app.get("/users", async (req, res) => {
    let User = await Database.instance.getAllUser();
    res.send(User);
});

app.post("/register", async (req, res) => {
    let temp = "";
    const {
        userAccount,
        userPassword,
        userName,
        userPhone,
        userAddress,
    } = req.body;
    let check = await Database.instance.findUser(userAccount);
    if (check == "") {
        await bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(userPassword, salt, (err, hash) => {
                temp = hash;
                Database.instance.createUser(
                    new User(userAccount, temp, userName, userPhone, userAddress)
                );
                res.status(200).send({
                    message: `Created USer: ${userAccount}`,
                });
            });
        });
    } else {
        res.status(400).send({
            message: `Account already exists`,
        });
    }
});

app.post("/login", async (req, res) => {
    const { userAccount, userPassword } = req.body;
    const user = await Database.instance.checkUser(userAccount);
    console.log(user);
    if(user == ''){
        res.status(400).send({
            message:`Can't find account`
        })
    }else{
        await bcrypt.compare(
            userPassword,
            user[0].userPassword,
            function (err, resp) {
                if (resp) {
                    var token = jwt.sign(
                        {
                            _id: user._id,
                        },
                        "mk"
                    );
                    return res.json({
                        message: `Login successfully with account :${userAccount}`,
                        token: token,
                    });
                } else {
                    res.status(400).send({
                        message: `wrong password`,
                    });
                }
            }
        );
    }
});

//get : login
app.get("/login", async (req, res) => {
    console.log(token);
    try {
        var token = req.params.token;
        var ketqua = jwt.verify(token, "mk");
        console.log(ketqua);
    } catch (error) {
        return res.json("ban can phai login");
    }
});


//TEST IMAGE
app.use('/images', express.static(path.join('images')));

app.use('/api/', profilesRoutes);
//CATEGORY
app.use('/api/',categoriesRoutes);


module.exports = app;
