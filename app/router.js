const { Controller } = require("egg")
module.exports = app => {
    const { router, controller } = app
    router.post('/login',controller.login.login);
    router.post('/createbuy',app.middleware.isLogin(),  controller.createbuy.index);
    router.get('/getBuy',app.middleware.isLogin(),controller.getBuy.index);
    router.get('/buyMsg',app.middleware.isLogin(),controller.buyMsg.index);
    router.post('/updateBuy',app.middleware.isLogin(),controller.updateBuy.index);
    router.post('/deleteBuy',app.middleware.isLogin(),controller.deleteBuy.index);
    router.post('/upload',app.middleware.isLogin(),controller.upload.index);
    router.get('/getBuyType',app.middleware.isLogin(),controller.getBuyType.index);
    router.post('/createShop',app.middleware.isLogin(),controller.createShop.index);
    router.get('/getShop',app.middleware.isLogin(),controller.getShop.index);
    router.get('/getStock',app.middleware.isLogin(),controller.getStock.index);
    router.post('/deletesell',app.middleware.isLogin(),controller.deletesell.index);
    router.post('/createMember',app.middleware.isLogin(),controller.createMember.index);
    router.get('/getMember',app.middleware.isLogin(),controller.getMember.index);
    router.post('/createLoginName',app.middleware.isLogin(),controller.createLoginName.index);
    router.get('/getLoginName',app.middleware.isLogin(),controller.getLoginName.index);
    router.post('/postShop',app.middleware.isLogin(),controller.postShop.index);//分页查词销售记录
    router.post('/postBuy',app.middleware.isLogin(),controller.postBuy.index);//分页查询进货单
    router.post('/postStock',app.middleware.isLogin(),controller.postStock.index);//分页查询库存
    router.post('/postMember',app.middleware.isLogin(),controller.postMember.index)//分页查询会员
    router.get('/getMemberBuy',app.middleware.isLogin(),controller.getMemberBuy.index)//获取会员购买记录
    router.post('/updateRole',app.middleware.isLogin(),controller.updateRole.index);//禁用启用用户
}
