const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: ["babel-polyfill","./src/js/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist') // Replace 'dist' with your build folder
        },
        compress: true,
        port: 3000 // Specify your desired port
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}