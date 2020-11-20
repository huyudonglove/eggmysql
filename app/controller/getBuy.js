const Controller = require('egg').Controller
class getBuyController extends Controller {
    async index() {
        const client1 = await this.app.mysql.select('buylist');
         // console.log(this.app.mysql)
        //console.log(client1,777)
        //const data=JSON.parse(JSON.stringify(client1))
        this.ctx.body = {
            code:0,
            msg:'success',
            data:client1
        }
    }
}
module.exports = getBuyController