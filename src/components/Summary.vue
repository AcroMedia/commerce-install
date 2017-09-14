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
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'summary',
    computed: {
      ...mapState(['sections', 'summary', 'backendURL']),
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
