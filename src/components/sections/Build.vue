<template>
  <div class="build product__build">
    <div id="scroll-to-offset"></div>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <span class="section-icons__custom section-icons build"></span>
          {{ sections[section].title }}
        </h2>
        <p>{{ sections[section].description }} <a target="_blank" v-bind:href="sections[section].url">click here</a></p>
      </div>
    </div>
    <div class="product__content">
      <div class="btn__row">
        <div id="download" class="columns">
          <a id="download-button" class="btn btn__download btn--orange column is-11-mobile is-7-tablet is-4-desktop build__link"
             @click.prevent="generatePackage">
            <span>download</span>
          </a>
          <p v-if="packageChanged && generatedPackage" class="package-changed">Looks like you made some changes, click download to get an updated package.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'build',
    props: ['section'],
    components: {
      Cards,
    },
    computed: {
      ...mapState(['sections', 'packageChanged', 'generatedPackage']),
    },
    methods: {
      ...mapActions(['generatePackage']),
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';
  @import '../../assets/styles/partials/card-transitions';

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

      & p {
        &.package-changed {
          line-height: 51px;
          margin-left: 30px;
          padding-left: 30px;
          font-style: italic;
          font-size: .9em;
          position: relative;

          &:before {
            position: absolute;
            font-style: normal;
            height: 50px;
            width: 50px;
            left: 0;
            top: -4px;
            color: $yellow-warning;
            font-size: 1.6em;
            font-family: 'Material Icons';
            content: '\E8B2';
          }
        }
      }
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

  .btn {
    vertical-align: middle;
    height: 51px;
    line-height: 51px;
    position: relative;
    font-size: 25px;
    text-align: center;
    /*padding: 0 0 0px 75px;*/
    text-transform: capitalize;
    text-decoration: none;

    &__row {
      margin: 0 0 20px;

      & a {
        & span {
          top: -12px;
          position: relative;
        }
      }
    }

    &:hover {
      text-decoration: none;
    }

    &:before {
      position: absolute;
      display: inline-block;
      text-align: center;
      height: 50px;
      width: 50px;
      left: 0;
      top: 0;
      background: $orange;
      color: $c-white;
      font-size: 30px;
      font-family: 'Material Icons';
    }

    &--orange {
      color: $orange;
      border: solid 1px $orange;
      &:before {
        background: $orange;
      }
      &:hover {
        color: $c-white;
        background: $orange;
      }
    }

    &--blue {
      color: $light-blue;
      border: solid 1px $light-blue;
      &:before {
        background: $light-blue;
      }
      &:hover {
        color: $c-white;
        background: $light-blue;
      }
    }
    &--grey {
      color: $grey-01;
      border-color: $grey-01;
      background: $light-grey;

      &:before {
        background: $grey-01;
      }
    }

    &__download {
      &:before {
        content: '\E2C4';
      }
    }
  }

  #scroll-to-offset {
    position: relative;
    top: -35px;
  }

</style>
