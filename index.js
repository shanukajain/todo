const express=require("express");
const { connection } = require("./config");
const cors=require("cors");
const mongoose=require("mongoose");
const { todorouter } = require("./route");
const { userrouter } = require("./user");
const { authantication } = require("./authantication");
const app=express();

// index file 

require("dotenv").config();
const port=process.env.port;

app.get("/",(req,res)=>{
    res.send("home page");
})

app.use(cors())
app.use(express.json());
app.use("/users",userrouter);
app.use(authantication);
app.use("/todo",todorouter);









app.listen(port,async()=>{
    console.log(`port ${port}`);  
    })
