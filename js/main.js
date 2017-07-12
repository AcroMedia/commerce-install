var sections = {
  locations: {
    title: "Locations",
    options: [
      {
        title: 'International',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'North America',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'EU',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'USA',
        description: 'Do we need a description with these things?'
      }
    ],
  },
  packages: {
    title: "Packages",
    options: [
      {
        title: 'Base',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'Catalog',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'Events',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'Subscriptions',
        description: ''
      }
    ],
    activeIndex: false,
  },
  payments: {
    title: "Payments",
    options: [
      {
        title: 'Paypal',
        description: 'Do we need a description with these things?',
        image_src: './gfx/paylogos/paypal.png',
        sponsored: true,
        composer_package: 'drupal/commerce_paypal'
      },
      {
        title: 'BrainTree',
        description: 'Do we need a description with these things?',
        image_src: './gfx/paylogos/braintree.png',
        sponsored: true,
        composer_package: 'drupal/commerce_braintree'
      },
      {
        title: 'Apple Pay',
        description: 'Do we need a description with these things',
        image_src: './gfx/paylogos/apple-pay.png',
        sponsored: true,
        composer_package: 'drupal/commerce_applepay'
      },
      {
        title: 'Auth.net',
        description: 'Do we need a description with these things?',
        image_src: './gfx/paylogos/authorize.png'
      },
      {
        title: 'Moneris',
        description: 'Do we need a description with these things'
      },
      {
        title: 'Pay With Chickens',
        description: 'Do we need a description with these things'
      }
    ],
    multiselect: true
  },
  contents: {
    title: "Content",
    options: [
      {
        title: 'Migrate',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'Demo Content', description: 'Do we need a description with these things?'
      },
      {
        title: 'Clean', description: 'Do we need a description with these things?'
      }
    ],
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
      activeIndex: null
    };
  },
  template: '#kickstart-options-template',
  methods: {
    emit: function(index, section) {
      var sectionTitle = sections[section].title;
      var indexTitle = sections[section].options[index].title;

      Vue.set(app.summary, section, {section: sectionTitle, index: indexTitle, item: sections[section].options[index]});
      this.activeIndex = index;
    }
  }
});

Vue.component('cart-summary', {
  template: '#cart-summary-template',
  props: ['summary'],
  methods: {
    generatePackage: function () {
      console.log('only a test');
      console.log(app.summary);
      for (var property in app.summary) {
        console.log(property);
      }
    }
  }
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
