const jwt=require("jsonwebtoken");
require("dotenv").config();
const key=process.env.key;
// authanticate the user by token
const authantication=(req,res,next)=>{
try {
    let token=req.headers.authorization;
    if(!token) {res.status(400).send({"error":"oken not present"})}
    else{
    var decoded = jwt.verify(token, key);
    if(decoded){
        req.body.userID=decoded.userId;
        next();
    }else {
        res.send({"msg":"login please"})
    }
    }
} catch (error) {
    console.log(error);
    res.send({"msg":"login please"})
}
}
module.exports={
    authantication
}