// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    head: {
      title: "リリオのプロフィール",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "リリオのプロフィール",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:site",
          content: "@ririo08",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://pbs.twimg.com/profile_images/1121918283446247424/ZRgtg7CP_400x400.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@700&display=swap",
          crossorigin: "",
        },
      ],
    },
  },

  css: ["assets/scss/style.scss"],
  modules: ["@nuxt/eslint"],

  eslint: {
    config: {
      stylistic: true,
      formatters: true,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  compatibilityDate: "2024-12-02",
})