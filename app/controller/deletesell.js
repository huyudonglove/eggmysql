const { consoleLevel } = require('egg-mock');

const Controller = require('egg').Controller
class deletesellController extends Controller {
    async index() {
        const body=this.ctx.request.body;
        if(!body){
            this.ctx.body={
                code:1,
                data:null,
                msg:'删除id不能为空'
            }
            return;
        }
        //1.查找销售记录
        //2.查找库存信息
        //2.先更新库存单再进行删除
        const sellMsg=await this.ctx.service.selllist.find(body);
        console.log(sellMsg,999);
        let deletenum=sellMsg[0].sellnumber;
        let deletepice=sellMsg[0].sellpice;
        let buyid=sellMsg[0].buyid;
        console.log(buyid)
        const stockMsg=await this.ctx.service.stocklist.find({buyid:buyid});
        console.log(stockMsg);
        let stocknum=stockMsg[0].nownum;
        let stockpice=stockMsg[0].remainingpice;
        let newnum=deletenum+stocknum;
        let newpice=stockpice-deletepice;
        let newMsg={
            nownum:newnum,
            remainingpice:newpice
        }
        const res=await this.ctx.service.stocklist.update(newMsg,{buyid:buyid})
    
        const client =await this.ctx.service.selllist.delete(body);
         // console.log(this.app.mysql)
        console.log(client,777)
        this.ctx.body = {
            code:0,
            data:null,
            msg:'success'
        }
    }
}
module.exports = deletesellController