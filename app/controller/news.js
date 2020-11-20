const Controller = require('egg').Controller
class NewsController extends Controller {
    async create(){
        this.ctx.body='news'
    }
}
module.exports = NewsController