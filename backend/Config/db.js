const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');
require('dotenv').config();
const connectDB = async()=>{
    try{
    mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI);
console.log(` MongoDB connected : ${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB