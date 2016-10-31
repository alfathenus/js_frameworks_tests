// incluimos webpack
var webpack = require('webpack');
// incluimos el paquete  path
var path = require('path');
// incluimos el plugin de webpack de html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// declaramos la carpeta destino
var BUILD_DIR = path.resolve(__dirname, 'public');
// declaramos la carpeta de la app
var APP_DIR = path.resolve(__dirname, 'src/app/');


// configuracion de webpack
var config = {
  // habilitamos el source map
  devtool: 'source-map',
  // ubicacion del archivo principal de la app
  entry: APP_DIR + '/js/index.js',
  // configuracion del output
  output: {
    path: BUILD_DIR, // carpeta destino
    filename: 'js/index.js', // archivo destino
    publicPath: '' // referencia
  },
  // agregamos los modulos
  module: {
    // configuramos el json-loader para cargar json
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, 
    // configuramos babel para el ES6
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  // agregamos los plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + "/index.tmpl.html"
    })
  ],
};

// exportamos la configuracion
module.exports = config;