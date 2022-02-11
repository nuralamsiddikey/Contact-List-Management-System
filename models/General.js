const mongoose=require('mongoose')
const { Schema } = mongoose;

const generalSchema=new Schema({
    category:String,
    firstName:String,
    lastName:String,
    age:Number,
    contactNumber:Number,
    mail:String,
    city:String
})



module.exports=mongoose.model('GeneralMember',generalSchema);
