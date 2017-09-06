
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
    draggable: false,
    responsive: [
    {
      breakpoint:767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:false,
        adaptiveHeight: true
      }
    }
    ]
  });

  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });


  $('.devFull').click(function(){     
    var index = $(this).attr('data-index');
    var quotes = $('#quotes').find('.quote-text');
    quotes.css('display', 'none');
    $('#quotes').find('[data-index=' + index + ']').css('display', 'block');
    $('.pointer').removeClass("current");
    $('.pointer', this).addClass("current");
  });


  $('#playv').click(function(){
    $(this).css('display', 'none');
    $('.video-background').css('display', 'none');
    $('#videoID')[0].play();
    $('#videoID').attr('controls','controls');
  });

  $('.toggle-buttom').click(function(){
    $('.toggle-menu').addClass('toggle-on');
  });

  $('.toggle-buttom2').click(function(){
    $('.toggle-menu').removeClass('toggle-on');
  });
});
