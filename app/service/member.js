const Service = require('egg').Service;
const mysql='member';
class memberServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert(mysql,msg)
        return res;
    }
    async delete(){

    }
    async update(msg){
        const res=await this.app.mysql.update(mysql,msg);
        return res;
    }
    async find(phone){
        if(phone){
            let options={
                where:{
                    memberPhone:phone
                }
            }
            const res=await this.app.mysql.select(mysql,options)
            return res;
        }else{
            const res=await this.app.mysql.select(mysql);
            return res;
        }
    }
}
module.exports=memberServices;