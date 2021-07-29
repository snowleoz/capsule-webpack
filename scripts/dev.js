require('../config/.env')('development')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const compiler = webpack(webpackConfig)
const WebpackDevServer = require('webpack-dev-server');

const server = new WebpackDevServer(compiler, {
  contentBase: './dist',
  compress: true
})

server.listen(8080, "127.0.0.1", () => {
  console.log("Starting server on http://localhost:8080");
});