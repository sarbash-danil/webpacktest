const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')


const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    
    new webpack.ProvidePlugin({
      $: './jquery-3.6.0',
  jQuery: './jquery-3.6.0',
      
    }),
    
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
