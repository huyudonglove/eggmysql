const Controller = require('egg').Controller
class getBuyController extends Controller {
    async index() {
        let type=this.ctx.request.query;
        if(type.type){
            const res=await this.app.mysql.query('select * from stocklist where nownum>0','');
            
            this.ctx.body = {
                code:0,
                msg:'success',
                data:res
            } 
        }else{
        const client1 = await this.app.mysql.select('buylist');
        this.ctx.body = {
            code:0,
            msg:'success',
            data:client1
        } 
        }
        
    }
}
module.exports = getBuyController