var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
        },
  module: {
 loaders: [
	 {
test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
       query: {
presets: ['es2015']
       }
	 }
]
	}
};
