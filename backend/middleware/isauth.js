const jwt =require("jsonwebtoken");
const users=require("../model/Model")
exports.isauth=async(req,res,next)=>{
    const token =req.header("token");
    try {
        const secretkey = "abcdefghijklmnopqrstuvwxyz"
        const verify =jwt.verify(token,secretkey)
        console.log(verify)
        if (!verify){
        res.status(400).send({message:'you are not authorized'})
        }
        const user =await users.findById(verify.id)
        req.user = user
        next()
    } catch (error) {
        res.status(500).send({message:'invalid token',error})
    }
  
}
