<template>
  <footer class="app-footer">
    <div class="portfolio__content">
      <h3>Who uses Drupal Commerce?</h3>
      <div class="footer__logos container">
        <img src="../assets/gfx/telus-logo.png" alt="">
        <img src="../assets/gfx/koodo-logo.png" alt="">
        <img src="../assets/gfx/sandler-logo.png" alt="">
        <img src="../assets/gfx/obermayer-logo.png" alt="">
        <img src="../assets/gfx/orlo-logo.png" alt="">
        <img src="../assets/gfx/lush-logo.png" alt="">
      </div>
    </div>

    <div class="footer__section container">
      <div class="brand__logos">
        <div class="columns">
          <div class="column">
            <a href="#">
              <div class="commerce-guy">
                <img src="../assets/gfx/commerce-guy-logo.png" alt="">
              </div>
              <div class="logo__slogan">
                Creators of<br>
                Drupal Commerce

              </div>
            </a>
          </div>
          <div class="column">
            <a href="#">
              <div class="acromedia">
                <img src="../assets/gfx/acromedia-logo.png" alt="">
              </div>
              <div class="logo__slogan">
                North America's #1<br>
                Drupal Commerce Provider
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="contact__section">
        <div class="site-url__block">
          commerceguys.com
        </div>
        <div class="email__block">
          sales@commerceguys.com
        </div>
        <div class="divider">&nbsp;|&nbsp;</div>
        <div class="site-url__block">
          acromedia.com
        </div>
        <div class="email__block">
          solution@acromediainc.com
        </div>
      </div>
      <div class="footer__copyright">

        © 1998 - 2017 <a href="#">Acro Media Inc.</a> <a href="#">Privacy Policy </a>
      </div>
    </div>

  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/footer';
</style>
