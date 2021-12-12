const path = require('path');
const development = 'development';
const production = 'production';
const isDevelopment = process.env.NODE_ENV === development;
const isProduction = process.env.NODE_ENV === production;
const resolve = (folder) => path.resolve(__dirname, folder);

const activeMode = () => {
    let consoleText = '';

    if (isDevelopment) consoleText = development;
    else if (isProduction) consoleText = production;

    return consoleText;
};
console.log('Active mode: ', activeMode());

const fileName = (extention) => {
    if (isDevelopment) return `[name].${extention}`;
    else if (isProduction) return `[contenthash].${extention}`;
};

// Plugins =============================================
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    context: resolve('src'),
    mode: activeMode(),
    entry: {
        main: ['./index.js'],
    },
    output: {
        filename: fileName('js'),
        path: resolve('dist'),
        clean: true,
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'src'),
        },
        hot: isDevelopment,
        open: true,
        compress: true,
        port: 8080,
        client: {
            reconnect: 5,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './favicon.ico',
            minify: {
                collapseWhitespace: isProduction,
                removeAttributeQuotes: isProduction,
                removeComments: isProduction,
            },
        }),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new ESLintWebpackPlugin({
            fix: true,
            files: ['**/*.{vue,js}'],
        }),
        new StyleLintPlugin({
            fix: true,
            files: ['**/*.{vue,css,scss}'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `assets/fonts/${fileName('[ext]')}`,
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `assets/img/${fileName('[ext]')}`,
                },
            },
            {
                test: /\.m?js$/,
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
