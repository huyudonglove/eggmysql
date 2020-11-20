module.exports=()=>{
   return async function isLogin(ctx,next){
        console.log(ctx,777777777777);
        const login='Authorization' in ctx.request.header||'authorization' in ctx.request.header ;
        console.log(login);
        ctx.app.isLogin=login;
        console.log(ctx)
        if(login){
            await next();
        }else{
            ctx.body={
                code:0,
                msg:'no login'
            }
            ctx.status=401;
        }
       
    }
}