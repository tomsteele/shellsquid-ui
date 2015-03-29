module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'app',
        proxy: {
            '/api*': {
                target: 'https://localhost:1337'
            }

        }
    },

    module: {
        loaders: [{
            test: /bootstrap\/js\//,
            loader: 'imports?jQuery=jquery'
        }, {
            test: /\.html$/,
            loader: 'raw',
            exclude: /node_modules/
        }, {
            test: /\.woff$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf$/,
            loader: 'file-loader'
        }, {
            test: /\.eot$/,
            loader: 'file-loader'
        }, {
            test: /\.svg$/,
            loader: 'file-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.styl$/,
            loader: 'style!css!stylus',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    }
};
