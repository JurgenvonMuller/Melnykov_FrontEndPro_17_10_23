const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
