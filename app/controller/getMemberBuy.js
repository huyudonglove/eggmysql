const Controller = require('egg').Controller
class getMemberBuyController extends Controller {
    async index() {
     const memberPhone=this.ctx.query;
     console.log(memberPhone);
     //return;
      let sqlM=`select * from(select * from selllist as tb order by tb.id desc)temp_table where memberPhone = ${memberPhone.memberPhone}`;
     const res= await this.app.mysql.query(sqlM);
     console.log(res,8888)
      this.ctx.body={
          code:0,
          data:res,
          totalPage:res.length,
          msg:'success'
      }
    }
}
module.exports = getMemberBuyController