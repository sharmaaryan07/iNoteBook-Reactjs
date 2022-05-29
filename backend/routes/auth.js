const express = require('express')    //improted express
const router = express.Router()

router.get('/', (req, res) => {
    obj={
        name: 'Kakashi',
        age: 20
    }
    res.json(obj)
})

module.exports=router

