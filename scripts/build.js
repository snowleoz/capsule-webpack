require('../config/.env')('production')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
  /** 
   * err对象 不包含 编译错误，必须使用 stats.hasErrors() 单独处理;
   * err 对象只包含 webpack 相关的问题，例如配置错误等。
   */
  if(err || stats.hasErrors()) {
    console.log('ERROR: ', err || stats.hasErrors())
  } else {
    const statsJSON = stats.toJson()
    // console.log('statsJSON: ',statsJSON)
    console.log('打包好了哟')
  }
})