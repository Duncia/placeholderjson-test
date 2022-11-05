//Čia konstanta path ir pridėtas pluginas
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//Pradžios taškas iš kur pasiimam kodą
    entry: './src/index.js',
//Čia kur sudės surinktą kodą
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
//Čia pluginas, kuris įterpia bundlintą JS į HTML
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
//Čia tos taisyklės, kokius failus imti, ignoruoti node modulius ir naudoti loaderius
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}