



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

  // sticky sidebar
  var top = $('.sidebar').offset().top;
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top)
      $('.sidebar').addClass('fixed');
    else
      $('.sidebar').removeClass('fixed');
    $('.sidebar').width($('.sidebar').parent().width());
  });

});
