<template>
  <div class="security product__build">
    <a class="arrow_up" href="#"></a>
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
    <div class="product__content">
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
  </div>
</template>

<script>
  import Cards from '@/components/Cards'

  export default {
    name: 'security',
    components: {
      Cards
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';
</style>
