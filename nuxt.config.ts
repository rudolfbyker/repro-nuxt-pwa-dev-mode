export default defineNuxtConfig({
  modules: [
    "@vite-pwa/nuxt",
  ],

  pwa: {
    manifest: {
      name: "Demo",
      id: "com.example.demo",
      short_name: "Demo",
      description: "Demo",
      theme_color: "#000000",
      background_color: "#ffffff",
      icons: [],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
    strategies: "generateSW",
  },
});
