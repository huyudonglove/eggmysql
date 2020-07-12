exports.keys = 'walkeregg';
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ],
};
exports.middleware = [
    'robot'
];