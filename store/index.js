export const state = () => ({
  locales: [
    {
      name: "Arabic",
      value: "ar",
    },
    {
      name: "English",
      value: "en",
    },
  ],

  locale: { lang: "en" },
});

export const getters = {
  locales: (state) => state.locales,
  locale: (state) => state.locale
};
export const mutations = {
  // set Language
  SET_LANG(state, locale) {
    state.locale = locale;
    this.$cookies.set("lang", locale);
  },

};
