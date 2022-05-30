const mongoose = require('mongoose')
const mongoURI='mongodb://localhost:27017/mynotebook?directConnection=true&tls=false&readPreference=primary'

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected")
    })
}

module.exports=connectToMongo;