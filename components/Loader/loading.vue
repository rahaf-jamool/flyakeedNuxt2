<template>
  <div id="preloader" v-if="loading">
    <div id="preloaders" class="preloader" >
      <div class="content">
        loading
        <!-- <img
          id="logoLoader"
          class="logoLoader"
          src="../../public/assets/images/logo-white.png"
          alt=""
        />
        <img
          class="Loader"
          src="../../public/assets/images/Rolling-loading.svg"
          alt=""
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
  created() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },
};
</script>

<style scoped>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: green;
}

#preloaders {
  width: 100%;
  height: 100%;
  position: relative;
}
#preloaders .content{
      position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#preloaders .content img.logoLoader {
  width: 200px;
}
#preloaders .content img.Loader {
  /* top: 70%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%); */
}

@-webkit-keyframes animate-preloader {
  0% {
    width: 200px;
  }
  25% {
    width: 250px;
  }
  50% {
    width: 300px;
  }
  75% {
    width: 250px;
  }
  100% {
    width: 200px;
  }
}

@keyframes animate-preloader {
  0% {
    width: 200px;
  }
  25% {
    width: 250px;
  }
  50% {
    width: 300px;
  }
  75% {
    width: 250px;
  }
  100% {
    width: 200px;
  }
}
@media screen and (max-width: 987px) {

}
</style>
