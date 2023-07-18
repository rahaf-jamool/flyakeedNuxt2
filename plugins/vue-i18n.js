import Vue from "vue";
import VueI18n from "vue-i18n";
import english from "../locales/en.json";
import arabic from "../locales/ar.json";

Vue.use(VueI18n);

export default ({ app, store }) => {
  const locale = app.$cookies?.get("lang")?.lang;
  if (!locale) {
    store.commit("SET_LANG", { lang: "en" }); //set the default language
  }

  app.i18n = new VueI18n({
    locale: app.$cookies.get("lang").lang,
    fallbackLocale: "en",
    messages: {
      en: english,
      ar: arabic,
    },
  });
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};
