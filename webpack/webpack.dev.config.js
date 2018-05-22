var webpack = require('webpack');
var path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var parentDir =  path.join(__dirname, '../');
module.exports = {
  
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015', 'react', 'stage-0']
                  }
                }
            ]
        },{
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader" ]
        }
    ]
    },
    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          files: ['./dist/*.html','./dist/*.js'],
          server: { baseDir: ['dist'] }
        })
      ],
    output: {
        path: parentDir + 'dist',
        filename: 'bundle.js'
    },
    
    watch: true,
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}