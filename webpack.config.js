const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildPath = path.join(__dirname, './build')
const sourcePath = path.join(__dirname, './src')

const isProduction = false;

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      // 'react-hot-loader'
    ],
  },
  {
    test: /\.(scss|css)$/,
    // use: ExtractTextPlugin.extract({
    //   fallback: 'style-loader',
    //   use: [
    //     'style-loader',
    //     'css-loader?url=false',
    //     'sass-loader?sourceMap'
    //   ]
    // }),

    use: [
      'style-loader',
      'css-loader?url=false',
      'sass-loader?sourceMap'
    ]
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: sourcePath,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  },
  {
    test: /\.html$/,
    loader: "file-loader?name=[name].[ext]",
  }
]

let entries = [
  sourcePath + '/index.js'
];

if (!isProduction) {
  // entries.push('webpack/hot/dev-server')
}


module.exports = {
  entry: {
    // app: ['./src/index.js'],
    main: entries,
    // html: sourcePath + '/index.html'
  },
  output: {
    path: buildPath,
    publicPath: '/build',
    filename: 'bundle.js',
  },
  module: {
    rules: rules
  },
  plugins: [
    // new ExtractTextPlugin('style.css'),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
  devServer: {
    contentBase: buildPath,
    port: 5000,
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 100,
      stats: {colors: true}
    }
  }
}
