const users=require('../model/Model')
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")
exports.register=async(req,res)=>{
    const {email,password}=req.body
    console.log(req.body)
    try {
        const user=await users.findOne({email})
        if (user) {
            res.status(400).send({errors:[{msg:"User exist"}]})
        }
        else{
            const newuser=new users(req.body)
            const salt=10
            const hashpassword=bcrypt.hashSync(password,salt)
            newuser.password=hashpassword
            const secretkey="abcdefghijklmnopqrstuvwxyz"
            const token=jwt.sign({id:newuser.id},secretkey)
            await newuser.save()
            res.status(200).send({msg:"registration complete",newuser,token})
        }
    } catch (error) {({msg:"registrartion failed",error})
        res.status(500).send
    }
}
exports.login =async(req,res) => {
    const {email,password}=req.body
    try {
        const user=await users.findOne({email})
        if (!user) {
            res.status(400).send({errors:[{msg:"email not found you need to register"}]})
        }
        else{
            const compare=bcrypt.compareSync(password,user.password)
            if (!compare){
                res.status(400).send({errors:[{msg:"wrong passwords"}]})
            }else{
                const secretkey="abcdefghijklmnopqrstuvwxyz"
                const token=jwt.sign({id:user.id},secretkey)     
                res.status(200).send({msg:"login successfully",user,token})
            }
        }
    } catch (error) {
        res.status(500).send({msg:"login failed",error})
    }
}
exports.getcurrent=(req,res)=>{
    res.status(200).send({user:req.user})
}