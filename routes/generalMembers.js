const express=require('express');
const generalMembersRouter=express.Router();

generalMembersRouter.get('/generalMembers',(req,res)=>{
    if(req.session.user){
        res.render('pages/generalMembers')
    }
   else{
       res.redirect('/')
   }
})

module.exports=generalMembersRouter;