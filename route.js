const express=require("express");
const app=express();
const { Todomodel } = require("./model");
const todorouter=express.Router();
app.use(express.json());

todorouter.get("/",async(req,res)=>{
    let data=await Todomodel.find();
    res.send(`${data}`);
})
todorouter.post("/create",async(req,res)=>{
   try {
    const data=req.body;
    console.log(data);
    const todo=new Todomodel(data);
     await todo.save();
    res.send("done"); 
   } catch (error) {
    res.send("error");
   }
});






todorouter.patch("/edit/:todoid",async(req,res)=>{
    try {
        const id=req.params.todoid;
        let change={complete:true}
       await Todomodel.updateMany({_id:id},change)
    } catch (error) {
        console.log("error",error)
    }
    
    res.send("done");
})

todorouter.delete("/delete/:todoid",async(req,res)=>{
    try {
        const id=req.params.todoid;
       await Todomodel.deleteMany({_id:id});
    } catch (error) {
        console.log("error",error)
    }
    
    res.send("done");
})

module.exports={
    todorouter
}
