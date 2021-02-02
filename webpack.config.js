// Cargamos un módulo nativo de node que nos gestiona rutas
const path = require('path');

// Cargamos webpack para definir plugins propios
const webpack = require('webpack');

// Este módulo inyecta el bundle en el HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constantes con los paths de la aplicación
const paths = {
  ROOT: path.resolve(__dirname),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

//process.env nos permite acceder a las variables de entorno del sistema operativo
//Accedemos a las variables definidas de entorno que hemos definido en el package.json
const development = process.env.NODE_ENV === 'development';
// Si usamos react-router y subimos nuestra aplicación a producción, habrá que asignar a la variable publicPath la ruta donde se va a alojar el proyecto
const productionPath = '/dist/';
const publicPath = development ? '/' : productionPath;

// Set plugins
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  hash: !development,
});

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    PUBLIC_PATH: JSON.stringify(publicPath),
  },
});

module.exports = {
  target: 'web',
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'file-loader',
        options: {
          publicPath: `${publicPath}statics/images/`,
          outputPath: './statics/images/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(wav|mp3)$/,
        loader: 'file-loader',
        options: {
          publicPath: `${publicPath}statics/audio/`,
          outputPath: './statics/audio/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        options: {
          publicPath: `${publicPath}statics/video/`,
          outputPath: './statics/video/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          publicPath: `${publicPath}statics/vectors/`,
          outputPath: './statics/vectors/',
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    port: 8080,
    open: true,
  },
  optimization: {
    minimize: !development,
  },
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    processEnvPlugin,
  ],
};