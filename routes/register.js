const express=require('express');
const res = require('express/lib/response');
const router=express.Router();



//imports models
 const GeneralModel=require('../models/General')
//  const SuperModel=require('../models/Super')
 router.post('/addMember',(req,res)=>{
  
  const{category,firstName,lastName,age,contactNumber,mail,city}=req.body;
  
    console.log(req.body.category)

  
           
     const generalMember=new GeneralModel({
          category,
            firstName,
            lastName,
            age,
            contactNumber,
            mail,
            city
     })
     generalMember.save((err,result)=>{
       if(err){
         console.log(err)
       }
       else{
         console.log('1 Genereal member successfully added!!')
          res.render('pages/success')
       }
     })


})



router.get('/register',(req,res)=>{
  if(req.session.user){
    res.render('pages/register')
  }
  else{
    
    res.redirect('/')
  }
})

module.exports=router;