let locations = require('./locations')

const sections = {
  locations: {
    title: 'Region',
    description: 'Select which location you do business. This will allow us to show information that applies specifically to your area of business.',
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
        description: 'Exclude options that do not provide services in North America.',
        location: locations.LOCATION_NA,
      },
      {
        title: 'European Union',
        description: 'Exclude options that do not operate in the European Union (+Britain and Switzerland).',
        location: locations.LOCATION_EU,
      },
      {
        title: 'Asia',
        description: 'Exclude options that do not provide services in Asia.',
        location: locations.LOCATION_ASIA,
      },
    ],
  },
  /*
  packages: {
    title: 'Packages',
    description: '',
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
        enabled: false,
      },
      {
        title: 'Events',
        description: 'Extra functionality for events, such as concerts or training, with some of the more traditional product based extras removed.',
        location: locations.LOCATION_INTL,
        enabled: false,
      },
      {
        title: 'Subscriptions',
        description: 'Recurring billing functionality, to allow for subscriptions, licensing and other time based billing functionality.',
        location: locations.LOCATION_INTL,
        enabled: false,
      },
    ],
  },
  */
  drupalBase: {
    title: 'Distribution',
    description: 'Distributions are full copies of Drupal that include Drupal Core, along with additional modules and libraries. Selecting your distribution will allow for unique modules to be included in your setup to conduct business within your specific vertical. If you’re unsure, that’s okay - just select Drupal.',
    required: true,
    options: [
      {
        title: 'Drupal',
        description: 'Stock Drupal, nothing extra.',
        location: locations.LOCATION_INTL,
        base: 'drupal',
        package_link: 'http://google.com',
        default: true,
      },
      {
        title: 'Lightning',
        description: 'A authoring based distribution built by Acquia, useful for managing lots of content that needs reviews and editors.',
        location: locations.LOCATION_INTL,
        package_link: 'http://yahoo.com',
        base: 'lightning',
      },
      {
        title: 'Open Social',
        description: 'Open Social is a distribution for building social communities and intranets, a successor to Drupal Commons.',
        location: locations.LOCATION_INTL,
        package_link: 'http://yahoo.com',
        base: 'open-social',
      },
      {
        title: 'Thunder',
        description: 'Not yet available with Kickstart.',
        // description: 'A publishing based distribution for content publishers, like news or magazine sites.',
        location: locations.LOCATION_INTL,
        base: 'thunder',
        package_link: 'http://yahoo.com',
        enabled: false,
      },
      {
        title: 'OpenEDU',
        description: 'Not yet available with Kickstart.',
        // description: 'A pre-configured Drupal 8 implementation specifically built with the needs of higher education in mind.',
        location: locations.LOCATION_INTL,
        base: 'openedu',
        enabled: false,
      },
    ],
  },
  payments: {
    title: 'Payments',
    description: 'Payment processors are required for any eCommerce store to allow for customers to pay via credit card, PayPal and additional currency methods. The payment processors will take care of the money transit for you, securely.',
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
        title: 'Square',
        description: '',
        image_src: '/static/gfx/paylogos/square.png',
        sponsored: true,
        composer_package: 'drupal/commerce_square',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Moneris',
        description: '',
        composer_package: 'drupal/commerce_moneris',
        location: locations.LOCATION_NA,
      },
      {
        title: 'Stripe',
        description: '',
        composer_package: 'drupal/commerce_stripe',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Vantiv',
        description: '',
        composer_package: 'drupal/commerce_vantiv',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Paytrail',
        description: '',
        composer_package: 'drupal/commerce_paytrail',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Payplug',
        description: '',
        composer_package: 'drupal/commerce_payplug',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'PayUMoney',
        description: '',
        composer_package: 'drupal/commerce_payumoney',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'AliPay',
        description: '',
        composer_package: 'drupal/commerce_alipay',
        location: locations.LOCATION_ASIA,
      },
      {
        title: 'CCAvenue',
        description: '',
        composer_package: 'drupal/commerce_ccavenue',
        location: locations.LOCATION_INTL,
      }
    ],
    multiselect: true,
  },
  shipping: {
    title: 'Shipping',
    description: 'Your web store can successfully take an order, but that is only half of the equation. Configure your shipping and fulfillment setup to best match your business and ensure you can process, label and ship orders out the door.',
    options: [
      {
        title: 'Commerce Shipping',
        description: 'The basic options for shipping, allows simple flat rate shipping options.',
        composer_package: 'drupal/commerce_shipping',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'UPS',
        description: 'Provides real-time rates from UPS.',
        composer_package: 'drupal/commerce_ups',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'FedEx',
        description: 'Provides real-time rates from Fedex.',
        composer_package: 'drupal/commerce_fedex',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Postcode',
        description: 'Provides simple postal code based shipping options that can be provided via CSV.',
        composer_package: 'drupal/commerce_postcode_delivery',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'USPS',
        description: 'Not yet available with Kickstart.',
        composer_package: 'drupal/commerce_usps',
        location: locations.LOCATION_NA,
        enabled: false,
      }
    ],
    multiselect: true,
  },
  taxes: {
    title: 'Taxes & Accounting',
    description: 'Your store needs to be accurate in the accounting department, and that means taxes for your customers must follow the rules. Charging taxes between various products, regions and countries can be handled by Drupal Commerce.',
    options: [
      {
        title: 'Custom Taxes',
        description: 'The basic options for taxes, includes custom rate setup as well as predefined rates for EU, Switzerland, Norway and Canada.',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Avalara',
        image_src: '/static/gfx/taxlogos/avalara.png',
        sponsored: true,
        description: '',
        composer_package: 'drupal/commerce_avatax',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Quickbooks',
        description: 'Not yet available with Kickstart.',
        composer_package: 'drupal/commerce_qb_webconnect',
        location: locations.LOCATION_INTL,
        enabled: false,
      },
      {
        title: 'Quickbooks Online',
        description: 'Not yet available with Kickstart.',
        composer_package: 'drupal/commerce_qbo_ui',
        location: locations.LOCATION_INTL,
        enabled: false,
      }

    ],
    multiselect: true,
  },
  catalog: {
    title: 'Catalog',
    description: 'How you display your products and categories drives the shopping experience.',
    options: [
      {
        title: 'Database Search',
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
    description: 'The organization and housing of your site’s written content, images and product details are the heart of your business. Drupal’s famous CMS is seamlessly connected to the Commerce toolbox and allows for the ultimate in productization and marketing. You may select to use the default content and data setups, integrate to a third party tool, integrate to a custom legacy setup or migrate your information from your old platform. Note that migrating content may require technical understanding and Drush familiarity.',
    required: true,
    options: [
      {
        title: 'Clean',
        description: 'Empty install, no migrations or demo content.',
        default: true,
      },
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
        description: 'Not yet available with Kickstart.',
        enabled: false,
      },
    ],
  },
  security: {
    title: 'Updates & Security',
    description: 'We’ll send you Drupal Commerce information and a monthly report that will keeps you updated with the status of commerce modules in development. This is stuff you might want to know if you’re building around the Drupal Commerce platform. Besides, if you don’t want to be a part of this newsletter you can unsubscribe any time. It’s all good!',
  },
  build: {
    title: 'Build & Install',
    description: 'The download below will contain a composer.json file and some associated helper scripts. To install your site, simply extract the folder to wherever you want to site to be built and run "composer install". If you are not familiar with composer, see the Drupal.org documentation to get started',
    url: 'https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal',
  },
}

module.exports = sections
