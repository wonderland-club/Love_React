const proxy = require("http-proxy-middleware");

module.exports = function (app) {
	// proxy第一个参数为要代理的路由
    app.use(proxy("/api", {
        target: "http://localhost:8080", //配置你要请求的服务器地址，代理后的请求网址
        pathRewrite: {'^/api': ''}, //路径重写
        changeOrigin: true, // 是否改变请求头
    }))
    // app.use(proxy("/rest", {
    //     target: "http://localhost/rest",
    //     pathRewrite: {'^/data': ''},
    //     changeOrigin: true,
    // }))
};
