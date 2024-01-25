// const path = require('path');
// module.exports = {
//   mode: 'development',
//   entry: {
//     main: './src/js/script.js',
//     typescript: './dist/js/typescript.js', // Используйте путь к скомпилированному TypeScript файлу
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist/js'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/script.js',
    typescript: './dist/js/typescript.js', // Используйте путь к скомпилированному TypeScript файлу
  },
  output: {
    filename: '[name].bundle.js',  // [name] будет заменено на имя чанка (например, main или typescript)
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
