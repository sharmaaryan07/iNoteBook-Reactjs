const express = require('express');
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs'); //Imported bcryptjs
const jwt = require('jsonwebtoken');    // Imported  jsonwebtoken
const { body, validationResult } = require('express-validator');    //Imported express-validator


const JWT_SCERET='forpasswordsecurity'

// Create a User using: POST "/api/auth/createuser" or Doesn't require auth.
router.post('/createuser', [
    // name must be at least 3 chars long
    body('name', 'Enter a valid Name').isLength({ min: 3 }).withMessage('must be at least 5 chars long'),
    // username must be an email
    body('email', 'Enter a valid Email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long').not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password').isLength({ min: 5 }).matches(/\d/),

], async (req, res) => {
    // If there is error show bad request and show errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whthere user's email exist's already or not.
    try {
        // Securing the password by using bycriptjs.
        const salt = await bcrypt.genSaltSync(10);    //Generate a salt for password security
        const secpass= await bcrypt.hashSync(req.body.password, salt) //Generate a secure password with salt


        let user= await User.findOne({email: req.body.email});
        if(user){
            return req.status(400).json({error:"This email already exist's"})
        }
        // Create a new user.
        user= await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
        })
        const data={
            user:{
                id: user.id
            }
        }
        const jwtToken=jwt.sign(data, JWT_SCERET);
        // console.log(jwtToken)
        res.json({jwtToken})
        
    } catch (error) {   // Catch if there is any error
        console.error(error.message);
        res.status(500).send("Some error occured")
    }


})

module.exports = router;