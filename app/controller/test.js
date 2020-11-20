const Controller = require('egg').Controller
class TestController extends Controller {
    async index(){
        this.ctx.body='11111111'
    }
    async create(){
        this.ctx.body='22222222222';
        this.ctx.service.test.find(11111111);
        console.log(2222)
    }
}
module.exports = TestController