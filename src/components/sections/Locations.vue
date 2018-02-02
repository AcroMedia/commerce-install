<template>
  <div class="locations product__build">
    <a class="arrow_up" @click="show = !show" :class="show ? '' : 'down'"></a>
    <div class="tooltip">
      <div class="tooltip_icon" @click="openTooltip = !openTooltip" :class="openTooltip ? 'open-tooltip' : ''">?</div>
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
          <i class="material-icons section-icons language">language</i>
          {{ sections[section].title }}
        </h2>
      </div>
    </div>
    <transition name="cards-slide">
      <div class="product__content" v-if="show">
        <cards section="locations"></cards>
        <a href="mailto:sales@commerceguys.com" class="technology-partner-cta">Interested in being a technology partner?</a>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'locations',
    props: ['section'],
    data () {
      return {
        show: true,
        openTooltip: false
      }
    },
    components: {
      Cards
    },
    computed: {
      ...mapState(['sections', 'downloadLink']),
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';
  @import '../../assets/styles/partials/card-transitions';
</style>

