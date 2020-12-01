const Service = require('egg').Service;
const mysql='stocklist';
class stocklistServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert(mysql,msg)
        return res;
    }
    async delete(){

    }
    async update(msg,option){
        if(option){
            let options={
                        where:option
                    }
            const res=await this.app.mysql.update('stocklist',msg,options);
             return res;
        }
        
    }
    async find(msg){
        if(msg){
            let options={
                where:msg
            }
            const res=await this.app.mysql.select(mysql,options)
            return res;
        }
    }
}
module.exports= stocklistServices;