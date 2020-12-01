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
            buyid:'',
            sellRole:'',
            memberName:'',
            memberPhone:'',
        }
    
        msg.selltime=body.time;
        msg.type=body.type;
        msg.sellpice=body.pice;
        msg.sellnumber=body.num;
        msg.buyid=body.buyId;
        msg.sellRole=JSON.stringify(body.sellRole);//销售人员
        msg.memberName=body.memberName;
        msg.memberPhone=body.memberPhone;
        console.log(msg,789);
        //获取进货信息
        const buyMsg=await this.ctx.service.buylist.find(body.buyId);
        msg.image=buyMsg.image;
        //增加销售记录
        const res=await this.ctx.service.selllist.add(msg);
        //更改库存
        const sellMsg=await this.ctx.service.selllist.find({buyid:body.buyId});
        console.log(sellMsg,889778);
         let allnum=0;
         let allpice=0;
        if(sellMsg.length){
            sellMsg.map(v=>{
                allnum+=v.sellnumber*1;
                allpice+=v.sellpice*1;
            })
        }
        let sell={
            remainingpice:'',
            nownum:''
        }
        let options={  buyid:buyMsg.id };
        sell.remainingpice=allpice;
        sell.nownum=buyMsg.number-allnum;
       // const re=await this.app.mysql.update('stocklist',sell,{where:options})
       const re =await this.ctx.service.stocklist.update(sell,options)
        this.ctx.body = {
            code:0,
            data:null,
            msg:'success'
        }
    }
}
module.exports = createShopController