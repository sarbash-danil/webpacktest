const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// require('../vendors/jquery.js')
const $ = require('jquery')



const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})


module.exports = {
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery/dist/jquery.min.js",
    //   jQuery: "jquery/dist/jquery.min.js",
    //   "window.jQuery": "jquery/dist/jquery.min.js"
    // }),
  
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map'
      }),
      
      new webpack.ProvidePlugin({
        $: './jquery-3.6.0',
    jQuery: './jquery-3.6.0',
        
      }),
  ],
};
