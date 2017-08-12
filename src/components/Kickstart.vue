<template>
  <div class="kickstart container">
    <div class="kickstart__wrapper columns">
      <div class="kickstart__main column is-9">
        <div class="kickstart__description">
          <h1>Build & install</h1>
          <p>
            <strong>Intro/overview text, exmplain what this is all about;</strong>
            that means you
            can keep, replace, grow, remove and or custom-modify any single portion
            of your eCommerce experience, at your own pace. Drupal Commerce is an
            open source Adaptive Sales Platfasily configured and integrated into
            the tools that drive your business today and in the future.
          </p>
        </div>

        <locations></locations>
        <drupal-base></drupal-base>
        <packages></packages>
        <payments></payments>
        <drupal-content></drupal-content>
        <security></security>
        <build></build>

      </div>
      <div class="column is-3 ">
        <div class="sidebar">
          <div class="sidebar__help">
            <h2>Need a Hand?</h2>
            <div class="side__description">
              Want to setup a Drupal Commerce site, but not sure what all this means?
            </div>
            <div class="btn__primary">
              Yeah, Help Me Out!
            </div>
          </div>
          <div class="sidebar__summary">
            <cart-summary></cart-summary>
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
  import DrupalBase from '@/components/sections/Base'
  import DrupalContent from '@/components/sections/Content'
  import Security from '@/components/sections/Security'
  import Build from '@/components/sections/Build'
  import CartSummary from '@/components/Summary'

  let $ = window.jQuery = require('jquery')

  // Maybe try to do this in a more vue like fashion
  // sticky sidebar
  $(function () {
    $('.arrow_up').on('click', function (e) {
      $(this).toggleClass('down').siblings().removeClass('down')

      $(this).parent().toggleClass('show').siblings().removeClass('show')
      e.preventDefault()
      $('.product__build').each(function () {
        if ($(this).hasClass('show')) {
          $(this).closest('.product__build').children('.product__content').toggleClass('off', 800).siblings().removeClass('off')
        } else {
          $(this).closest('.product__build').children('.product__content').removeClass('off')
        }
      })
    })

    let top = $('.sidebar').offset().top
    $(window).scroll(function (event) {
      let y = $(this).scrollTop()
      if (y >= top) {
        $('.sidebar').addClass('fixed')
      } else {
        $('.sidebar').removeClass('fixed')
        $('.sidebar').width($('.sidebar').parent().width())
      }
    })
  })

  export default {
    name: 'kickstart',
    components: {
      Locations,
      Packages,
      Payments,
      DrupalBase,
      DrupalContent,
      Security,
      Build,
      CartSummary,
    }
  }

</script>

<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/kickstart';
  @import '../assets/styles/partials/sidebar';
</style>
