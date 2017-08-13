/**
 * Static content for each section.
 *
 * {
 *   "$schema" : "http://json-schema.org/draft-04/schema#",
 *   "description" : "A representation of a section in Commerce Kickstart.",
 *   "type" : "object",
 *   "required" : ["title"],
 *   "properties" :  {
 *     "title" : {
 *       "type": "string",
 *       "description" : "The title to display on the section."
 *     },
 *     "description" : {
 *       "type": "string",
 *       "description" : "The descriptions of the section."
 *     },
 *     "required" : {
 *       "type": "boolean",
 *       "description" : "Determines if a card from this section must be selected."
 *     },
 *     "options" : {
 *       "type": "object",
 *       "description" : "The options/cards made available to be selected by the user."
 *       "required" : ["title", "description", "location"],
 *       "properties" : {
 *         "title" : {
 *           "type": "string",
 *           "description" : "The title to display on the section."
 *         },
 *         "description" : {
 *           "type": "string",
 *           "description" : "The descriptions of the section. Empty string allowed."
 *         },
 *         "location" : {
 *           "type": "string",
 *           "description" : "The location for which this card is available."
 *         },
 *         "default" : {
 *           "type" : "boolean",
 *           "description" : "If set, this card will be selected by default. The default card MUST be the first option for the section."
 *         },
 *         "composer_package" : {
 *           "type" : "string",
 *           "description" : "The composer package to be added to the download."
 *         },
 *         "sponsored" : {
 *           "type" : "boolean",
 *           "description" : "Flag a sponsored card."
 *         },
 *         "img_src" : {
 *           "type" : "string",
 *           "description" : "The path to the image file to be displayed on the card. Must be in the static folder to be properly rendered."
 *         },
 *         "multiselect" : {
 *           "type" : "boolean",
 *           "description" : "Determines if the section can have multiple selections."
 *         },
 *       },
 *     },
 *   },
 * }
 *
 */

let locations = require('./locations')

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
    ],
  },
  packages: {
    title: 'Packages',
    options: [
      {
        title: 'Base',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
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
      },
    ],
  },
  drupalBase: {
    title: 'Base',
    required: true,
    options: [
      {
        title: 'Drupal',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/base',
        default: true,
      },
      {
        title: 'Lightning',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/lightning',
      },
      {
        title: 'Thunder',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/thunder',
      },
      {
        title: 'Open Social',
        description: '',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/open-social',
      },
    ],
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
        location: locations.LOCATION_INTL,
      },
      {
        title: 'BrainTree',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/braintree.png',
        sponsored: true,
        composer_package: 'drupal/commerce_braintree',
        location: locations.LOCATION_INTL,
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
        location: locations.LOCATION_INTL,
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
      },
    ],
    multiselect: true,
  },
  content: {
    title: 'Content',
    options: [
      {
        title: 'Migrate',
        description: 'Do we need a description with these things?',
      },
      {
        title: 'Demo Content',
        description: 'Do we need a description with these things?',
      },
      {
        title: 'Clean',
        description: 'Do we need a description with these things?',
      },
    ],
  },
  security: {
    title: 'Updates & Security',
  },
  build: {
    title: 'Build & Install',
  },
}

module.exports = sections
