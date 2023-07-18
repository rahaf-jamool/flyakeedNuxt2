export default {
  ssr: false,
  loadingIndicator: {
    name: "circle",
    color: "transparent",
    background: "white",
  },

  loading: "~/components/Loader/loading.vue",
  head: {
    title: "flyakeed",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      },
    ],
  },
  plugins: [
    { src: "@/plugins/vue-awesome-swiper", mode: "client" },
    { src: "~/plugins/v-video-embed", mode: "client" },
    { src: "~/plugins/limitText", mode: "client" },
    { src: "~/plugins/lightbox.js", mode: "client" },
    { src: "~/plugins/vue-i18n.js" },
    { src: "~/plugins/aos.client.js", mode: "client" },
    { src: "~/plugins/v-lazy-image" },
    { src: "~/plugins/vuelidate.js" },
    { src: "@/plugins/vue-mq.js", mode: "client" },
    { src: "~/plugins/datepicker.js", ssr: false },
    { src: "~/plugins/date-filter.js" },

    "~/plugins/axios",
    "~/plugins/vue-easytable",
    "~/plugins/vue-form-wizard",
  ],

  axios: {
    baseURL: "https://admin.uaetta.org/",
  },
  css: ["~/public/assets/scss/main.scss", "swiper/css/swiper.css"],

  components: true,

  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "cookie-universal-nuxt"],
  router: {
    middleware: ["i18n"],
  },

  build: {
    babel: {
      compact: true,
    },
  },
};
