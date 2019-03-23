'use strict';
const path = require('path');
var webpack = require('webpack');

module.exports = {
    // context: path.join(__dirname, 'app'), // resolves entry below, must be absolute path
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // express static folder is at /app/lib
        filename: '[name].bundle.js', // the file name of the bundle to create.  [name] is replaced by the name of the chunk (code-splitting)
        publicPath: 'static' // example uses express as the webserver
    },

};