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
  },
  build: {
    title: "Build & Install"
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
  <div :class="section" class="product__build">
    <a class="arrow_up" v-if="section!='build'" href="#"></a>
    <div class="top__info">
      <div class="box__content">
        <h2>
          <i v-if="iconClass" :class="iconClass" class="material-icons section-icons">{{ iconClass }}</i>
          <i v-else class="material-icons section-icons">dashboard</i>
          {{ title }}
        </h2>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
    <div class="product__content">
      <slot></slot>
    </div>
  </div>
  `
});

Vue.component('cards', {
  props: ['section'],
  data: function() {
    return {
      options: sections[this.section].options,
      activeIndex: []
    };
  },
  template: `
      <div class="columns">
          <div
              v-for="(option, index) in options"
              @click="emit(index, section)"
              :class="[activeIndex.indexOf(index) > -1 ? 'active-option': '']"
              class="box__item column">
            <div
                v-if="option.image_src"
                class="pay__logo"
            >
              <img :src="option.image_src" :alt="option.title">
            </div>
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
      var clicked = this.activeIndex.indexOf(index);
      var activeOptions = [];

      if(clicked > -1) {
        this.activeIndex.splice(clicked, 1);
      }
      else {
        if(!sections[section].multiselect) {
          this.activeIndex = [index];
        }
        else {
          this.activeIndex.push(index);
        }
      }

      for(var i = 0; i < this.activeIndex.length; i++) {
        activeOptions.push(sections[section].options[this.activeIndex[i]]);
      }

      Vue.set(app.summary, section, {section: sectionTitle, activeOptions: activeOptions});
    }
  }
});

Vue.component('cart-summary', {
  template: `
    <div>
      <h2>Build Summary</h2>
      <div class="side__description">
        <!--Want to setup a Drupal Commerce site, but not sure what all this means?-->
        <div v-for="item in summary" v-if="item.section" class="side__summary">
          <div v-if="item.activeOptions.length > 0">
            <p class="side__summary-section">{{ item.section }}</p>
            <ul>
              <li v-for="card in item.activeOptions"
               class="side__summary-selected-card"><span>{{ card.title }}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="btn__secondary"
           @click="generatePackage"
      >
        Generate package
      </div>
  </div>
  `,
  props: ['summary'],
  methods: {
    generatePackage: function () {
      // @TODO validate email address?
      // if(!app.emailAddress) // do something

      let packages = [];
      for(i in app.summary.payments.activeOptions) {
        if(app.summary.payments.activeOptions[i].composer_package) {
          packages.push(app.summary.payments.activeOptions[i].composer_package);
        }
      }

      let parameters = jQuery.param({packages});
      console.log(packages);
      console.log(parameters);
      // GET /someUrl
      this.$http.get('https://install-service.drupalcommerce.com?' + parameters).then(response => {
        app.download = response.body;
        //jQuery.scrollTop('#download');
      }, response => {
          // error callback

      })
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
      contents: ''
    },
    emailAddress: '',
    download: ''
  }
});

var download = new Vue('download', {
  el: '#download',
  model: {
    download: app.download
  }
});