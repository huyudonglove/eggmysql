const { Controller } = require("egg")

module.exports = app => {
    const { router, controller } = app
    router.post('/login',controller.login.login)
    router.get('/', controller.home.index)
    router.post('news','/news',app.middleware.isLogin(), controller.news.create)
    router.get('test','/api/test',controller.test.create);
    router.get('createPost', '/posts', controller.post.create);
    router.post('/createbuy',  controller.createbuy.index);
    router.get('/getBuy',controller.getBuy.index);
    router.get('/buyMsg',controller.buyMsg.index);
    router.post('/updateBuy',controller.updateBuy.index);
    router.post('/deleteBuy',controller.deleteBuy.index);
    router.post('/upload',controller.upload.index);
    router.get('/getBuyType',controller.getBuyType.index);
    router.post('/createShop',controller.createShop.index);
    router.get('/getShop',controller.getShop.index);
    router.get('/getStock',controller.getStock.index)
}
