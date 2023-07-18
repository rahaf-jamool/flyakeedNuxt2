<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo-column">
        <img src="/path/to/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="select-language-column">
        <div class="dropdown" @click="toggleDropdown">
          <button class="dropdown-toggle">{{ selectedLanguage }}</button>
          <div v-if="isDropdownOpen" class="dropdown-menu">
            <span>SAR</span>
            <span>USD</span>
          </div>
        </div>
        <a href="#" class="language-link">Arabic</a>
      </div>
      <div class="buttons-column">
        <button class="company-button">Companies</button>
        <button class="login-button">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedLanguage: 'SAR'
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.isDropdownOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/public/assets/scss/header.scss";
</style>
