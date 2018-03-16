<template>
  <div class="base product__build">
    <a class="arrow_up" @click="show = !show" :class="show ? '' : 'down'"></a>
    <div class="tooltip_icon" @click="openTooltip = !openTooltip" :class="openTooltip ? 'open-tooltip' : ''">?</div>
    <div class="tooltip">
      <div class="tooltip_description" v-if="openTooltip">
        <div class="close" @click="openTooltip = !openTooltip" :class="openTooltip ? 'open-tooltip' : ''"><i class="material-icons">&#xE5CD;</i></div>
        <div class="tooltip_title">
          <i class="material-icons section-icons help">help</i>What is this?
        </div>
        {{ sections[section].description }}
      </div>
    </div>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <i class="material-icons section-icons view_module">view_module</i>
          {{ sections[section].title }}
          <div class="box__instructions">(Select one)</div>
        </h2>
        <div class="box__warning">
          <strong>Note:</strong> Drupal Commerce is developed for and tested against the core Drupal distribution. The Commerce team does not maintain this distribution or any of the others shown here and therefore can not provide specific support for them. Specifically, there may be drupal core version incompatibilities and may require manual intervention.
        </div>
      </div>
    </div>
    <transition name="cards-slide">
      <div class="product__content" v-if="show">
        <cards section="drupalBase"></cards>
        <button id="technology-partner-cta" class="technology-partner-cta" aria-label="Get your company featured here!">Get your company featured here!</button>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'base',
    props: ['section'],
    data () {
      return {
        show: true,
        openTooltip: false
      }
    },
    computed: {
      ...mapState(['sections']),
    },
    components: {
      Cards
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';
  @import '../../assets/styles/partials/card-transitions';
</style>
