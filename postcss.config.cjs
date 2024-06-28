// postcss.config.js
// 这插件可以自动转化px 到 rem 单位，这样我们写css的时候就写px就好了 非常方便 
module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  };
  