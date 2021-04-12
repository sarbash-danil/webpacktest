const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const $ = require('jquery')
const axios = require('axios')

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
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map'
      }),
      
      new webpack.ProvidePlugin({
        $: './jquery-3.6.0',
    jQuery: './jquery-3.6.0',
        
      }),
  ],
};
