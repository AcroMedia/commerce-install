<template>
  <header class="app-header">
    <div class="container">
      <div class="site-header__logo">
        <img src="../assets/gfx/logo.png" alt="Drupal Commerce">
      </div>
      <div class="site-header__slogan">
        The Adaptive Sales Platform
      </div>
      <div class="site-header__right">
        Toll Free <span><a href="tel:18778834697">1.877.883.4697</a></span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/header';
</style>
