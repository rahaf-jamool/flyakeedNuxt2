import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    // sm: 640,
    md: 768,
    lg: 1024,
    // xl: 1280,
  },
});
