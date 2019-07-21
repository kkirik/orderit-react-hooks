const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const __DEV__ = process.env.NODE_ENV !== 'production';

/** @type {webpack.Configuration} */
const config = {
  mode: __DEV__ ? 'development' : 'production',
  bail: !__DEV__,
  entry: {
    app: path.join(__dirname, 'src/index.tsx'),
  },
  watch: __DEV__,
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js'],
    modules: [
      __dirname,
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'public'),
      'node_modules',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: __DEV__
          ? [path.resolve(__dirname, 'src')]
          : [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.(ttf|png)$/,
        include: path.resolve(__dirname, 'public'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: `assets/media/[name]${__DEV__ ? '' : '-[hash:8]'}.[ext]`,
          },
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
};

if (__DEV__) {
  config.plugins.push(new ForkTsCheckerWebpackPlugin());
  config.devServer = {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    proxy: {
      '/api': {
        target: process.env.WEBPACK_DEV_API,
        secure: false,
        changeOrigin: true,
      },
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      cached: true,
      colors: true,
      errorDetails: false,
      errors: true,
      hash: false,
      modules: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: true,
    },
  };
}

module.exports = config;
