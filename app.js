const express=require('express')
const app=express();
const mongoose=require('mongoose')
const session=require('express-session')
const dotenv=require('dotenv')
dotenv.config();
app.set('view engine','ejs')

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static('views'))
app.use(session({
    secret:"my secret key",
    resave:true,
    saveUninitialized:true
}))

//importing routes
const adminRouter=require('./routes/admin')
const homeRouter=require('./routes/home')
const userRouter=require('./routes/register')
const allMembersRouter=require('./routes/allMembers')
const generalMembersRouter=require('./routes/generalMembers')
const superMembersRouter=require('./routes/superMembers')
const deleteOne=require('./routes/delete')
const authRouter=require('./routes/admin')
const logoutRouter=require('./routes/logout')



app.use('/admin',adminRouter)
app.use('/userHome',homeRouter)
app.use('/user',userRouter)
app.use('/userAll',allMembersRouter);
app.use('/userGl',generalMembersRouter);
app.use('/userSp',superMembersRouter)
app.use('/userDelete',deleteOne)
app.use('/adminlogin',authRouter)
app.use('/userlogout',logoutRouter)



// home routing
app.get('/',(req,res)=>{
   res.render('pages/login')
})




//DB connection
mongoose.connect('mongodb+srv://nur:99088@cluster0.jzt6s.mongodb.net/app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('connection with database is successfull')
    }
})





// server listening
const port=3000;
app.listen(port,()=>{
    console.log(`your server is listening at port ${port}`)
})