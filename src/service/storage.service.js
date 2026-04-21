const {ImageKit }= require('@imagekit/nodejs')
const dotenv= require('dotenv').config()

const client = new ImageKit({
  privateKey:"private_go1F/EMwOKr1kFiYo5d6NhAOwds=",
});
async function UploadFile(buffer){
    console.log(buffer)
   const result =await client.files.upload({
  file: buffer.toString('base64'),
  fileName: 'file-name.jpg',
});
    return result
    console.log(result);


}
module.exports=UploadFile