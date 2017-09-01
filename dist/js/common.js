
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
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
});









$('#playv').click(function(){
  $('.bgvideo').css('display', 'none');
  $('#videoID')[0].play();
});

$('#videoID').click(function(){
  $('#videoID')[0].pause();
  $('.bgvideo').css('display', 'block');
});



$('#dev1').click(function(){
  $('.pointer').css("display", "block");
  $('.pointer2').css("display", "none");
  $('.pointer3').css("display", "none");
  $('.pointer4').css("display", "none");
  $('#changedtext').html("Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market.");
})

$('#dev2').click(function(){
  $('.pointer').css("display", "none");
  $('.pointer2').css("display", "block");
  $('.pointer3').css("display", "none");
  $('.pointer4').css("display", "none");
  $('#changedtext').html("Это работает и это хорошо)");
})

$('#dev3').click(function(){
  $('.pointer').css("display", "none");
  $('.pointer2').css("display", "none");
  $('.pointer3').css("display", "block");
  $('.pointer4').css("display", "none");
  $('#changedtext').html("Все портреты мои. немного чсв)");
})

$('#dev4').click(function(){
  $('.pointer').css("display", "none");
  $('.pointer2').css("display", "none");
  $('.pointer3').css("display", "none");
  $('.pointer4').css("display", "block");
  $('#changedtext').html("лол. кек. чебурке");
})