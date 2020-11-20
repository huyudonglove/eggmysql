const Controller = require('egg').Controller;
const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const { v4: uuidv4 } = require('uuid');
class uploadController extends Controller {
    async index() {
        const parts=this.ctx.multipart();
        let part=await parts();
        console.log(part,99999)
         // console.log(this.app.mysql)
         if(!part.filename){
               this.ctx.body={
                   code:1,
                   msg:'文件错误'
               } 
         }else{
            //console.log(uuidv4()); 
            const uuid=uuidv4();
             let file=[];
            file=part.filename.split('.');
           // console.log(file);
            let filename=`${uuid}.${file[file.length-1]}`;
             let filePath=path.join('/home/lc/code/egg-init/app/public',filename);
             let wirtable=fs.createWriteStream(filePath)
             await part.pipe(wirtable);

             this.ctx.body={
                code:0,
                data:{
                      filename:filename
                },
                msg:'文件上传成功'
            } 
         }
    }
}
module.exports = uploadController