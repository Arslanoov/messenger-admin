module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/styles/main";',
      },
    },
  },
  transpileDependencies: ['vuex-module-decorators'],
};
