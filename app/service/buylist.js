const Service = require('egg').Service;
class buylistServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert('buylist',msg)
        return res;
    }
    async delete(){

    }
    async update(msg){
        const res=await this.app.mysql.update('buylist',msg);
        return res;
    }
    async find(id){
        if(id){
            const res=await this.app.mysql.get('buylist',{id:id})
            return res;
        }
    }
}
module.exports= buylistServices;