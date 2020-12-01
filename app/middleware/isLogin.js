const Base64=require('js-base64');
module.exports=()=>{
   return async function isLogin(ctx,next){
        let msg= ctx.request.header[`Authorization`]||ctx.request.header['authorization'];
        console.log(msg)
        if(msg){
            let token=JSON.parse(Base64.decode(msg));
            let user={
                account:token.account,
                password:token.password
            }
            const res=await ctx.service.loginName.find(user);
            if(res.length){
                await next();
            }else{
                ctx.body={
                    code:0,
                    msg:'用户未登录'
                }
                ctx.status=401;
            }
        }else{
            ctx.body={
                code:0,
                msg:'用户未登录'
            }
            ctx.status=401;
        }
    
    }
}