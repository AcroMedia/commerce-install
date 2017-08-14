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
    <a
        id="generate-package"
        class="btn__secondary"
        href="#"
        v-scroll-to="'#scroll-to-offset'"
        @click="generatePackage"
    >
      Generate package
    </a>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

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

        let parameters = this.createParams(packages)

        // Get package download link.
        this.$http.get('https://install-service.drupalcommerce.com?' + parameters).then(response => {
          this.setDownloadLink(response.body)
        }, response => {
          // error callback
          console.log(response)
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/partials/mixins';
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/sidebar';

  #generate-package {
    &:hover {
      text-decoration: none;
      cursor: pointer;
      background: $orange;
      color: $c-white;
    }
  }
</style>
