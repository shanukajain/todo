const express=require("express");
const userrouter=express.Router();
const bcrypt=require("bcrypt");
var jwt = require('jsonwebtoken');
const { Usermodel } = require("./usermodel");
userrouter.use(express.json());
require("dotenv").config();
let key=process.env.key
userrouter.post("/register",async(req,res)=>{
try {
    let payload=req.body;
    bcrypt.hash(payload.password, 5,async function(err, hash) {
        payload.password=hash;
       let data=new Usermodel(payload);
       await data.save(); 
    });
    let data=await Usermodel.find();
    res.send(data);
} catch (error) {
    console.log(error);
}
})
userrouter.post("/login",async(req,res)=>{
 try {
    let {email,password}=req.body;
    let data=await Usermodel.findOne({"email":email});
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