![React + Webpack + ES6](https://raw.githubusercontent.com/alfathenus/js_frameworks_tests/master/React/react-webpack-es6.png "React + Webpack + ES6")

##Objetivo
Esta página de Github intenta ayudar a setear por primera vez un ambiente de trabajo con ReactJS, Webpack y ES6 con Babel.

##Configuración y uso

###Clonar y usar
Si se quiere clonar el repositorio y utilizarlo directamente es necesario los siguiente:
####Instalar NodeJS
Se necesita tener instalado [NodeJS](https://nodejs.org) Preferible el LTS.

####Instalar Webpack
Instalamos webpack en el sistema
```
npm install -g webpack
```

En este momento ya pueden clonar el proyecto y comenzar a probarlo haciendo:
```
git clone https://github.com/alfathenus/js_frameworks_tests.git
cd React/React_Webpack_ES6
npm install
```
y compilamos con `npm run buld` o `webpack`directamente  y vemos que en la carpeta public estan los archivos compilados.

###Desde cero
Si no quieren bajarse el proyecto, estos son los pasos a seguir para crear la configuración necesaria (además de los dos pasos del punto anterior):

####Archivo package.json
Crear el archivo `package.json` por medio del comando:
```
npm init
```
y seguir las instrucciones.

####Instalar React
```
npm install --save react react-dom
```

####Instalar dependencias de desarrollo
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

####Otras dependencias
En este proyecto usamos un json loader para cargar archivos json y el html-webpack-plugin para el template html de la app
```
npm install --save-dev html-webpack-plugin json-loader
```

####Crear archivo webpack.config.js
El archivo `webpack.config.js`es el archivo de configuración de webpack el cual especifica la configuración del proyecto
```javascript
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
      test: /\.js$/,
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
```

Finalmente compilamos con `npm run buld` o `webpack`directamente y vemos que en la carpeta public estan los archivos compilados.