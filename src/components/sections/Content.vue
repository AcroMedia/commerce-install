<template>
  <div class="drupal-content product__build">
    <a class="arrow_up" @click="show = !show" :class="show ? 'down' : ''"></a>
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
          <div class="section-icons__custom section-icons content"></div>
          {{ sections[section].title }}
        </h2>
        <div class="box__instructions">Select one.</div>
      </div>
    </div>
    <transition name="cards-slide">
      <div class="product__content" v-if="show">
        <cards section="content"></cards>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'content',
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

  .section-icons {
    background-image: url('../../assets/gfx/package-icon.png');
    top: 4px;
    margin-right: 4px;
  }
</style>
