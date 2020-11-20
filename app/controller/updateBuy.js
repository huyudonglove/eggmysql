const Controller = require('egg').Controller
class updateBuyController extends Controller {
    async index() {
        let body=this.ctx.request.body;
        console.log(body);
        //const result=await this.app.mysql.update('buylist',body);
        let buyid={buyid:body.id};
        const re=await this.ctx.service.selllist.find(buyid);
        console.log(re,'sell')
        if(re){
            this.ctx.body={
                code:1,
                data:null,
                msg:'已产生销售单，不可更新'
            }
        }else{
            let msg={
                buyid:body.id,
                type:body.type,
                totalpice:body.totalpice,
                buytime:11111111111,
                totalnum:body.number,
                image:body.image,
                remainingpice:body.totalpice,
                nownum:body.number
            }
         const re=await this.ctx.service.stocklist.update('buy',msg);
         console.log(re,999)   
         const result=await this.ctx.service.buylist.update(body);
        //console.log(result,777777777)
        this.ctx.body = {
            code:0,
            msg:'success'
            }
        }
    }
}
module.exports = updateBuyController