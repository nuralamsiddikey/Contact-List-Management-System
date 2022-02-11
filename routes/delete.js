const express=require('express');
const res = require('express/lib/response');
const router=express.Router();
const ObjectId=require('mongodb').ObjectId



const userModel=require('../models/General')
router.delete('/userOne/:id',(req,res)=>{
    userModel.findOneAndRemove({
     _id:ObjectId(req.params.id)
    })
    .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })

})





module.exports=router;