module.exports = {
    publicPath: '',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '四次元图库'
                return args
            })
    },
}
