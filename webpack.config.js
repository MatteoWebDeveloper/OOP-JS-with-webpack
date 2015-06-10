module.exports = {
    entry: "./client/app.js",
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

