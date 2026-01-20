// https://nuxt.com/docs/api/configuration/nuxt-config

const IMAGE = "/images/logo.svg";
const IMAGE_ALT = "Logo Orbit";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "dayjs-nuxt",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      titleTemplate: "%s - Orbit Point One",
      meta: [
        {
          name: "twitter:image",
          content: IMAGE,
        },
        {
          name: "twitter:image:alt",
          content: IMAGE_ALT,
        },
        {
          name: "og:image",
          content: IMAGE,
        },
        {
          name: "og:image:alt",
          content: IMAGE_ALT,
        },
      ],
    },
  },

  routeRules: {
    "/": { prerender: true },
  },

  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },

  compatibilityDate: "2025-01-15",

  colorMode: {
    preference: "light",
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
