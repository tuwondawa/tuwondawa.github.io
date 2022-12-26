
function myFunction(x) {
  var x = document.getElementById("nav");
  if (window.matchMedia("(max-width: 991px)").matches) {
    $("nav ul li a").click(function () {
      $("nav").slideUp("slow");
    });
    x.classList.toggle("change");
    $("nav").slideToggle("slow");
  } else {
    $("nav").show();
  }
}

$(document).ready(function () {

	  // 漢堡click
	  $(".menuicon").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("change");
		$("#nav").slideToggle();
	  });
	
	  // menu點擊
	  $("#nav li a").click(function() {
		if ($(".menuicon").hasClass("change")) $("#nav").slideUp();
	  });
	
	  // 監控menu
	  $(window).on("resize", function() {
		if ($(window).width() > 991) {
		  $("#nav").show();
		  if ($(".menuicon").hasClass("change")) $(".menuicon").removeClass("change");
		} else {
		  if (!$(".menuicon").hasClass("change")) $("#nav").hide();
		}
	  });
	  
  $("nav ul li a").click(function () {
    // $("nav").slideToggle("slow");
    $(".menuicon").removeClass("change");
  });

  $("#A1 .btn").click(function () {
    $("#A1 ul").slideToggle("slow");
    // $("#A1 .btn").slideUp("slow");
  });
  $(".close").click(function () {
    $("#A1 ul").slideUp("slow");
  });
  

});



$(function() {
	$(".navslider.one").slick({
		slidesToShow: 2,
		asNavFor: ".mainslider.one",
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});
	$(".mainslider.one").slick({
		slidesToShow: 1,
		infinite: false,
		dots: true,
		arrows: true,
    asNavFor: ".navslider.one",
    adaptiveHeight: true
	});
	$(".navslider.two").slick({
		slidesToShow: 3,
		asNavFor: ".mainslider.two",
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
		centerMode: true,
    focusOnSelect: true
	});
	$(".mainslider.two").slick({
		slidesToShow: 1,
		infinite: false,
		dots: true,
		arrows: true,
    asNavFor: ".navslider.two",
    adaptiveHeight: true
  });
  $(".navslider.three").slick({
		slidesToShow: 3,
		asNavFor: ".mainslider.three",
		centerPadding: '0',
		infinite: false,
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});
	$(".mainslider.three").slick({
		slidesToShow: 1,
		infinite: false,
		dots: true,
		arrows: true,
    asNavFor: ".navslider.three",
    adaptiveHeight: true
	});
});



$(document).ready(function() {
  $("a[href*='#']").click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
            return false;
        }
    }
  });
});