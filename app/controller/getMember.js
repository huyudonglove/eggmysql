const Controller = require('egg').Controller
class getMemberController extends Controller {
    async index() {
        const res=await this.ctx.service.member.find();
        this.ctx.body={
            code:0,
            data:res,
            msg:'success'
        }  
    }
}
module.exports = getMemberController