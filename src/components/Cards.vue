<!--suppress CommaExpressionJS -->
<template>
  <div class="cards columns">
    <div
        v-for="(option, index) in sections[section].options"
        @click="[
        highlightSelection(index, section),
        setLocation(index, section)
        ]"
        :class="[
        cardIsActive(index,section) ? 'active-option': '',
        !cardAvailableForLocation(index, section) ? 'disabled' : ''
        ]"
        class="box__item column noselect">
      <div
          v-if="option.image_src"
          class="pay__logo"
      >
        <img :src="option.image_src + ''" :alt="option.title">
      </div>
      <h3>{{ option.title }}</h3>
      <div class="box__description">
        {{ option.description }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'cards',
    props: ['section'],
    computed: {
      ...mapState(['sections', 'summary', 'location']),
    },
    methods: {
      ...mapMutations([
        'setStoreLocation',
        'resetSummaryOptions',
        'setSelectedOption',
        'removeSelectedOption',
      ]),
      cardIsActive (index, section) {
        return this.summary[section].activeIndex.indexOf(index) >= 0
      },
      cardAvailableForLocation (index, section) {
        if (this.location === 'all' || section === 'locations') {
          // All cards available.
          return true
        }
        let cardLocation = this.sections[section].options[index].location
        if (cardLocation === 'all' || cardLocation === this.location) {
          return true
        }
        return false
      },
      setLocation (index, section) {
        if (section === 'locations') {
          this.resetSummaryOptions()
          this.setStoreLocation(this.sections[section].options[index].location)
        }
      },
      highlightSelection (index, section) {
        let clicked = this.summary[section].activeIndex.indexOf(index)
        if (clicked > -1) {
          // If not required or another item is selected, do nothing
          if (!this.sections[section].required || this.summary[section].activeIndex.length > 1) {
            this.removeSelectedOption({section, clicked})
          } else {
            let sectionTitle = this.sections[section].title
            this.$notify({
              group: 'required',
              type: 'warning',
              position: 'top center',
              title: 'Required Section',
              text: 'You must choose at least one option from the <b>' + sectionTitle + '</b> section.',
              duration: 4500,
              speed: 250
            })
          }
        } else {
          if (!this.sections[section].multiselect) {
            this.setSelectedOption({section, index, reset: true})
          } else {
            this.setSelectedOption({section, index})
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';

  .product__content.columns {
    @media(max-width: 864px) and (min-width: 769px) {
      width: 100%;
      display: inline-block;
    }
  }

  h2 {
    font-size: 27px;
    font-family: $roboto;
    font-weight: 300;
  }

  .arrow_up {
    width: 28px;
    position: relative;
    display: block;
    top: 10px;
    float: right;
    margin-right: 20px;
    height: 28px;

    &:hover {
      text-decoration: none;
    }

    &:before {
      content: '\E316';
      font-size: 24px;
      text-align: center;
      top: 9px;
      color: #7a7a7a;
      cursor: pointer;
      line-height: 1;
      width: 28px;
      height: 28px;
      position: relative;
      font-family: 'Material Icons';
      border-radius: 50%;
      border: solid 2px #d1d1d1;
    }
  }

  .down {
    width: 28px;
    position: relative;
    display: block;
    top: 10px;
    float: right;
    margin-right: 20px;
    height: 28px;

    &:hover {
      text-decoration: none;
    }

    &:before {
      content: '\E313';
      font-size: 24px;
      text-align: center;
      top: 9px;
      color: #7a7a7a;
      cursor: pointer;
      line-height: 1;
      width: 28px;
      height: 28px;
      position: relative;
      font-family: 'Material Icons';
      border-radius: 50%;
      border: solid 2px #d1d1d1;
    }
  }

  .product__build {
    margin-bottom: 60px;
  }

  .product__content.off {
    display: none;
    max-height: 0;
  }

  .product__content {
    background: $c-white;
    opacity: 1;
    padding: 20px 30px 38px;
    margin-left: 0;
    margin-right: 0;
    border-bottom: 10px solid $grey-02;
  }

  .box {
    &__content {
      padding: 10px 38px 38px;
    }
    &__item {
      border: 1px solid $grey-01;
      border-top-width: 4px;
      margin: 10px 8px;

      h3 {
        text-align: center;
        color: $light-blue;
        font-size: 22px;
        @include bp(mobil) {
          padding-top: 10px;
        }
      }

      &:hover {
        cursor: pointer;
        border-color: $grey-03;
        box-shadow: 3px 3px 5px 0 $grey-02;
      }
      &.active-option {
        cursor: pointer;
        border-color: $c-blue;
      }
      &.active-option-jace {
        cursor: pointer;
        border-color: green;
      }

      &.disabled {
        color: $grey-01;
        background: $light-grey;
        border-color: $grey-01;
        cursor: default;
        pointer-events: none;
        h3 {
          color: lighten($c-blue, 30%)
        }

      }
    }
    &__description {
      text-align: center;
      font-size: 16px;
      @include bp(mobil) {
        padding: 5px;
      }
    }
  }


</style>
