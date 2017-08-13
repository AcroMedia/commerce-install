# Kickstart

> Drupal Commerce Kickstart

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## JSON Schemas
- Sections: 
```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "A representation of a section in Commerce Kickstart.",
  "type": "object",
  "required": ["title"],
  "properties": {
    "title": {
      "type": "string",
      "description": "The title to display on the section."
    },
    "description": {
      "type": "string",
      "description": "The descriptions of the section."
    },
    "required": {
      "type": "boolean",
      "description": "Determines if a card from this section must be selected."
    },
    "options": {
      "type": "object",
      "description": "The options/cards made available to be selected by the user.",
      "required": ["title", "description", "location"],
      "properties": {
        "title": {
          "type": "string",
          "description": "The title to display on the section."
        },
        "description": {
          "type": "string",
          "description": "The descriptions of the section. Empty string allowed."
        },
        "location": {
          "type": "string",
          "description": "The location for which this card is available."
        },
        "default": {
          "type": "boolean",
          "description": "If set, this card will be selected by default. The default card MUST be the first option for the section."
        },
        "composer_package": {
          "type": "string",
          "description": "The composer package to be added to the download."
        },
        "sponsored": {
          "type": "boolean",
          "description": "Flag a sponsored card."
        },
        "img_src": {
          "type": "string",
          "description": "The path to the image file to be displayed on the card. Must be in the static folder to be properly rendered."
        },
        "multiselect": {
          "type": "boolean",
          "description": "Determines if the section can have multiple selections."
        }
      }
    }
  }
}
```
