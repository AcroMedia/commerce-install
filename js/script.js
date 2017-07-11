



$(document).ready(function ($) {
  $('.arrow_up').on('click', function(e) {
     $(this).toggleClass('down').siblings().removeClass('down');

      $(this).parent().toggleClass('show').siblings().removeClass('show');
      e.preventDefault();
      $('.product__build').each(function(){
        if($(this).hasClass('show')) {
            $(this).closest('.product__build').children('.product__content').toggleClass('off',800).siblings().removeClass('off');
        }
        else {
          $(this).closest('.product__build').children('.product__content').removeClass('off');
        }
      });
  });

  Vue.component('kickstart-section', {
      props: ['title', 'description', 'iconClass', 'options', 'activeIndex', 'options', 'selectSection'],
      template: '#kickstart-section-template',
  });

  Vue.component('card', {
    template: '\
    <div class="box__item column" v-on:click="greet">\
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

    new Vue({
        el: '#app',
        data: {
            locations: {
                options: [
                    { id: 0, title: 'International', description: 'Do we need a description with these things?'},
                    { id: 1, title: 'North America', description: 'Do we need a description with these things?'},
                    { id: 2, title: 'EU', description: 'Do we need a description with these things?'},
                    { id: 3, title: 'USA', description: 'Do we need a description with these things?'}
                ],
            },
            packages: {
                options: [
                    {id: 0, title: 'Base', description: 'Do we need a description with these things?'},
                    {id: 1, title: 'Catalog', description: 'Do we need a description with these things?'},
                    {id: 2, title: 'Events', description: 'Do we need a description with these things?'},
                    {id: 3, title: 'Subscriptions', description: ''}
                ]
            },
            payments: {
                options: [
                    { id: 0, title: 'Paypal', description: 'Do we need a description with these things?', image: true, image_src: './gfx/paylogos/paypal.png'},
                    { id: 1, title: 'BrainTree', description: 'Do we need a description with these things?', image: true, image_src: './gfx/paylogos/braintree.png'},
                    { id: 3, title: 'Apple Pay', description: 'Do we need a description with these things', image: true, image_src: './gfx/paylogos/apple-pay.png'},
                    { id: 2, title: 'Auth.net', description: 'Do we need a description with these things?', image: true, image_src: './gfx/paylogos/authorize.png'},
                    { id: 4, title: 'Moneris', description: 'Do we need a description with these things'},
                    { id: 5, title: 'Pay With Chickens', description: 'Do we need a description with these things'}
                ]
            },
            contents: {
                options: [
                    {id: 0, title: 'Migrate', description: 'Do we need a description with these things?'},
                    {id: 1, title: 'Demo Content', description: 'Do we need a description with these things?'},
                    {id: 2, title: 'Clean', description: 'Do we need a description with these things?'}
                ]
            }
        },
        // define methods under the `methods` object
        methods: {
            greet: function (event) {
                // `this` inside methods points to the Vue instance
                alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
                if (event) {
                    alert(event.target.tagName)
                }
            }
        }
    });
});
