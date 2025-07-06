// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // 满足官方要求：明确指定渲染模式
  ssr: false, // 采用SSG (Static Site Generation)，利于SEO和GitHub Pages部署

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700], // 加载不同字重
      Pacifico: [400],
    },
    display: 'swap', // 字体加载策略
  },

  app: {
    // 为GitHub Pages部署配置
    baseURL: process.env.NODE_ENV === 'production' ? '/Hypermedia/' : '/', // 你的GitHub仓库名
    buildAssetsDir: 'assets',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  nitro: {
    prerender: {
      routes: [
        // 预渲染动态路由 - 产品页面
        '/shop/1', '/shop/2', '/shop/3', '/shop/4',
        // 预渲染动态路由 - 教师页面
        '/teachers/ashley-lorenzo',
        '/teachers/elena-cheung', 
        '/teachers/georgia-weibel',
        '/teachers/jivana-heyman',
        '/teachers/tamika-caston-miller',
        '/teachers/vytas-baskauskas',
        // 预渲染动态路由 - 课程页面
        '/classes/beginner-yoga',
        '/classes/gentle-flow-yoga',
        '/classes/prenatal-yoga',
        '/classes/yin-yang-harmony-yoga',
        '/classes/ashtanga-fundamentals',
        // 预渲染动态路由 - 活动页面
        '/activities/1', '/activities/2', '/activities/3', '/activities/4',
        '/activities/5', '/activities/6', '/activities/7', '/activities/8',
        // 预渲染动态路由 - 法律页面
        '/legal/faq',
        '/legal/refund-policy',
        '/legal/terms-of-service',
        '/legal/privacy-policy'
      ]
    }
  }
})