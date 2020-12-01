const Controller = require('egg').Controller;
//const jwt=require('jsonwebtoken');
const Base64=require('js-base64');
class LoginController extends Controller {
    async login(){
        const user={
            account:''
        };
        user.account=this.ctx.request.body.name;
        let password=this.ctx.request.body.password;
       // console.log(this.ctx.request.body,7777);
        //console.log(body.name,body.password)
        let res=await this.ctx.service.loginName.find(user);
        console.log(res);
    
        if(!res.length){
            this.ctx.body={
                code:1,
                msg:'账号不存在'
            }
        }else{
            if(res[0].password!=password){
                this.ctx.body={
                    code:1,
                    msg:'密码错误'
                }
            }else{
                let msg={
                    name:res[0].name,
                    account:res[0].account,
                    password:res[0].password,
                    time:new Date().getTime()
                }
                 let token=Base64.encode(JSON.stringify(msg));
                 this.ctx.body={
                     code:0,
                     data:token,
                     msg:'success'
                 }
            }
        }
    }
}
module.exports = LoginController