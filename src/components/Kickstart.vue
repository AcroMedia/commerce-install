<template>
  <div class="kickstart container">

    <div class="kickstart__wrapper columns">
      <div class="kickstart__main column is-8-tablet is-9-desktop">
        <div class="kickstart__description">
          <h1>Drupal Commerce 2.x Installer</h1>

          <p>
            Use the form below to select options for your Drupal Commerce 2.x installation. When you're done, click the download button at the bottom to get the install package.
          </p>
          <br />
          <p>
            The package includes a JSON file containing your selections. With this file, and the Composer command line tool, you have everything needed to install Drupal Commerce 2.x. <a href="https://docs.drupalcommerce.org/commerce2/developer-guide/install-update/using-composer#how-to-use-it" aria-label="Using Composer documentation">Our documentation</a> will help you get you up and running with Composer.
          </p>
        </div>

        <locations section="locations"></locations>
        <drupal-base section="drupalBase"></drupal-base>
        <!-- <packages section="packages"></packages> -->
        <payments section="payments"></payments>
        <shipping section="shipping"></shipping>
        <taxes section="taxes"></taxes>
        <catalog section="catalog"></catalog>
        <drupal-content section="content"></drupal-content>
        <!-- <ci section="ci"></ci> -->
        <security section="security"></security>
        <build section="build"></build>

      </div>

      <div class="column is-4-tablet is-3-desktop">
        <a href="https://www.drupal.org/project/commerce_kickstart" target="_blank" class="d7-commerce-kickstart-cta">
          <div class="d7-commerce-kickstart-cta__top">Click to access the</div>
          <div class="d7-commerce-kickstart-cta__middle">Commerce Kickstart 2.x</div>
          <div class="d7-commerce-kickstart-cta__bottom">demo for <strong>Drupal 7</strong><!-- <i class="material-icons">&#xE01F;</i>--></div>
        </a>
        <div v-sticky="{ zIndex: 100, stickyTop: -80 }">
          <div class="sidebar">
            <div class="sidebar__help">
              <h2>Need a Hand?</h2>
              <div class="side__description">
                Want to setup a Drupal Commerce site, but not sure what all this means?
              </div>
              <button id="help-me-out" class="btn__primary" aria-label="Help">
                Yeah, Help Me Out!
              </button>
            </div>
            <div class="sidebar__summary">
              <cart-summary></cart-summary>
            </div>
            <div class="sidebar__issues">
              <div class="side__issues-icon">
                <img src="../assets/gfx/github-icon.png">
              </div>
              <div class="side__issues-description">
                <span class="side__spot">Spot an issue?</span>
                <span class="side__letknow">Let us know on <a href="https://github.com/AcroMedia/commerce-install">Github ></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Locations from '@/components/sections/Locations'
  import Packages from '@/components/sections/Packages'
  import Payments from '@/components/sections/Payments'
  import Shipping from '@/components/sections/Shipping'
  import Taxes from '@/components/sections/Taxes'
  import Catalog from '@/components/sections/Catalog'
  import DrupalBase from '@/components/sections/Base'
  import DrupalContent from '@/components/sections/Content'
  import CI from '@/components/sections/CI'
  import Security from '@/components/sections/Security'
  import Build from '@/components/sections/Build'
  import CartSummary from '@/components/Summary'
  import VueSticky from 'vue-sticky'

  export default {
    name: 'kickstart',
    components: {
      Locations,
      Packages,
      Payments,
      Shipping,
      Taxes,
      Catalog,
      DrupalBase,
      DrupalContent,
      CI,
      Security,
      Build,
      CartSummary,
    },
    directives: {
      'sticky': VueSticky,
    },
  }

</script>

<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/kickstart';
  @import '../assets/styles/partials/sidebar';
</style>
