module.exports = {
  webpack: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    },
    plugins: [],
    configure: (webpackConfig) => {
      // 自定义webpack配置
      return webpackConfig;
    }
  }
};
