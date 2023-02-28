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
        app: './index'  // точка входа в приложение, наш src/index.ts файл, названием итогового бандла будет имя свойства - app
    },

    output: {
        path: paths.dist,  // путь для результатов сборки 
        filename: '[name].bundle.js'  // название итогового бандла, получится dist/app.bundle.js
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'] // указание расширений файлов, которые webpack будет обрабатывать, и пытаться добавить автоматически (например получив запрос на index, не найдет его и попробует index.ts)
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            } // загрузчик для обработки файлов с расширением .ts
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};