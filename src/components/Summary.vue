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
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'summary',
    computed: {
      ...mapState(['sections', 'summary']),
    },
    methods: {
      ...mapMutations(['setDownloadLink']),
      createParams (packages) {
        return 'packages%5B%5D=drupal%2Fcommerce_applepay'
      },
      generatePackage () {
        // @TODO validate email address?
        // if(!app.emailAddress) // do something
        let packages = []
        let vSections = this.sections
        for (let section in this.summary) {
          if (section !== 'locations') {
            this.summary[section].activeIndex.forEach(function (index) {
              console.log(index)
              packages.push(vSections[section].options[index].composer_package)
            })
          }
        }

        console.log(packages)
        // todo fix this scroll to
//        let container = this.$el.querySelector('#generate-package')
//        container.scrollTop = container.scrollHeight
        let parameters = this.createParams(packages)

        // Get package download link.
        this.$http.get('https://install-service.drupalcommerce.com?' + parameters).then(response => {
          this.setDownloadLink(response.body)
//          alert(response.body)
//          let container = this.$el.querySelector('#download')
//          container.scrollTop = container.scrollHeight
        }, response => {
          // error callback
          console.log(response)
        })
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
