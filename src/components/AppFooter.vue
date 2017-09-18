<template>
  <footer class="app-footer">
     <div class="demo__content">
       <div class="container">
         <a href="https://commercedemo.acromedia.com" class="demo__link" target="_blank" title="Click to view a Drupal Commerce live demo">
           <div class="demo__screenshot">
             <img src="../assets/gfx/urban-hipster-screenshot.png" alt="Drupal Commerce demo site screenshot">
           </div>
           <div class="demo__info">
              <h3>Drupal Commerce - Live Demo</h3>
              Check out this live out-of-the-box demo of Drupal Commerce.
           </div>
         </a>
       </div>
    </div>

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
      <div class="brand__logos columns">
        <div class="column">
          <div class="commerce-guys">
            <div class="commerce-guys__logo">
              <img src="../assets/gfx/commerce-guy-logo.png" alt="">
            </div>
            <div class="brand__slogan">
              Creators of<br>
              Drupal Commerce
            </div>
            <div class="brand__info">
            </div>
            <div class="brand__links">
              <a href="https://www.commerceguys.com" class="web-icon" target="_blank" title="Go to the Commerce Guys' website">
                commerceguys.com
              </a>
              <a href="mailto:sales@commerceguys.com" class="email-icon" target="_blank" title="Email sales@commerceguys.com">
                info@commerceguys.com
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="acro-media">
            <div class="acro-media__logo">
              <img src="../assets/gfx/acromedia-logo.png" alt="">
            </div>
            <div class="brand__slogan">
              North America's #1<br>
              Drupal Commerce Provider
            </div>
            <div class="brand__info">
            </div>
            <div class="brand__links">
              <a href="https://www.acromedia.com" class="web-icon" target="_blank" title="Go to Acro Media's website">
                acromedia.com
              </a>
              <a href="mailto:solutions@acromediainc.com" class="email-icon" target="_blank" title="Email solutions@acromediainc.com">
                solutions@acromediainc.com
              </a>
            </div>
          </div>
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
