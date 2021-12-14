const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const imagesLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: 'img/[path][name].[hash].[ext]'
    }
  }
];
if(isProd){
  imagesLoaders.push({
    loader: 'image-webpack-loader',
    options: {
      mozjpeg: {
        progressive: true,
      },
      optipng: {
        enabled: false,
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4
      },
      gifsicle: {
        interlaced: false,
      },
      webp: {
        quality: 75
      }
    }
  });
}

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    isDev && require.resolve('style-loader'),
    isProd && {
      loader: MiniCssExtractPlugin.loader,
      // css is located in `static/css`, use '../../' to locate index.html folder
      // in production `paths.publicUrlOrPath` can be a relative path
      // options: paths.publicUrlOrPath.startsWith('.')
      //   ? { publicPath: '../../' }
      //   : {},
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize(),
          ],
        },
        sourceMap: isDev,
      },
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: isDev,
          root: PATHS.src,
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      }
    );
  }
  return loaders;
};

module.exports = {
  context: PATHS.src,
  mode: 'development',
  entry: `${PATHS.src}/index.tsx`,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: '',
  },
  devServer: {
    port: 3000,
    hot: isDev,
    open: true,
    static: PATHS.dist,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: filename('css') }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PATHS.src}/index.html`,
      chunks: 'index.html',
      alwaysWriteToDisk: true,
      hash: true,
      minify:{
        collapseWHiteSpace: isProd
      },
    }),
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[name][ext].map',
    //   // exclude: ['bundle.js'],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        exclude: `${PATHS.src}/App/fonts/`,
        use: imagesLoaders,
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/i,
        include: `${PATHS.src}/App/fonts/`,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash].[ext]'
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
          sourceMap: isDev,
        }),
        sideEffects: true,
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
          sourceMap: isDev,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          },
        }),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 3,
            sourceMap: isDev,
          },
          'sass-loader'
        ),
        sideEffects: true,
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 3,
            sourceMap: isDev,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          'sass-loader'
        ),
      },
      {
        test: /\.ts(x?)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ]
  }
}