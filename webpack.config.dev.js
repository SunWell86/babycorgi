import path from 'path'
import webpack from 'webpack';

export default {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output:{
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ],
  module: {
    loaders: [
      {

        test:/\.js$/,
        //exclude: /(node_modules)/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot', 'babel']
      }
    ]

  },
  resolve: {
    extentions: ['', '.js'],
    //modulesDirectories: ['node_modules', 'src']
  }
}
