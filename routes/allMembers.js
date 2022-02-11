const express=require('express')
const allMembersRouter=express.Router();
const userModel=require('../models/General')

allMembersRouter.get('/allMembers',(req,res)=>{
    if(req.session.user){
        res.render('pages/allMembers')
    }
    else{
        res.redirect('/')
    }
   
})

allMembersRouter.get('/showAllMembers',(req,res)=>{
         userModel.find({},(err,result)=>{
             if(err){
                 console.log('can not find')
             }
             else{
                 res.send(result)
             }
         }) 
})


module.exports=allMembersRouter;