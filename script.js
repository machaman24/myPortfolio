$(function(){
  $('a[href^=#]').click(function(){
    var adjust = -100;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $('.top-icon').hover(()=>{
    $('.top-icon').attr('src','source/beer_10.png');
  },()=>{
    $('.top-icon').attr('src','source/beer_11.png');
  });


  $(window).scroll(function (){
    $("#sample").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });


});
