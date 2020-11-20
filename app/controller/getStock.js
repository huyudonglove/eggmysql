const Controller = require('egg').Controller
class getStockController extends Controller {
    async index() {
        const client = await this.app.mysql.select('stocklist');
         // console.log(this.app.mysql)
        console.log(client,777)
        this.ctx.body ={
            code:0,
            data:client,
            msg:'success'
        }
    }
}
module.exports = getStockController