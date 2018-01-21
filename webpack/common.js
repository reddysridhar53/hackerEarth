const Webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/app/main.ts'
    },

    resolve: {

        extensions: ['', '.ts', '.js'],
        root: './',
        modulesDirectories: ['./node_modules'],

    },

    module: {

        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            }
        ],

        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader','url-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)(\?v=.*)?$/,
                loader: "file-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: ['./src/index.html']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }

        ]

    },

    plugins: [


        new Webpack.optimize.CommonsChunkPlugin({
            name: ["vendor","polyfills"]
        }),

        new CopyWebpackPlugin([
            { from: 'src/app/assets', to: 'assets' }
        ]),

        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery",
            Hammer: "hammerjs/hammer"
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'auto'
        })

    ]

};
