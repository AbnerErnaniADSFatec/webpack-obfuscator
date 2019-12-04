'use strict';

const JavaScriptObfuscator = require('../../dist/index');

module.exports = {
    node: {
        fs: "empty",
        net: "empty"
    },
    entry: {
        'index': './test/input/src/api/routes.js',
        'index-excluded': './test/input/src/api/server.js'
    },
    devtool: 'source-map',
    target: 'web',
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new JavaScriptObfuscator({
            disableConsoleOutput: false
        }, ['index-excluded*'])
    ],
    output: {
        path: __dirname + '/../output/',
        filename: '[name].js'
    }
};