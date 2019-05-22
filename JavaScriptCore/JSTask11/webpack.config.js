const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/task1.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')
    }
};
// module.exports = {
//mode: 'development',
//     entry: './src/js/task2.js',
//     output: {
//         filename: 'script1.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// };