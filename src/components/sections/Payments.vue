<template>
  <div class="payments product__build">
    <a class="arrow_up" href="#"></a>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <i class="material-icons section-icons credit_card">credit_card</i>
          Payments
        </h2>
        <p>
          Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.
        </p>
      </div>
    </div>
    <div class="product__content">
      <cards section="payments"></cards>
    </div>
  </div>
</template>

<script>
  import Cards from '@/components/Cards'

  export default {
    name: 'payments',
    components: {
      Cards
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';

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
