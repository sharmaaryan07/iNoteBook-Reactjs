const mongoose =require('mongoose')

const monoURL='mongodb://localhost:27017/'

const connectToMongo=(monoURL,()=>{
    console.log('Connected to mongodb');
})

module.exports=connectToMongo;