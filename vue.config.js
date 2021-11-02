module.exports = {
    devServer: {
      proxy: {
        '/api/*': {
          target: 'http://localhost:8125',
          changeOrigin: true
        }
      }
    }
  }