const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const backgroundConfig = {
  target: 'web',
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'manifest.json'),
        to: path.resolve(__dirname, 'build', 'manifest.json'),
        context: __dirname,
        toType: 'file',
        copyUnmodified:true
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'icons', '*.png'),
        to: path.resolve(__dirname, 'build'),
        context: __dirname,
        copyUnmodified:true
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: path.resolve(__dirname, 'src', 'background', 'index.js'),
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'build')
  }
}

const clientConfig = {
  target: 'web',
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'content', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'content.js',
    path: path.resolve(__dirname, 'build')
  }
}

const modalConfig = {
  target: 'web',
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'modal', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        loader: ['svg-inline-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src', 'modal', 'index.html'),
        to: path.resolve(__dirname, 'build', 'modal.html'),
        context: __dirname,
        toType: 'file',
        copyUnmodified:true
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src', 'modal', 'index.css'),
        to: path.resolve(__dirname, 'build', 'modal.css'),
        context: __dirname,
        toType: 'file',
        copyUnmodified:true
      }
    ])
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'modal.js'
  }
};

module.exports = [ backgroundConfig, clientConfig, modalConfig ];