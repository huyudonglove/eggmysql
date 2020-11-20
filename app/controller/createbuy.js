const Controller = require('egg').Controller
class createbuyController extends Controller {
    async index() {
        function formatDate(date) {
            var date = new Date(date);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD +" "+hh + mm + ss;
          }
        let msg={
            buytime:formatDate(new Date().getTime()),
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
        let stockMsg={
            type:body.type,
            image:body.image,
            remainingpice:body.totalpice,
            totalnum:body.number,
            nownum:body.number,
            buyid:0,
            buytime:''
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