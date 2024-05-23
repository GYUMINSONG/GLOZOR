$(function () {
  // $(".logo>a").click(function () {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   }, 0);
  //   return false;
  // });
  // $(".about>a").click(function () {
  //   $('body,html').animate({  
  //     scrollTop: 1400
  //   }, 0);
  //   return false;
  // });
  // 연습

  // 연습
  // $(".collection>a").click(function () {
  //   $('body,html').animate({
  //     scrollTop: 2380
  //   }, 500);
  //   return false;
  // });
  // $(".collaboration>a").click(function () {
  //   $('body,html').animate({
  //     scrollTop: 3680
  //   }, 500);
  //   return false;
  // });
  // $(".issues>a").click(function () {
  //   $('body,html').animate({
  //     scrollTop: 5930
  //   }, 500);
  //   return false;
  // });

  // mobile menu//

  $(".menu_link a").click(function () {
    $("#menu").css({
      'margin-left': '0',
      'transition': 'margin-left .3s'
    })
  });
  $(".close_btn").click(function () {
    $("#menu").css({
      'margin-left': '300vw',
      'transition': 'margin-left .3s'
    })
  });
  $(".m_gnb li a").click(function () {
    $("#menu").css({
      'margin-left': '300vw',
      'transition': 'margin-left .3s'
    })
  });
  $(".logo").click(function () {
    $("#menu").css({
      'margin-left': '300vw',
      'transition': 'margin-left .3s'
    })
  });


  $(".menu_link a").click(function () {
    $('.close').show();
    $(this).hide();
  });
  $(".close").click(function () {
    $(this).hide();
    $('.menu_link a').show();
  });
  $(".m_gnb li a").click(function () {
    $('.close').hide();
    $('.menu_link a').show();
  });
  $(".logo").click(function () {
    $('.close').hide();
    $('.menu_link a').show();
  });
  
  // mobile menu//
});
