module.exports = {
    devServer: {
        proxy: {
            // '/api': {
            //     target: 'http://testweixin.51vip.biz',
            //     changeOrigin: true
            // },
            // '/api': {
            //     target: 'http://192.168.7.155:8088',
            //     changeOrigin: true
            // },
            '/api/wx': {
                target: 'http://192.168.7.156:8080',
                changeOrigin: true
            },
            '/api/prize': {
                target: 'http://192.168.7.156:8080',
                changeOrigin: true
            }
        },
        disableHostCheck: true
    }
}
