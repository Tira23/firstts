const path = require('path'); // Импортируем модуль "path" для работы с путями файлов

module.exports = {
    entry: './src/index.ts', // Точка входа для сборки проекта

    output: {
        filename: 'index.js', // Имя выходного файла сборки
        path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    },
    module: {
        rules: [
            { test: /\.ts$/, use: ['babel-loader', 'ts-loader'] }
        ],

    },
    mode: 'development', // Режим сборки
};
