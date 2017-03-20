const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  resolve: {
    modules: ['node_modules', 'lib', 'app', 'vendor'],
  },
  module: {
    rules: [
      {
         test: /\.css$/,
         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
       },
       {
         test: /\.(js|jsx)$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015', 'stage-0', 'react'],
           plugins: ['transform-runtime'],
         },
       },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename:'[name].css', allChunks: true }),
  ],
};