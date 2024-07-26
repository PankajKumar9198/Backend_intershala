const mongoose = require("mongoose");
const { title } = require("process");

const JobShcema = new mongoose.Schema({
    
    title:String,
    company:String,
    location:String,
    Experience:String,
    category:String,
    aboutCompany:String,
    aboutInternship:String,
    Whocanapply:String,
    perks:Array,
    AdditionalInfo:String,

    CTC:String,
    startDate:String,

    createAt:{
        type:Date,
        default:Date.now,
    },
    
    

})
module.exports=mongoose.model("Job",JobShcema);