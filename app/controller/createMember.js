const Controller = require('egg').Controller
class createMemberController extends Controller {
    async index() {
        let msg={
            memberName:'',
            memberPhone:''
        };
        let body=this.ctx.request.body;
        msg.memberName=body.memberName;
        msg.memberPhone=body.memberPhone;
        //先查重再添加
        const isMember=await this.ctx.service.member.find(msg.memberPhone);
        console.log(isMember);
        if(isMember.length){
            this.ctx.body={
                code:1,
                msg:'会员已存在'
            }
            return;
        }
        const result=await this.ctx.service.member.add(msg);
         if(result.affectedRows==1){
            this.ctx.body = {
                code:0,
                msg:'success'
            }
         }else{
            this.ctx.body = {
                code:1,
                msg:'创建会员失败'
            }
         }   
        
    }
}
module.exports = createMemberController