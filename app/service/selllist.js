const Service = require('egg').Service;
class selllistServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert('selllist',msg)
        return res;
    }
    async delete(){

    }
    async update(msg){
        const res=await this.app.mysql.update('selllist',msg);
        return res;
    }
    async find(msg){
        if(msg){
            const res=await this.app.mysql.get('selllist',msg)
            return res;
        }
    }
}
module.exports= selllistServices;