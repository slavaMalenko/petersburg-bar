const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    context: paths.src, // базовая директория для точек входа и загрузчиков    
    entry: {
        app: './App.tsx'  // точка входа в приложение
    },

    output: {
        path: paths.dist,  // путь для результатов сборки 
        filename: '[name].bundle.js'  // название итогового бандла, получится dist/app.bundle.js
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // указание расширений файлов, которые webpack будет понимать
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        port: 1010 // Порт, на котором будет запущен webpack-dev-server
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};