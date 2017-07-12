var cart = {
  items: {

  }
};
var sections = {
  locations: {
    title: "Locations",
    description: "Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.",
    options: [
      {id: 0, title: 'International', description: 'Do we need a description with these things?'},
      {id: 1, title: 'North America', description: 'Do we need a description with these things?'},
      {id: 2, title: 'EU', description: 'Do we need a description with these things?'},
      {id: 3, title: 'USA', description: 'Do we need a description with these things?'}
    ],
    activeIndex: false,
  },
  packages: {
    title: "Packages",
    options: [
      {id: 0, title: 'Base', description: 'Do we need a description with these things?'},
      {id: 1, title: 'Catalog', description: 'Do we need a description with these things?'},
      {id: 2, title: 'Events', description: 'Do we need a description with these things?'},
      {id: 3, title: 'Subscriptions', description: ''}
    ],
    activeIndex: false,
  },
  payments: {
    title: "Payments",
    options: [
      {
        id: 0,
        title: 'Paypal',
        description: 'Do we need a description with these things?',
        image: true,
        image_src: './gfx/paylogos/paypal.png'
      },
      {
        id: 1,
        title: 'BrainTree',
        description: 'Do we need a description with these things?',
        image: true,
        image_src: './gfx/paylogos/braintree.png'
      },
      {
        id: 3,
        title: 'Apple Pay',
        description: 'Do we need a description with these things',
        image: true,
        image_src: './gfx/paylogos/apple-pay.png'
      },
      {
        id: 2,
        title: 'Auth.net',
        description: 'Do we need a description with these things?',
        image: true,
        image_src: './gfx/paylogos/authorize.png'
      },
      {id: 4, title: 'Moneris', description: 'Do we need a description with these things'},
      {id: 5, title: 'Pay With Chickens', description: 'Do we need a description with these things'}
    ],
    activeIndex: false,
  },
  contents: {
    title: "Content",
    options: [
      {id: 0, title: 'Migrate', description: 'Do we need a description with these things?'},
      {id: 1, title: 'Demo Content', description: 'Do we need a description with these things?'},
      {id: 2, title: 'Clean', description: 'Do we need a description with these things?'}
    ],
    activeIndex: false,
  },
  security: {
    title: "Updates & Security"
  }
};

Vue.component('kickstart-section', {
  props: ['icon-class', 'section', 'description'],
  data: function() {
    // pull in any data from the global object
    return {
      title: sections[this.section].title
    };
  },
  template: `
  <div class="product__build location">
    <a class="arrow_up" href="#"></a>
    <div class="top__info">
      <div class="box__content">
        <h2><i class="material-icons section-icons">{{ iconClass }}</i>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
    <div class="product__content">
      <slot></slot>
    </div>
  </div>
  `,
});

Vue.component('cards', {
  props: ['section'],
  data: function() {
    return {
      options: sections[this.section].options,
      activeIndex: sections[this.section].activeIndex
    };
  },
  template: `
  <div class="columns">
    <div
        v-for="(option, index) in options"
        v-on:click="emit(index, section)"
        v-bind:class="[activeIndex === index ? 'active-option': '']"
        class="box__item column">
      <h3>{{ option.title }}</h3>
      <div class="box__description">
        {{ option.description }}
      </div>
    </div>
  </div>

  `,
  methods: {
    emit: function(index, section) {
      var sectionTitle = sections[section].title;
      var indexTitle = sections[section].options[index].title;

      Vue.set(app.summary, section, {section: sectionTitle, index: indexTitle});
      Vue.set(sections[section], 'activeIndex', index);
      this.activeIndex = index;
    }
  }
});

Vue.component('cart-summary', {
  props: ['summary'],
  template: `
          <div>
          <h2>Build Summary</h2>
          <div class="side__description">
            <!--Want to setup a Drupal Commerce site, but not sure what all this means?-->
            <div v-for="item in summary">
              <span class="module__title">{{ item.section }}</span>
              <span class="module__product">{{ item.index }}</span>
            </div>
          </div>
          <div class="btn__secondary">
            Generate package
          </div>
          </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    summary: {
      locations: '',
      packages: '',
      payments: '',
      contents: '',
    }
  },
});
