<template>
  <div>
    <Loading />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Loading from "~/components/Loader/loading.vue";
export default {
  name: "app",
  head() {
    return {
      title: this.$i18n.locale === "ar" ? "flyakeed" : "flyakeed",
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "ar" ? "rtl" : "ltr",
      },
    };
  },
  components: {
    Header,
    Footer,
    Loading,
  },
};
</script>
