/*************************************************
	1. use strict
	2. Preloader
	3. baguetteBoxOne map 	
	4. owlCarousel
	5. Affix
	7. map scroll off 
	8. offset
	9. scrolling
*************************************************/
(function($) {
    // Start of use strict
"use strict";

/*------------------------------------------------
* Preloader 
------------------------------------------------*/
$(window).on('load', function() {
    $('#loading').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');

 
/*------------------------------------------------
* Load Functions
------------------------------------------------*/
Affix();
});



/*------------------------------------------------
* page scroll 
------------------------------------------------*/
$('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 50
}, 1500, 'easeInOutExpo');

event.preventDefault();
});

$(window).scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

/*------------------------------------------------
* Affix 
------------------------------------------------*/
var Affix = function() {
    // offset for main navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });
};

/*------------------------------------------------
* tabs 
------------------------------------------------*/
$(function(){
 $('.btn-circle').on('click',function(){
   $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
   $(this).addClass('btn-info').removeClass('btn-default').blur();
 });

 $('.next-step, .prev-step').on('click', function (e){
   var $activeTab = $('.tab-pane.active');

   $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');

   if ( $(e.target).hasClass('next-step') )
   {
      var nextTab = $activeTab.next('.tab-pane').attr('id');
      $('[href="#'+ nextTab +'"]').addClass('btn-info').removeClass('btn-default');
      $('[href="#'+ nextTab +'"]').tab('show');
   }
   else
   {
      var prevTab = $activeTab.prev('.tab-pane').attr('id');
      $('[href="#'+ prevTab +'"]').addClass('btn-info').removeClass('btn-default');
      $('[href="#'+ prevTab +'"]').tab('show');
   }
 });
});
/*------------------------------------------------
* WOW
------------------------------------------------*/
// Initialize WOW.js Scrolling Animations
    new WOW().init();

	
}(jQuery, window, document));
