// webpack.config.js

const loaders = ['react-hot', 'babel'];

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './app-client.js',
        './src/scss/app.scss',
    ],
    output: {
        path: `${__dirname}/public/dist`,
        filename: 'bundle.js',
        publicPath: '/dist/',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                ),
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=dist/img/img-[hash:6].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
};
