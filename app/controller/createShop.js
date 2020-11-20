const Controller = require('egg').Controller
class createShopController extends Controller {
    async index() {
        let body=this.ctx.request.body;
        let msg={
            selltime:'',
            sellpice:'',
            type:'',
            sellnumber:'',
            image:'',
            buyid:''
        }
        console.log(body,999)
        msg.selltime=body.time;
        msg.type=body.type;
        msg.sellpice=body.pice;
        msg.sellnumber=body.num;
        const buyMsg=await this.app.mysql.get('buylist',{id:body.buyId});
        console.log(buyMsg,9999);
        msg.buyid=body.buyId;
        msg.image=buyMsg.image;
        const res=await this.app.mysql.insert('selllist',msg);
        let sell={
            remainingpice:'',
            nownum:''
        }
        let options={
            where:{
                buyid:buyMsg.id
            }
        }
        sell.remainingpice=buyMsg.totalpice-msg.sellpice;
        sell.nownum=buyMsg.number-msg.sellnumber;
        sell.buyid=buyMsg.id;
        const re=await this.app.mysql.update('stocklist',sell,options)
        this.ctx.body = "Hello World!"
    }
}
module.exports = createShopController