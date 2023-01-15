const mongoose = require('mongoose')

mongoose.set('strictQuery',true)
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log(`Connection Successful`);
}).catch((err)=>{
    console.log(err.messgae);
})