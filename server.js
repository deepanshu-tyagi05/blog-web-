const app= require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

const port=3000


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})