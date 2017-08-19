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
        @click.prevent="generatePackage"
    >
      Generate package
    </a>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import param from 'jquery-param'

  export default {
    name: 'summary',
    computed: {
      ...mapState(['sections', 'summary']),
    },
    methods: {
      ...mapMutations(['setDownloadLink']),
      generatePackage () {
        // @TODO validate email address?
        // if(!app.emailAddress) // do something
        let packages = []
        let vSections = this.sections
        for (let section in this.summary) {
          if (section !== 'locations') {
            this.summary[section].activeIndex.forEach(function (index) {
              packages.push(vSections[section].options[index].composer_package)
            })
          }
        }
        let base = ['lightning']
        let content = ['demo']
        let params = {packages, base, content}
        let parameters = param(params)

        // Get package download link.
//        this.$http.get('https://install-service.acromedia.com?' + parameters).then(response => {
        this.$http.get('http://kickstart-backend.localhost?' + parameters).then(response => {
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
