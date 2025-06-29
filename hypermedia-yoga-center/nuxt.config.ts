// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // 满足官方要求：明确指定渲染模式
  ssr: false, // 采用SSG (Static Site Generation)，利于SEO和GitHub Pages部署

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700], // 加载不同字重
      Pacifico: [400],
    },
    display: 'swap', // 字体加载策略
  },

  app: {
    // 为GitHub Pages部署配置
    baseURL: '/Hypermedia/', // 你的GitHub仓库名
    buildAssetsDir: 'assets',
  },
})