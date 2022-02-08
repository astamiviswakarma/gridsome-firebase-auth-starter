const {GraphQLCodegenWebpackPlugin} = require('graphql-codegen-webpack-plugin')
module.exports = function (api, options) {
    api.configureWebpack({
        plugins: [
            new GraphQLCodegenWebpackPlugin(options),
        ]
    })      
}