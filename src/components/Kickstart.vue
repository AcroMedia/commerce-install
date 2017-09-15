<template>
  <div class="kickstart container">

    <div class="kickstart__wrapper columns">
      <div class="kickstart__main column is-9">
        <div class="kickstart__description">
          <h1>Drupal Commerce Installation</h1>
          <p>
            <strong>This tool will build a Drupal Commerce composer file to install your site.</strong>
          </p>
          <br />
          <p>
            The steps below will take into consideration key elements that cater to your business needs.
          </p>
          <br />
          <p>
            Make changes to previous steps at any point.
            Configuration settings can be changed once the site has been installed as well.
            Once you’re happy with your selections below, click the <strong>Download</strong> button to have your files packaged up for install.
            Simple!
          </p>
          <br />
          <p>
            If you have any issues or questions along the way, we are always here to help. Click the "Need a Hand" section on the right to contact us!
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

      <div class="column is-3">
        <div v-sticky="{ zIndex: 100, stickyTop: -215 }">
          <div>
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
