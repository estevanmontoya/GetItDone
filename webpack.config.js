const path = require('path');

module.exports = {
  entry: './views/sass/style.scss',
  output: {
    filename: 'style.css',
    path: path.resolve(__dirname, 'public/styles/style.css')
  }
};
