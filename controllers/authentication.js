
const User = require('../models/user')
const lib = require('../lib/user')

const handleSignUp = async (req,res) =>{
 const safeParseResult = lib.validateUserSignup(req.body)

    if(safeParseResult.error){
        return res.status(400).json({status : 'error' , error : safeParseResult.error})
    }

    const {firstName,lastName,email,password} = safeParseResult.data
    try{
        const {hash: hashedPassword,salt} =lib.generatehash(password)
        const createUserResult =  await User.create({firstName,lastName,password:hashedPassword,salt})
        // generate a JWT token and send that
    }catch(err){
        if(err.code === 11000)
            return res.status(400).json({message: err.message })
        return res.status(500).json({message:'Internal server error'})
    }
  
}

module.exports = {
    handleSignUp,
}