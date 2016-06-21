module.exports = {
    entry: [
        "./src/lobby"
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/public/"
    },
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel?presets[]=es2015"
            }
        ]
    }
}
