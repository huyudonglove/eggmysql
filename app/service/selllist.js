const Service = require('egg').Service;
const mysql='selllist';
class selllistServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert(mysql,msg)
        return res;
    }
    async delete(msg){
        const res= await this.app.mysql.delete(mysql,msg)
        return res;
    }
    async update(msg){
        const res=await this.app.mysql.update(mysql,msg);
        return res;
    }
    async find(msg){
        if(msg){
            console.log(msg,9999)
            let options={
                where:msg
            }
            const res=await this.app.mysql.select(mysql,options)
            return res;
        }
    }
}
module.exports= selllistServices;