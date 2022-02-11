const express=require('express');
const superMembersRouter=express.Router();

superMembersRouter.get('/superMembers',(req,res)=>{
    if(req.session.user){
        res.render('pages/superMembers')
    }
   else{
       res.redirect('/')
   }
})

module.exports=superMembersRouter;