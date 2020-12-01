const Controller = require('egg').Controller
class createLoginNameController extends Controller {
    async index() {
        let  body=this.ctx.request.body;
        console.log(body,999);
        let msg={
            name:body.name,
            account:body.account,
            password:body.password,
            type:0
        }
        const res=await this.ctx.service.loginName.find({account:msg.account});
        console.log(res,7777)
        if(res.length){
            this.ctx.body={
                code:1,
                msg:'账号已存在'
            }
            return;
        }
        const create=await this.ctx.service.loginName.add(msg);
        console.log(create);
        this.ctx.body={
            code:0,
            msg:'success'
        }
    }
}
module.exports = createLoginNameController