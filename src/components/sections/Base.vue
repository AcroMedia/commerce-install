<template>
  <div class="base product__build">
      <a class="arrow_up" href="#"></a>
      <div class="top__info">
        <div class="box__content">
          <h2>
            <i class="material-icons section-icons view_module">view_module</i>
            Base
          </h2>
          <p>
            Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.
          </p>
        </div>
      </div>
      <div class="product__content">
        <cards section="drupalBase"></cards>
      </div>
    </div>
</template>

<script>
  import Cards from '@/components/Cards'

  export default {
    name: 'base',
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
