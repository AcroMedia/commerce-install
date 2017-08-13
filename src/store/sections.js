var locations = require('./locations')

const sections = {
  locations: {
    title: 'Locations',
    required: true,
    options: [
      {
        title: 'International',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        default: true,
      },
      {
        title: 'USA',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_US,
      },
      {
        title: 'North America',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_NA,
      },
      {
        title: 'EU',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_EU,
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
        composer_package: 'drupal/base',
        default: true,
      },
      {
        title: 'Catalog',
        description: 'Do we need a description with these things?',
        composer_package: 'drupal/catalog',
        location: locations.LOCATION_EU,
      },
      {
        title: 'Events',
        description: 'Do we need a description with these things?',
        composer_package: 'drupal/events',
        location: locations.LOCATION_US,
      },
      {
        title: 'Subscriptions',
        description: '',
        composer_package: 'drupal/subs',
        location: locations.LOCATION_NA,
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
        composer_package: 'drupal/base',
        default: true,
      },
      {
        title: 'Lightning',
        description: 'Do we need a description with these things?',
        location: 'all',
        composer_package: 'drupal/lightning',
      },
      {
        title: 'Thunder',
        description: 'Do we need a description with these things?',
        location: 'all',
        composer_package: 'drupal/thunder',
      },
      {
        title: 'Open Social',
        description: '',
        location: 'all',
        composer_package: 'drupal/open-social',
      }
    ]
  },
  payments: {
    title: 'Payments',
    options: [
      {
        title: 'Paypal',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/paypal.png',
        sponsored: true,
        composer_package: 'drupal/commerce_paypal',
        location: 'all',
      },
      {
        title: 'BrainTree',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/braintree.png',
        sponsored: true,
        composer_package: 'drupal/commerce_braintree',
        location: 'all',
      },
      {
        title: 'Apple Pay',
        description: 'Do we need a description with these things',
        image_src: '/static/gfx/paylogos/apple-pay.png',
        sponsored: true,
        composer_package: 'drupal/commerce_applepay',
        location: locations.LOCATION_NA,
      },
      {
        title: 'Auth.net',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/authorize.png',
        location: 'all',
      },
      {
        title: 'Moneris',
        description: 'Do we need a description with these things',
        location: locations.LOCATION_NA,
      },
      {
        title: 'Pay With Chickens',
        description: 'Do we need a description with these things',
        location: locations.LOCATION_US,
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
