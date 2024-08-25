require('dotenv').config()

const express = require('express')

const app = express()
const PORT = process.env.PORT

if(!PORT) throw new Error('Port not defined')
app.get('/',(req,res) =>{
 return res.json({status:'Success'})
})


app.listen(PORT,()=> console.log(`Server listening at Port:${PORT}`))