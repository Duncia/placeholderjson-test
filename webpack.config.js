//Čia konstanta path ir atskiru failu CSS bei html generavimo pluginai
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
//Pradžios taškas iš kur pasiimam kodą
    entry: './src/index.js',
//Čia kur sudės surinktą kodą -> clean:true istrina senus failus su cashe
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        clean: true
    },
//Čia pluginas, kuris įterpia bundlintą JS į HTML. Tas [hash] prideda nauja seka prie failo, kad necashintu
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            //filename: 'main.[hash].css'
            filename: 'main.css'
        })
    ],
//Čia tos taisyklės, kokius failus imti, ignoruoti node modulius ir naudoti loaderius
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
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