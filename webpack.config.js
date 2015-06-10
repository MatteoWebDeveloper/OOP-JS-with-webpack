var webpack = require("webpack");

module.exports = {
    entry: "./client/app.js",
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: "style!css!less"
        }]
    },
    devtool: "source-map"
};
