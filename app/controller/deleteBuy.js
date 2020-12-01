const Controller = require('egg').Controller
class deleteBuyController extends Controller {
    async index() {
        const body=this.ctx.request.body;
        const bodyC={
            buyid:this.ctx.request.body.id
        }
        //检查销售记录
        const re=await this.ctx.service.selllist.find(bodyC);
        console.log(re,'sell')
        if(re.length){
            this.ctx.body={
                code:1,
                data:null,
                msg:'已产生销售单，不可删除'
            }
        }else{
            const result=await this.app.mysql.delete('buylist',body);
            const re=await this.app.mysql.delete('stocklist',bodyC)
            console.log(result,777)
            this.ctx.body = {
                code:0,
                msg:'success'
            }
        }  
    }
}
module.exports = deleteBuyController