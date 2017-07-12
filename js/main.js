var cart = {items: {}};
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
  template: '#kickstart-section-template',
});

Vue.component('cards', {
  props: ['section'],
  data: function() {
    return {
      options: sections[this.section].options,
      activeIndex: sections[this.section].activeIndex
    };
  },
  template: '#kickstart-options-template',
  methods: {
    emit: function(index, section) {
      console.log(sections[section]);
      Vue.set(cart.items, section, {section: section, index: index});
      Vue.set(sections[section], 'activeIndex', index);
      this.activeIndex = index;
    }
  }
});

Vue.component('cart-summary', {
  template: '<div id="a-tester"><div class="cart-item" v-for="item in items">{{ item.section }}: {{ item.index }}</div></div>',
  data: function () {
    return cart;
  }
});

var app = new Vue({
  el: '#app',
  data: {
    summary: []
  },
  methods: {
    selectOption: function(index) {
      console.log('a test');
      console.log(index);
    }
  }
});
