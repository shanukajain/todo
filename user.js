const express=require("express");
const userrouter=express.Router();
const bcrypt=require("bcrypt");
var jwt = require('jsonwebtoken');
const { UserModel } = require("./usermodel");
userrouter.use(express.json());
require("dotenv").config();
let key=process.env.key
userrouter.post("/register",async(req,res)=>{
try {
    let payload=req.body;
    bcrypt.hash(payload.password, 5,async function(err, hash) {
        payload.password=hash;
       let data=new UserModel(payload);
       await data.save(); 
    });
    let data=await UserModel.find();
    res.status(200).send({ error : false, data:payload });
} catch (error) {
    res.status(400).send({ error: true, message: error.message });
}
})


//user login 
userrouter.post("/login",async(req,res)=>{
 try {
    let {email,password}=req.body;
    let data=await UserModel.findOne({"email":email});
    bcrypt.compare(password, data.password).then(function(result) {
    if(result){
var token = jwt.sign({ userId:data._id }, key);
res.send({"msg":"done","token":token})
    }
    });
 } catch (error) {
    res.send(error);
 }
})


module.exports={
    userrouter
}

//user router