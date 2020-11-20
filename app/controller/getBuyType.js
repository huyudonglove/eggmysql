const Controller = require('egg').Controller
class getBuyTypeController extends Controller {
    async index() {
        const client1 = await this.app.mysql.get('login_name',{id:1});
         // console.log(this.app.mysql)
        console.log(client1,777)
        this.ctx.body = "Hello World!"
    }
}
module.exports = getBuyTypeController