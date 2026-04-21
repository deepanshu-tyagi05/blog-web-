const mongoose= require('mongoose')


 async function connectDB(){
 try {
        await mongoose.connect(
            "mongodb+srv://deepanshutyagi:deepanshu5177@cluster0.99uijfb.mongodb.net/newDb?retryWrites=true&w=majority"
        );
        console.log("connected ✅");
    } catch (err) {
        console.error(err);
    }
}
module.exports=connectDB
