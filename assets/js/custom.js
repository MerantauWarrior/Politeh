$( document ).ready(function() {
  // map

  // mob nav
  $('.mob-nav').click(function () {
    $('.navigation').toggleClass('navigation_opened');
    $('body, .wrapper').toggleClass('ovh');
  });
  $('.navigation__arrow').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('navigation__arrow_opened');
    $(this).closest('.navigation__list-item').find('.submenu').toggleClass('submenu_opened');
  });
  $('.mob-footer-list').click(function () {
    if($(this).siblings('.footer-navigation__list').hasClass('footer-navigation__list_opened')){
      $(this).text('+');
    }else {
      $(this).text('-');
    }
    $(this).siblings('.footer-navigation__list').toggleClass('footer-navigation__list_opened');
  });
  // language
  $('.lang__main').click(function () {
    $('.lang').toggleClass('lang_opened');
    $('.lang__list').slideToggle(300);
  });
  // home news slider
  if($('.news__slider-inner').length > 0){
    $('.news__slider-inner').slick({
      dots: true,
      arrows: true,
      infinite: false,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.news__slider-prev'),
      nextArrow: $('.news__slider-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            adaptiveHeight: true,
            dots: false
          }
        }
      ]
    });
  }
  // news single other slider
  if($('.news-page-single__other-slider-inner').length > 0){
    $('.news-page-single__other-slider-inner').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.news__slider-prev'),
      nextArrow: $('.news__slider-next'),
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: true
          }
        }
      ]
    });
  }

});