const express=require('express');
const router=express.Router();
const User = require('../models/User') 
const { body, validationResult } = require('express-validator');



router.post('/',
//validators
[
    body('password',"should be atleast 8 characters").isLength({ min: 8 }),
    body('name','enter a valid name').isLength({ min: 3 }),
    body('email','enter a valid email').isEmail()] ,async (req,res)=>{


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
try{
    //checking if email already exists
        let user= await User.findOne({email:req.body.email})
        if(user)
         { return res.status(400).json({error:"user already exists "});
    }
    //creating new user
         user= await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          })
          res.send({"ok":1})}catch(error){
            console.error(error)
            res.status(500)

          }
        })

module.exports=router
