const Service = require('egg').Service;
const myTable='loginName';
class buylistServices extends Service{
    async add(msg){
        const res=await this.app.mysql.insert(myTable,msg)
        return res;
    }
    async delete(){

    }
    async update(msg){
        const res=await this.app.mysql.update(myTable,msg);
        return res;
    }
    async find(account){
        //登录验证 获取未被禁用用户
       //console.log(account)
        if(account){
            let options={
                where:account
            }
            const res=await this.app.mysql.select(myTable,options)
            return res;
        }else{
            const res=await this.app.mysql.select(myTable);
            return res;
        }
    }
}
module.exports= buylistServices;