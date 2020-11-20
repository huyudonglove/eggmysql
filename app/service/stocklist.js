const Service = require('egg').Service;
class stocklistServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert('stocklist',msg)
        return res;
    }
    async delete(){

    }
    async update(type,msg){
        if(type=='buy'){
            const options={
                where:{
                    buyid:msg.buyid
                }
            }
            const res=await this.app.mysql.update('stocklist',msg,options);
            return res;
        }else{
            const res=await this.app.mysql.update('stocklist',msg);
            return res;
        }
        
    }
    async find(id){
        if(id){

        }
    }
}
module.exports= stocklistServices;