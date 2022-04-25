const mongoose =require("mongoose")


const foodSchema = mongoose.Schema({
    name:{
         type:String,
         required:true
    },
   type:{
         type:String,
         required:true
    }, 
 time:{
         type:String,
         default:Date.now()
    },
    ingredients:{
        type:Array,
   },
   recipe:{
    type:Array,
    required:true
},
},{
    timestamps:true
})
const Food = mongoose.model("Food", foodSchema);
module.exports=Food;