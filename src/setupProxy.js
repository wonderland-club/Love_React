// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function (app) {
// 	// proxy第一个参数为要代理的路由
//     app.use(createProxyMiddleware("/api", {
//         target: "http://localhost:8080", //配置你要请求的服务器地址，代理后的请求网址
//         pathRewrite: {'^/api': ''}, //路径重写
//         changeOrigin: true, // 是否改变请求头
//     }))

// };

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    // /api 表示代理路径
    //target 表示目标服务器的地址
    app.use(
        '/api',
        createProxyMiddleware({
            // http://localhost:4000/ 地址只是示例，实际地址以项目为准
            target: 'http://localhost:8080/',
            // 跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路由
            // pathRewrite: {
            //     '^/admin': '',// 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
            // }
        })
    );


}