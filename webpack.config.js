const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJs = require('uglifyjs-webpack-plugin')


const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'src/actions'),
            pages: path.resolve(__dirname, 'src/pages'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            utils: path.resolve(__dirname, 'src/utils'),
            components: path.resolve(__dirname, 'src/components')
        }
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist/'),
        compress: true,
        port: 9000
    },
    entry: ['babel-polyfill', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules|server/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [htmlPlugin],
    optimization: {
        minimizer: [
            new UglifyJs()
        ]
    }
};