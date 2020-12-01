const Controller = require('egg').Controller
class postShopController extends Controller {
    async index() {
      const body =this.ctx.request.body;
      console.log(body);
      let options={
          orders:[["id","desc"]],
          limit:body.limit,
          offset:body.page*body.limit-body.limit
      };
      let sqlM=`select * from(select * from selllist as tb order by tb.id desc)temp_table limit ${(body.page-1)*body.limit},${body.page*body.limit}`;
     const res= await this.app.mysql.query(sqlM);
      this.ctx.body={
          code:0,
          data:res,
          totalPage:res.length,
          msg:'success'
      }
    }
}
module.exports = postShopController