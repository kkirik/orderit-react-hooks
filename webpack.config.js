const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const __DEV__ = process.env.NODE_ENV !== 'production';

const config = {
  mode: __DEV__ ? 'development' : 'production',
  bail: !__DEV__,
  entry: path.join(__dirname, 'src', 'index'),
  watch: __DEV__,
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, "src/index.tsx"), 'node_modules'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /.css$/,
        loader: 'style-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
};

if (__DEV__) {
  config.plugins.push(new ForkTsCheckerWebpackPlugin())
}

module.exports = config;