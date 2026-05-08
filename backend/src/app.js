const express= require("express")
const multer= require('multer')
const UploadFile = require("./service/storage.service")
const postModel= require("./models/posts.model")
const cors = require("cors")




const app= express()
app.use(express.json())
app.use(cors())
const upload= multer({storage:multer.memoryStorage()})


// app.post('/create-post',upload.single("image"),async(req,res)=>{
//     // console.log(req.body)
//     // console.log(req.file)
//     const result = await UploadFile(req.file)
//     // console.log(result)
//     const post = await postModel.create({
//         image: result.url,
//         caption:req.body.caption
//     })
//      return res.status(200).json({
//         message:"uplaod successfully",
//         post
//     })

// })
app.post('/create-post', upload.single("image"), async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const result = await UploadFile(req.file.buffer);

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        });

        return res.status(200).json({
            message: "upload successfully",
            post
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });

    }

});
app.get("/create-post",async(req,res)=>{
    const post = await postModel.find({})
    return res.status(201).json({
        message:"fetch succesfully",
        post
        
    })
})





module.exports= app
