const Controller = require('egg').Controller
class getLoginNameController extends Controller {
    async index() {
        console.log(this.ctx.query,999)
    
        const res=await this.ctx.service.loginName.find(this.ctx.query||null);
        res.shift();
        this.ctx.body={
            code:0,
            data:res,
            msg:'success'
        }
    }
}
module.exports = getLoginNameController