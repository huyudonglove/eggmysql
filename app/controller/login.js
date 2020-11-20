const Controller = require('egg').Controller
class LoginController extends Controller {
    async login(){
        const user={
            name:'admin',
            password:'admin123'
        }
       // console.log(this.ctx.request.body,7777);
        let body=this.ctx.request.body;
        //console.log(body.name,body.password)
        body.name==user.name&&body.password==user.password?(()=>{
            console.log(1);
            let token =new Date().getTime();
                let msg={
                    code:0,
                    msg:'success',
                    token:token
                }
                this.ctx.body=msg;
        })():(()=>{
            console.log(2)
            let msg={
                code:1,
                msg:'用户名密码不正确'
            }
            this.ctx.body=msg;
            this.ctx.status=401;
        })();
    }
}
module.exports = LoginController