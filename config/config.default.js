// exports.keys = 'mycookie';
// module.exports = {
//     security: {
//       csrf: {
//         ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
//       },
//     },
//   };
  module.exports=appInfo=>{
      const config={};
      config.keys='123456';
     config.security={
          csrf:false
      }
      config.middleware=[];
      config.mysql={
        client: {
            // host
            host: '10.10.26.58',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '123456',
            // 数据库名
            database: 'mysql',
          },
          // 是否加载到 app 上，默认开启
          app: true,
          // 是否加载到 agent 上，默认关闭
          agent: false,
      }
      return config;
  }
//   exports.mysql = {
//     // 单数据库信息配置
//     client: {
//       // host
//       host: '10.10.26.58',
//       // 端口号
//       port: '3306',
//       // 用户名
//       user: 'root',
//       // 密码
//       password: '123456',
//       // 数据库名
//       database: 'mysql',
//     },
//     // 是否加载到 app 上，默认开启
//     app: true,
//     // 是否加载到 agent 上，默认关闭
//     agent: false,
//   };
