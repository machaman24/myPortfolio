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


  function getScreenSize() {

    console.log(" 画面サイズの横幅 ");
    console.log(window.parent.screen.width);

    console.log(" 画面サイズの高さ ");
    console.log(window.parent.screen.height);
  }


});
