module.exports = {
  devServer: {
    port: 8000,
    open: true,
    host: "localhost",
    https: false,
    // 解决跨域问题
    proxy: {
      // 匹配 /dev-api 开头的请求，
      [ process.env.VUE_APP_BASE_API]: {
        // 目标服务器, 代理访问到 https://localhost:9000
        
        target: process.env.VUE_APP_BASE_URL,

        // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，
        // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //开启代理
        changOrigin: true,
        pathRewrite: {
          // 如 /dev-api/db.json 等于 https://localhost:9000/dev-api/db.json
          // 会将 /dev-api替换为空,也就是 /dev-api 会移除，
          
          [ '^' +  process.env.VUE_APP_BASE_API ] : ''
        }
      }
    },
  },
  lintOnSave: false,
  productionSourceMap: false
}