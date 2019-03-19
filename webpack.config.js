/* global require, process, module, __dirname */
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const inProduction = process.env.NODE_ENV === 'production';

const plugins = [
    new ExtractTextPlugin({filename: './bundle.css'}),
  ];
  if (inProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      include: /^bundle\.js$/,
      minimize: true,
    }));
  }

  module.exports = {
    plugins,
    watch: !inProduction,
    devtool: !inProduction && 'source-map',
    entry: ['./src/scripts/index.js', './src/styles/style.scss'],
    // output: {
    //   filename: './bundle.js',
    // },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/' // название директории
      },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': `${__dirname}`,
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env'],
          },
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    minimize: inProduction,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      autoprefixer({
                        browsers: [
                          '> 1%',
                          'last 4 version',
                          'not ie <= 8',
                        ],
                      }),
                    ],
                  },
                },
                {
                  loader: 'sass-loader',
                },
              ],
            }),
          },

      {
          test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/assets/[name].[ext]"
    },
    //   {
    //     test: /\.(png|svg|jpg|gif)$/,
    //     include: path.join(__dirname, '/assets'),
    //     exclude: /(node_modules)/,
    //     loader: 'file-loader',


      ],
    },
  };
