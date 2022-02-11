const express = require("express");
const router = express.Router();

const adminModel = require("../models/admin");

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const admin = await adminModel.find({});
  const adminUsername = admin.map((nirob) => nirob.userName);
  const adminPassword = admin.map((nirob) => nirob.password);
  console.log(admin)
  if (userName == adminUsername && password== adminPassword) {
   
     req.session.user=userName;
     res.render('pages/home')
    
  }else{
    console.log("user nai vai")
  }
});

module.exports = router;
