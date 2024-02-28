const express= require ('express')
const { register, login, getcurrent } = require('../controller/Controller')
const { registervalidation, validation, loginvalidation } = require('../middleware/Validation')
const { isauth } = require('../middleware/isauth')
const userrouter = express.Router()
userrouter.post('/register',registervalidation,validation,register)
userrouter.post('/login',loginvalidation,validation,login)
userrouter.get('/getcurrent',isauth,getcurrent)
module.exports = userrouter