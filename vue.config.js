module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.84.41.231:3000',  // 后端接口地址
        changeOrigin: true,
        secure: false, // 如果是 https，可以设置为 true
        pathRewrite: {
          '^/api': ''  // 重写路径，例如将 /auth/login 转发到 http://47.84.41.231:3000/login
        }
      }
    }
  }
};
