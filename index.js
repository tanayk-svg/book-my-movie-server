require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authentication')

const app = express()
const PORT = process.env.PORT

if(!PORT) throw new Error('Port not defined')
//mongoose Connection
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log(`MongoDB Connected`))
    //MiddleWares
app.use(express.json())
app.get('/',(req,res) =>{
 return res.json({status:'Success'})
})
app.use(`/api/v1/auth`, authRouter )


app.listen(PORT,()=> console.log(`Server listening at Port:${PORT}`))