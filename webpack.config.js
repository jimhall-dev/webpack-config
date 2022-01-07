const path = require('path');

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    open: true,
    port: 8080
  },
  devtool: false
}