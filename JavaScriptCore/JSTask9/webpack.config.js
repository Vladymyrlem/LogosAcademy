const path = require('path');

module.exports = {
    entry: './src/js/task1.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    }
};