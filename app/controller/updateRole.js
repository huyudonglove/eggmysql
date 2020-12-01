const Controller = require('egg').Controller
class updateRoleController extends Controller {
    async index() {
     const msg=this.ctx.request.body;

     console.log(msg);
     let ops={
         where:{
             account:msg.account
         }
     }
     const res= await this.app.mysql.update('loginName',msg,ops);
     console.log(res,8888)
      this.ctx.body={
          code:0,
          msg:'success'
      }
    }
}
module.exports = updateRoleController