<template>
  <div class="payments product__build">
    <a class="arrow_up" @click="show = !show" :class="show ? '' : 'down'"></a>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <i class="material-icons section-icons credit_card">credit_card</i>
          {{ sections[section].title }}
        </h2>
        <p>{{ sections[section].description }}</p>
      </div>
    </div>
    <transition name="cards-slide">
      <div class="product__content" v-if="show">
        <cards section="payments"></cards>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'payments',
    props: ['section'],
    data () {
      return {
        show: true
      }
    },
    components: {
      Cards
    },
    computed: {
      ...mapState(['sections']),
    },
  }
</script>

<style lang="scss">
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';
  @import '../../assets/styles/partials/card-transitions';

  .payments {
    .columns {
      display: inline-block;
    }
    .box__item {
      width: 220px;
      display: inline-block;
      padding: 18px;
      margin: 10px 4px;
      @include bp(mobil) {
        width: 100%;
      }
    }

    .pay__logo {
      min-height: 113px;
      text-align: center;
    }

    .pay-sponsor {
      color: $light-blue;
      display: block;
      margin-top: 10px;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
</style>
