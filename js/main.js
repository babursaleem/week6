$(document).ready(function(){
  $(".appear").click(function(){
    $("img").show();
  });

  $(".disappear").click(function(){
    $("img").hide();
  });

$(".boss").dblclick(function(){
  $(".boss h1").toggleClass("new-text");
});

$(".add-item").click(function(){
  $("ul").append("<li>Item 3</li>");
});

$(".gretzky").hover(function(){
  $("img").fadeOut("slow");
});

$("h2").hover(function(){
  $("h2").slideUp();
});

$(".tlm").hover(function(){
  $(".tlm").fadeOut("fast");
});
$(".threatlevelmidnight").click(function() {
      $("img").show();
});

$("h1").hover(function(){
  $("h1").animate({width:"-=500px"});
});

$("body").websnowjq();

});
