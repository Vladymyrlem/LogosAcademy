const path = require('path');

// module.exports = {
//     entry: './src/js/index.js',
//     output: {
//          filename: 'script.js',
//          path: path.resolve(__dirname, 'dist')
//     }
// };
module.exports = {
    entry: './src/js/script.js',
    output: {
         filename: 'script_1.js',
         path: path.resolve(__dirname, 'dist')
    }
};