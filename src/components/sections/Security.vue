<template>
  <div class="security product__build">
    <a class="arrow_up" @click="show = !show" :class="show ? '' : 'down'"></a>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <i class="material-icons section-icons security">security</i>
          {{ sections[section].title }}
        </h2>
        <p>{{ sections[section].description }}</p>
      </div>
    </div>
    <transition name="cards-slide">
      <div class="product__content" v-if="show">
        <div class="column is-8">
          <div class="email__form">
            <div class="field">
              <div class="control">
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                <div class="email__container">
                  <input v-validate="'email'" @change="setEmailAddress" class="input" type="text"
                       name="email" placeholder="Email Address*">
                </div>
                <div class="newsletter__container">
                  <label for="cbx" class="label-cbx">
                    <input id="cbx" @change="setNewsletter" class="invisible" type="checkbox" name="newsletter">
                    <div class="checkbox">
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                      </svg>
                    </div>
                    <span>Send me security updates</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Cards from '@/components/Cards'

  export default {
    name: 'security',
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
      ...mapState(['sections', 'downloadLink', 'emailAddress', 'newsletter']),
    },
    methods: {
      ...mapMutations([
        'setNewsletter',
      ]),
      setEmailAddress (event) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store.state.emailAddress = event.srcElement.value
          }
        })
      },
      setNewsletter (event) {
        this.$store.state.newsletter = event.srcElement.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/partials/mixins';
  @import '../../assets/styles/partials/variables';
  @import '../../assets/styles/partials/sections';
  @import '../../assets/styles/partials/card-transitions';

  .email__form {
    .email__container {
      float: left;
      display: inline-block;
    }
    .newsletter__container {
      float: left;
      display: inline-block;
      padding-left: 10px;
      padding-top: 5px;
    }
    .label-cbx {
      user-select: none;
      cursor: pointer;
      margin-bottom: 0;
    }
    .label-cbx input:checked + .checkbox {
      border-color: #20C2E0;
    }
    .label-cbx input:checked + .checkbox svg path {
      fill: #20C2E0;
    }
    .label-cbx input:checked + .checkbox svg polyline {
      stroke-dashoffset: 0;
    }
    .label-cbx:hover .checkbox svg path {
      stroke-dashoffset: 0;
    }
    .label-cbx .checkbox {
      position: relative;
      top: 2px;
      float: left;
      margin-right: 8px;
      width: 20px;
      height: 20px;
      border: 2px solid #C8CCD4;
      border-radius: 3px;
    }
    .label-cbx .checkbox svg {
      position: absolute;
      top: -2px;
      left: -2px;
    }
    .label-cbx .checkbox svg path {
      fill: none;
      stroke: #20C2E0;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 71px;
      stroke-dashoffset: 71px;
      transition: all 0.6s ease;
    }
    .label-cbx .checkbox svg polyline {
      fill: none;
      stroke: #FFF;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 18px;
      stroke-dashoffset: 18px;
      transition: all 0.3s ease;
    }
    .label-cbx > span {
      pointer-events: none;
      vertical-align: middle;
    }

    .invisible {
      position: absolute;
      z-index: -1;
      width: 0;
      height: 0;
      opacity: 0;
    }

  }
</style>
