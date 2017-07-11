var payments = new Vue({
  el: '#payments',
  data: {
    info: {
      'title': 'Payments',
      'description': 'Explain stuff good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
    },
    material_icon: 'credit_card',
    modules: [
      {
        'name': 'PayPal',
        'description': 'Do we need a description with these things?',
        'image': '/gfx/paylogos/paypal.png'
      },
      {
        'name': 'Braintree',
        'description': 'Do we need a description with these things?',
        'image': '/gfx/paylogos/braintree.png'
      },
      {
        'name': 'Apple Pay',
        'description': 'Do we need a description with these things?',
        'image': '/gfx/paylogos/apple-pay.png'
      },
      {
        'name': 'Auth',
        'description': 'Do we need a description with these things?',
        'image': '/gfx/paylogos/authorize.png'
      },
      {
        'name': 'Moneris',
        'description': 'Do we need a description with these things?',
        'image': ''
      },
      {
        'name': 'Pay with Chickens',
        'description': 'Do we need a description with these things?',
        'image': ''
      },
    ]
  }
});

var shipping = new Vue({
  el: '#shipping',
  data: {
    info: {
      'title': 'Shipping',
      'description': 'Many shipping! Much WOW!!!',
    },
    material_icon: 'local_shipping',
    modules: [
      {
        'name': 'UPS',
        'description': 'Do we need a description with these things?',
      },
      {
        'name': 'Fedex',
        'description': 'Do we need a description with these things?',
      },
    ]
  }
});
