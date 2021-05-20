module.exports = {
  publicPath: './',
  outputDir: 'dist', // run build 生产环境构建文件的目录
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  lintOnSave: process.env.NODE_ENV === 'development', // 每次保存时 lint 代码
  productionSourceMap: false, // 生产环境的 source map , 关闭可加速生产环境构建
};
