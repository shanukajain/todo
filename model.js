const mongoose=require("mongoose");
const todoschema=mongoose.Schema({
Task_name:String,
complete:{type:Boolean,default:false}
});
const Todomodel=mongoose.model("todo",todoschema);
module.exports={
    Todomodel
}

// todo model