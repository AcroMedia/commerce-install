const sections = {
  locations: {
    title: 'Locations',
    required: true,
    options: [
      {
        title: 'International',
        description: 'Do we need a description with these things?',
        location: 'all',
        default: true,
      },
      {
        title: 'USA',
        description: 'Do we need a description with these things?',
        location: 'us',
      },
      {
        title: 'North America',
        description: 'Do we need a description with these things?',
        location: 'na',
      },
      {
        title: 'EU',
        description: 'Do we need a description with these things?',
        location: 'eu',
      },
    ]
  },
  packages: {
    title: 'Packages',
    options: [
      {
        title: 'Base',
        description: 'Do we need a description with these things?',
        location: 'all',
        default: true,
      },
      {
        title: 'Catalog',
        description: 'Do we need a description with these things?',
        location: 'eu',
      },
      {
        title: 'Events',
        description: 'Do we need a description with these things?',
        location: 'us',
      },
      {
        title: 'Subscriptions',
        description: '',
        location: 'na',
      }
    ]
  },
  drupalBase: {
    title: 'Base',
    required: true,
    options: [
      {
        title: 'Drupal',
        description: 'Do we need a description with these things?',
        location: 'all',
        default: true,
      },
      {
        title: 'Lightning',
        description: 'Do we need a description with these things?',
        location: 'all',
      },
      {
        title: 'Thunder',
        description: 'Do we need a description with these things?',
        location: 'all',
      },
      {
        title: 'Open Social',
        location: 'all',
        description: ''
      }
    ]
  },
  payments: {
    title: 'Payments',
    options: [
      {
        title: 'Paypal',
        description: 'Do we need a description with these things?',
        image_src: '../assets/gfx/paylogos/paypal.png',
        sponsored: true,
        composer_package: 'drupal/commerce_paypal',
        location: 'all',
      },
      {
        title: 'BrainTree',
        description: 'Do we need a description with these things?',
        image_src: '../assets/gfx/paylogos/braintree.png',
        sponsored: true,
        composer_package: 'drupal/commerce_braintree',
        location: 'all',
      },
      {
        title: 'Apple Pay',
        description: 'Do we need a description with these things',
        image_src: '../assets/gfx/paylogos/apple-pay.png',
        sponsored: true,
        composer_package: 'drupal/commerce_applepay',
        location: 'na',
      },
      {
        title: 'Auth.net',
        description: 'Do we need a description with these things?',
        image_src: '../assets/gfx/paylogos/authorize.png',
        location: 'all',
      },
      {
        title: 'Moneris',
        description: 'Do we need a description with these things',
        location: 'na',
      },
      {
        title: 'Pay With Chickens',
        description: 'Do we need a description with these things',
        location: 'us',
      }
    ],
    multiselect: true
  },
  content: {
    title: 'Content',
    options: [
      {
        title: 'Migrate',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'Demo Content',
        description: 'Do we need a description with these things?'
      },
      {
        title: 'Clean',
        description: 'Do we need a description with these things?'
      }
    ]
  },
  security: {
    title: 'Updates & Security'
  },
  build: {
    title: 'Build & Install'
  }
}

module.exports = sections
