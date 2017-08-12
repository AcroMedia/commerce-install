<template>
  <div class="summary">
    <h2>Build Summary</h2>
    <div class="side__description">
      <div v-for="item in summary" v-if="item.section" class="side__summary">
        <div v-if="item.activeOptions.length > 0">
          <p class="side__summary-section">{{ item.section }}</p>
          <ul>
            <li v-for="card in item.activeOptions"
                class="side__summary-selected-card">
              <span>{{ card.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      id="generate-package"
      class="btn__secondary"
      @click="generatePackage"
    >
      Generate package
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  //  let $ = window.jQuery = require('jquery')

  export default {
    name: 'summary',
    computed: {
      ...mapState(['sections', 'summary']),
    },
    methods: {
      generatePackage: function () {
        // @TODO validate email address?
        // if(!app.emailAddress) // do something
        let packages = []
        for (let i in this.summary.payments.activeOptions) {
          if (this.summary.payments.activeOptions[i].composer_package) {
            packages.push(this.summary.payments.activeOptions[i].composer_package)
          }
        }

//        let container = this.$el.querySelector("#container");
//        container.scrollTop = container.scrollHeight;
//        console.log(container)
//        container.scrollTop = container.scrollHeight
//        alert(container.scrollHeight)
//        let parameters = $.param({packages})
//        console.log(parameters)
//        // GET /someUrl
//        this.$http.get('https://install-service.drupalcommerce.com?packages%5B%5D=drupal%2Fcommerce_applepay').then(response => {
//          alert(response.body)
//          let container = this.$el.querySelector('#download')
//          container.scrollTop = container.scrollHeight
//        }, response => {
//          // error callback
//          console.log(response)
//        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/sidebar';

  #generate-package {
    &:hover {
      cursor: pointer;
      background: $orange;
      color: $c-white;
    }
  }
</style>
