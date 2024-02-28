const mongoose = require('mongoose')
const connectdb =async ()=>{
    try {
        await mongoose.connect("mongodb+srv://raed23:5d2ahatGwFX2TsD7@cluster0.dpt5cdi.mongodb.net/test?retryWrites=true&")
        console.log('database is connected')
    } catch (error) {
        console.log('database  not is connected ',error)
}
}
module.exports =connectdb