const express=require('express');
const router=express.Router();

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
        }
    })
})

module.exports=router;