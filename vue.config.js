module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true,
            },
            // '/inic': {
            //     target: 'http://192.168.199.190:4000',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/inic': '',
            //     }
            // }
        }
    }
}