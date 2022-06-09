const jwt = require('jsonwebtoken');    // Imported  jsonwebtoken

const JWT_SCERET = 'forpasswordsecurity'


const fetchuser=(req, res, next)=>{
    // GEt the user firm jwt token and add Id to req object
    const token =req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using valid token"})
    }

    try {
        const data= jwt.verify(token,JWT_SCERET)    //Will verfy the user token
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using valid token"})
    }

}


module.exports=fetchuser;

