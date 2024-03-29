const webpack = require("webpack");
module.exports = {
    publicPath: '/',
    configureWebpack: {
         devtool : "eval-source-map",
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                "window.$": "jquery",
                Popper: ["popper.js", "default"]
            })
        ]
    }
}