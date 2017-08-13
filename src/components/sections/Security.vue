<template>
  <div class="security product__build">
    <a class="arrow_up" @click="show = !show" :class="show ? '' : 'down'"></a>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <i class="material-icons section-icons security">security</i>
          Updates & Security
        </h2>
        <p>
          Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.
        </p>
      </div>
    </div>
    <transition name="cards-slide">
      <div class="product__content" v-if="show">
        <div class="column is-6">
          <div class="email__form">
            <div class="field">
              <p class="control">
                <input class="input" type="text"
                       placeholder="Email Address*">
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Cards from '@/components/Cards'

  export default {
    name: 'security',
    data () {
      return {
        show: true
      }
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
