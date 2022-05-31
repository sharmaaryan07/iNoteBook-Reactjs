const express = require('express');
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/createuser" or Doesn't require auth.
router.post('/createuser', [
    // name must be at least 3 chars long
    body('name', 'Enter a valid Name').isLength({ min: 3 }).withMessage('must be at least 5 chars long'),
    // username must be an email
    body('email', 'Enter a valid Email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long').not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password').isLength({ min: 5 }).matches(/\d/),

], (req, res) => {
    // If there is error show bad request and show errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whthere user's email exist's already or not.
    try {
        // Create a new user.
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user => res.json(user))
            .catch(err => {
                console.log(err)

                res.json({ error: "Enter the unique Email" })
            })
    } catch (error) {   // Catch if there is any error
        console.error(error.message);
        res.status(500).send("Some error occured")
    }


})

module.exports = router;