const path = require('path');

// module.exports = {
//     entry: './src/js/script_get_ajax.js',
//     output: {
//         filename: 'main_get.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// };
module.exports = {
    entry: './src/js/script_post_ajax.js',
    output: {
        filename: 'main_post.js',
        path: path.resolve(__dirname, 'dist')
    }
};