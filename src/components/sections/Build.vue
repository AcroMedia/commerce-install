<template>
  <div class="build product__build">
    <div class="top__info">
      <div class="box__content">
        <h2>
          <span class="section-icons__custom section-icons build"></span>
          Build & Install
        </h2>
        <p>
          Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.
        </p>
      </div>
    </div>
    <div class="product__content">
      <a id="download" class="download__link" href="getDownloadLink">
        <div class="btn_download">
          download
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'build',
    components: {
      ...mapState(['downloadLink']),
      Cards
    },
    methods: {
      ...mapGetters(['getDownloadLink'])
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';

  .product {
    &__build {
      &:after {
        content: '';
        display: block;
        height: 10px;
        background-color: $grey-02;
      }
    }
    &__content {
      padding-top: 40px;
      border: 2px solid $light-blue;
    }
  }

  .box__content {
    background: $c-blue;

    h2 {
      color: $c-white;
    }

    p {
      color: $c-white;
    }
  }

  .section-icons {
    background-image: url('../../assets/gfx/drupal-icon.png');
    width: 37px;
    height: 42px;
    margin-right: 4px;
    top: 4px;
  }

  .btn_download {
    width: 230px;
    height: 51px;
    padding-top: 5px;
    padding-left: 30px;
    text-align: center;
    font-size: 25px;
    color: $light-blue;
    text-transform: capitalize;
    border: solid 1px $light-blue;

    &:before {
      content: '\E2C4';
      color: $c-white;
      font-size: 30px;
      margin-top: -5px;
      font-family: 'Material Icons';
      background: $light-blue;
      width: 50px;
      position: absolute;
      padding-top: 2px;
      left: 31px;
      text-align: center;
      display: inline-block;
      height: 50px;
    }
  }

  .download__link {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
</style>
