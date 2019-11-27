'use strict';

const JavaScriptObfuscator = require('../../dist/index');

module.exports = {
    entry: {
        'routes': '../api/routes.js',
        'server': '../api/server.js'
    },
    devtool: 'source-map',
    target: 'web',
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new JavaScriptObfuscator({
            disableConsoleOutput: false
        }, ['server*'])
    ],
    output: {
        path: __dirname + '../output',
        filename: '[name].js'
    }
};