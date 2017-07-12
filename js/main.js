
Vue.component('card', {
  template: '\
    <div class="box__item column">\
      <div v-if="item.image" class="pay__logo">\
        <img :src="item.image_src" alt="">\
      </div>\
      <h3>{{ item.title }}</h3>\
      <div class="box__description">\
        {{item.description}}\
      </div>\
    </div>\
  ',
  props: ['item']
});

Vue.component('section_header', {
  template: '\
  <div class="top__info">\
    <div class="box__content">\
      <h2 :class="section.h2_class">\
        <i v-if="section.icon" class="material-icons section-icon">{{section.icon}}</i>\
        <img v-if="section.image_src" class="section-icon" :src="section.image_src"/>\
      {{section.title}}</h2>\
      <p>{{section.description}}</p>\
    </div>\
  </div>\
  ',
  props: ['section']
});

var location_cards = new Vue({
  el: '#location-cards',
  data: {
    locations: [
      { id: 0, title: 'International', description: 'Do we need a description with these things?'},
      { id: 1, title: 'North America', description: 'Do we need a description with these things?'},
      { id: 2, title: 'EU', description: 'Do we need a description with these things?'},
      { id: 3, title: 'USA', description: 'Do we need a description with these things?'}
    ]
  }
});

var location_section_header = new Vue({
  el: '#location-section',
  data: {
    info: {
      h2_class: 'icon-world',
      icon: 'language',
      title: 'Location',
      description: 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.'
    }
  }
});

var package_cards = new Vue({
  el: '#package-cards',
  data: {
    packages: [
      { id: 0, title: 'Base', description: 'Do we need a description with these things?'},
      { id: 1, title: 'Catalog', description: 'Do we need a description with these things?'},
      { id: 2, title: 'Events', description: 'Do we need a description with these things?'},
      { id: 3, title: 'Subscriptions', description: ''}
    ]
  }
});

var package_section_header = new Vue({
  el: '#package-section',
  data: {
    info: {
      h2_class: 'icon-package',
      image_src: '../gfx/package-icon.png',
      title: 'Package',
      description: 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.'
    }
  }
});

var payment_cards = new Vue({
  el: '#payment-cards',
  data: {
    payments: [
      { id: 0, title: 'Paypal', description: 'Do we need a description with these things?', image: true, image_src: './gfx/paylogos/paypal.png'},
      { id: 1, title: 'BrainTree', description: 'Do we need a description with these things?', image: true, image_src: './gfx/paylogos/braintree.png'},
      { id: 3, title: 'Apple Pay', description: 'Do we need a description with these things', image: true, image_src: './gfx/paylogos/apple-pay.png'},
      { id: 2, title: 'Auth.net', description: 'Do we need a description with these things?', image: true, image_src: './gfx/paylogos/authorize.png'},
      { id: 4, title: 'Moneris', description: 'Do we need a description with these things'},
      { id: 5, title: 'Pay With Chickens', description: 'Do we need a description with these things'}
    ]
  }
});

var payment_section_header = new Vue({
  el: '#payment-section',
  data: {
    info: {
      h2_class: 'icon-payment',
      icon: 'credit_card',
      title: 'Payments',
      description: 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.'
    }
  }
});

var content_cards = new Vue({
  el: '#content-cards',
  data: {
    contents: [
      { id: 0, title: 'Migrate', description: 'Do we need a description with these things?'},
      { id: 1, title: 'Demo Content', description: 'Do we need a description with these things?'},
      { id: 2, title: 'Clean', description: 'Do we need a description with these things?'}
    ]
  }
});

var content_section_header = new Vue({
  el: '#content-section',
  data: {
    info: {
      h2_class: 'icon-package',
      image_src: '../gfx/package-icon.png',
      title: 'Content',
      description: 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.'
    }
  }
});

var security_section_header = new Vue({
  el: '#security-section',
  data: {
    info: {
      icon: 'security',
      title: 'Updates & Security',
      description: 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.'
    }
  }
});

var build_section_header = new Vue({
  el: '#build-section',
  data: {
    info: {
      image_src: '../gfx/drupal-icon.png',
      title: 'Build & Install',
      description: 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.'
    }
  }
});