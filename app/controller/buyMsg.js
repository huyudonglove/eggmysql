const Controller = require('egg').Controller
class buyMsgController extends Controller {
    async index() {
        console.log(this.ctx.query,9999)
        let id=this.ctx.query.id;
        if(id){
            const data=await this.app.mysql.get('buylist',{id:id});
            this.ctx.body={
                code:0,
                msg:"success",
                data:data
            }
        }else{
            this.ctx.body={
                code:1,
                msg:'id不能为空'
            }
        }  
    }
}
module.exports = buyMsgController