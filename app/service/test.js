const Service = require('egg').Service;
class TestServices extends Service{
    async find(id){
        console.log(id,777777777777)
    }
}
module.exports= TestServices;