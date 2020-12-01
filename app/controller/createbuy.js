const Controller = require('egg').Controller
class createbuyController extends Controller {
    async index() {
        let msg={
            buytime:null,
            number:1,
            type:0,
            image:0,
            buypice:0,
            totalpice:0
        };
        let body=this.ctx.request.body;
        msg.number=body.number;
        msg.type=body.type;
        msg.buypice=body.buypice;
        msg.totalpice=body.totalpice;
        msg.image=body.image;
        msg.buytime=body.buytime;
        let stockMsg={
            type:body.type,
            image:body.image,
            remainingpice:body.totalpice,
            totalnum:body.number,
            nownum:body.number,
            buyid:0,
            buytime:''
        }
        //先查询是否有重名再插入数据
        let op={
            where:{
                type:body.type
            }
        }
        const isExit= await this.app.mysql.select('buylist',op);
        console.log(isExit,777777);
        if(isExit.length){
            this.ctx.body={
                code:1,
                msg:'该型号已经存在，请重新输入'
            }
            return;
        }
        const result=await this.app.mysql.insert('buylist',msg);
        const buyT=await this.app.mysql.get('buylist',{type:body.type});
        stockMsg.buyid=buyT.id;
        stockMsg.buytime=buyT.buytime;
        stockMsg.totalpice=body.totalpice;
        const re=await this.app.mysql.insert('stocklist',stockMsg);
         if(result.affectedRows==1){
            this.ctx.body = {
                code:0,
                msg:'success'
            }
         }else{
            this.ctx.body = {
                code:1,
                msg:'创建进货记录失败'
            }
         }   
        
    }
}
module.exports = createbuyController