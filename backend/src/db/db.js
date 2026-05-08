const mongoose= require('mongoose')
require ('dotenv').config()


 async function connectDB(){
 try {
        await mongoose.connect(process.env.MONGO_DB_URI
        );
        console.log("database connected");
    } catch (err) {
        console.error(err);
    }
}
module.exports=connectDB
