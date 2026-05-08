const {ImageKit }= require('@imagekit/nodejs')
require('dotenv').config()

const client = new ImageKit({
  privateKey:process.env.IMAGE_KIT_PRIVATEKEY
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