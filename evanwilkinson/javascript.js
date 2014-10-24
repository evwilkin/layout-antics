$(document).ready(function() {
  $("#firstScreen")
    .hide()
    .delay(400)
    .fadeIn(1700);
  $(".slider")
    .hide()
    .delay(1000)
    .fadeIn(1000);
  $("footer").hide()
})

$("#wedding").mouseover(function() {
  $("#photography").attr("src", "dsc_2053.jpg");
});

$("#travel").mouseover(function() {
  $("#photography").attr("src", "austin.jpg");
});

$("#lifestyle").mouseover(function() {
  $("#photography").attr("src", "dsc_3279.jpg");
});

$(".slider").click(function() {
  $("footer").slideToggle("slow")
});

$("#photographer").click(function() {
  $('html,body').animate({
    scrollTop: target.offset().top
  }, 1000);
});

$("a").click(function(){
    $("html, body").animate({
        scrollTop: $( $.attr(this, "href") ).offset().top
    }, 500);
    return false;
});
