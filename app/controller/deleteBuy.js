const Controller = require('egg').Controller
class deleteBuyController extends Controller {
    async index() {
        const body=this.ctx.request.body;
        const bodyC={
            buyid:this.ctx.request.body.id
        }
        const result=await this.app.mysql.delete('buylist',body);
        const re=await this.app.mysql.delete('stocklist',bodyC)
        console.log(result,777)
        this.ctx.body = {
            code:0,
            msg:'success'
        }
    }
}
module.exports = deleteBuyController