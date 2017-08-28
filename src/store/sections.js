let locations = require('./locations')

const sections = {
  locations: {
    title: 'Region',
    description: 'If your Commerce site will not be serving the whole world, you can pick your region to hide options only available in other parts of the world',
    required: true,
    options: [
      {
        title: 'International',
        description: 'Anywhere in the world, this will allow you to see all options.',
        location: locations.LOCATION_INTL,
        default: true,
      },
      {
        title: 'North America',
        description: '',
        location: locations.LOCATION_NA,
      },
      {
        title: 'European Union',
        description: '',
        location: locations.LOCATION_EU,
      },
      {
        title: 'Asia',
        description: '',
        location: locations.LOCATION_ASIA,
      },
    ],
  },
  packages: {
    title: 'Packages',
    description: 'Packages are pre-selected option to help get you started with certian types of sites, you can still customize, but they help give you a good starting point.',
    options: [
      {
        title: 'Base',
        description: 'Nothing extra pre-selected',
        location: locations.LOCATION_INTL,
        default: true,
      },
      {
        title: 'Catalog',
        description: 'Extra functionality commonly needed for a traditional catalog style site.',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Events',
        description: 'Extra functionality for events, such as concerts or training, with some of the more traditional product based extras removed.',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Subscriptions',
        description: 'Recurring billing functionality, to allow for subscriptions, licensing and other time based billing functionality.',
        location: locations.LOCATION_INTL,
      },
    ],
  },
  drupalBase: {
    title: 'Distribution',
    description: 'Commerce can be added to any distribution and is not itself a distribution, below you can pick what Drupal distribution you want to base you site off. If you\'re not sure, just go with "Drupal"',
    required: true,
    options: [
      {
        title: 'Drupal',
        description: 'Stock Drupal, nothing extra',
        location: locations.LOCATION_INTL,
        base: 'drupal',
        default: true,
      },
      {
        title: 'Lightning',
        description: 'A authoring based distribution built by Acquia, useful for managing lots of content that needs reviews and editors.',
        location: locations.LOCATION_INTL,
        base: 'lightning',
      },
      {
        title: 'Thunder',
        description: 'A publishing based distribution for content publishers, like news or magazine sites.',
        location: locations.LOCATION_INTL,
        base: 'thunder',
      },
      {
        title: 'Open Social',
        description: 'Open Social is a distribution for building social communities and intranets, a successor to Drupal Commons',
        location: locations.LOCATION_INTL,
        base: 'open-social',
      },
      {
        title: 'OpenEDU',
        description: 'A pre-configured Drupal 8 implementation specifically built with the needs of higher education in mind.',
        location: locations.LOCATION_INTL,
        base: 'openedu',
      },
    ],
  },
  payments: {
    title: 'Payments',
    description: 'Add payment options to Drupal Commerce, you\'ll want to accept money somehow! You can also stack multiple different payment options.',
    options: [
      {
        title: 'Paypal',
        description: '',
        image_src: '/static/gfx/paylogos/paypal.png',
        sponsored: true,
        composer_package: 'drupal/commerce_paypal',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'BrainTree',
        description: '',
        image_src: '/static/gfx/paylogos/braintree.png',
        sponsored: true,
        composer_package: 'drupal/commerce_braintree',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Auth.net',
        description: '',
        image_src: '/static/gfx/paylogos/authorize.png',
        sponsored: true,
        composer_package: 'drupal/commerce_authnet',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Moneris',
        description: '',
        composer_package: 'drupal/commerce_moneris',
        location: locations.LOCATION_NA,
      },
    ],
    multiselect: true,
  },
  shipping: {
    title: 'Shipping',
    description: 'Choose your shipping and fulfillment options.',
    options: [
      {
        title: 'Commerce Shipping',
        description: 'The basic options for shipping, allows simple flat rate shipping options',
        composer_package: 'drupal/commerce_shipping',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'UPS',
        description: '',
        composer_package: 'drupal/commerce_ups',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'FedEx',
        description: '',
        composer_package: 'drupal/commerce_fedex',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'USPS',
        description: '',
        composer_package: 'drupal/commerce_usps',
        location: locations.LOCATION_NA,
      },
      {
        title: 'Postcode',
        description: 'Provides simple postal code based shipping options that can be provided via CSV',
        composer_package: 'drupal/commerce_postcode_delivery',
        location: locations.LOCATION_INTL,
      }
    ],
    multiselect: true,
  },
  taxes: {
    title: 'Taxes and Accounting',
    description: 'Choose your tax options.',
    options: [
      {
        title: 'Commerce Taxes',
        description: 'The basic options for taxes, includes manual setup as well as preconfigured taxes for EU and Canada',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'AvaTax',
        description: '',
        composer_package: 'drupal/commerce_avatax',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Quickbooks',
        description: '',
        composer_package: 'drupal/commerce_qb_webconnect',
        location: locations.LOCATION_INTL,
        enabled: false,
      },
      {
        title: 'Quickbooks Online',
        description: '',
        composer_package: 'drupal/commerce_qbo_ui',
        location: locations.LOCATION_INTL,
        enabled: false,
      }
    ],
    multiselect: true,
  },
  catalog: {
    title: 'Catalog',
    description: 'Additional Catalog and Product display options',
    options: [
      {
        title: 'Search API',
        description: '',
        composer_package: 'drupal/search_api',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Apache Solr',
        description: '',
        composer_package: 'drupal/search_api_solr',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'ElasticSearch',
        description: '',
        composer_package: 'drupal/elasticsearch_connector',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Wishlist',
        description: '',
        composer_package: 'drupal/commerce_wishlist',
        location: locations.LOCATION_INTL,
      }
    ],
    multiselect: true,
  },
  content: {
    title: 'Content',
    description: 'Select what content, if any, you want to start with. You can migrate from an existing setup or use some provided demo content.',
    options: [
      {
        title: 'Ubercart',
        description: 'Migrate your content over from a Drupal 6 or Drupal 7 Ubercart install.',
        composer_package: 'drupal/commerce_migrate',
      },
      {
        title: 'Commerce',
        description: 'Migrate your content from an existing Drupal 7 Commerce install.',
        composer_package: 'drupal/commerce_migrate',
      },
      {
        title: 'Magento',
        description: 'Migrate your content from an existing Magento setup.',
        composer_package: 'drupal/commerce_migrate',
      },
      {
        title: 'Shopify',
        description: 'Migrate your content from an existing Shopify setup.',
        composer_package: 'drupal/commerce_migrate',
        enabled: false,
      },
      {
        title: 'Demo Content',
        description: 'Not yet available',
        enabled: false,
      },
      {
        title: 'Clean',
        description: 'Empty install, no migrations or demo content',
      },
    ],
  },
  ci: {
    title: 'Continuous Integration & Automated Testing',
    description: 'Select a CI configuration to be included.',
    options: [
      {
        title: 'None',
        description: '',
      },
      {
        title: 'Gitlab CI',
        description: '',
        ci: 'gitlab',
      },
      {
        title: 'Travis CI',
        description: '',
        ci: 'travisci',
      },
      {
        title: 'Circle CI',
        description: '',
        ci: 'circleci',
        enabled: false,
      },
    ],
  },
  security: {
    title: 'Updates & Security',
    description: 'Change to a more generic signup + newsletter signup?',
  },
  build: {
    title: 'Build & Install',
    description: 'The download below will contain a composer.json file and some associated helper scripts. To install your site, simply extra the folder to wherever you want to site to be built and run "composer install". If you are not familiar with composer, see the Drupal.org documentation to get started https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal',
  },
}

module.exports = sections
