(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

1. Auto Height Function
2. Validateemail Function
3. Animate Init
4. Preloader
5. Parallax Init
6. Apps Craft Top Menu Offset
7. Apps Craft Footer Menu Offset
8. Apps Craft Sync Slider
9. Apps Craft Video pop UP
10. Apps Craft Video Background
11. Apps Craft Welcome Slider
12. Apps Craft Accordion
13. Contact Form
14. Newsletter Subscription
15. Skrollr Init
16. Sticky Menu
17. 3D Slider



-------------------------------------------------------------------*/

  /*=============================================== 
      1. Auto Height Function
  ================================================*/
  function autoHeight() {
    var why_choose_img = $('.apps-craft-why-chose-img'),
      why_choose_txt = $('.apps-craft-why-choose-us-container');

      why_choose_txt.css('height', why_choose_img.outerHeight());
  }

  /*=============================================== 
      2. Validateemail Function
  ================================================*/
  function validateEmail(email) {
      var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
      return re.test(email);
  }

  autoHeight();

  /*=============================================== 
      3. Animate Init
  ================================================*/
  // new WOW().init();

$(window).on('load', function() {
  autoHeight();

  /*=============================================== 
      4. Preloader
  ================================================*/
  $('#preloader').fadeOut(450);
}); // end on.load event



$(document).ready(function(){
  autoHeight();

	var bLazy = new Blazy();
	/*=============================================== 
	      5. Parallax Init
	  ================================================*/
	if ($('#apps_craft_animation').length > 0 ) {
	  $('#apps_craft_animation').parallax();
	}

	// #apps_craft_animation-2 For Index Version 5
	if ($('#apps_craft_animation-2').length > 0) {
	  $('#apps_craft_animation-2').parallax();
	}

  /*=============================================== 
      6. Apps Craft Top Menu Offset
  ================================================*/
  if($('.apps-craft-menu').length >0 ) {
  $( '.apps-craft-menu' ).on('click', 'a', function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - 0;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, "easeInOutCirc");
    e.preventDefault();
  });
  } // End is_exists 

  /*=============================================== 
      7. Apps Craft Footer Menu Offset
  ================================================*/
 if($('.apps-craft-footer-menu').length >0 ) {
  $( '.apps-craft-footer-menu' ).on('click', 'a', function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - 0;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, "easeInOutCirc");
    e.preventDefault();
  });
  } // End is_exists

  /*=============================================== 
      8. Apps Craft Sync Slider
  ================================================*/

  if ($('#apps-craft-commentor-slider').length >0) {

     var sync1 = $("#apps-craft-commentor-slider");
    var sync2 = $("#apps-craft-testimonial-thumb");

    sync1.owlCarousel({
      singleItem : true,
      // slideSpeed : 1000,
      pagination:false,
      navigation: false,
      addClassActive : true,
      afterAction : syncPosition,
      responsiveRefreshRate : 200,
      transitionStyle : "fade",
    });

    $(".next").on('click', function(){
      sync1.trigger('owl.next');
    });
    $(".prev").on('click', function(){
      sync1.trigger('owl.prev');
    });

    sync2.owlCarousel({
      items : 3,
      itemsDesktop      : [1199,3],
      itemsDesktopSmall     : [979,3],
      itemsTablet       : [768,3],
      itemsMobile       : [479,1],
      pagination:false,
      navigation: false,
      responsiveRefreshRate : 100,
      afterInit : function(el){
        el.find(".owl-item").eq(0).addClass("synced");
      }
    });

    function syncPosition(el){
      var current = this.currentItem;
      $("#apps-craft-testimonial-thumb")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
      if($("#apps-craft-testimonial-thumb").data("owlCarousel") !== undefined){
        center(current)
      }
    }

    $("#apps-craft-testimonial-thumb").on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).data("owlItem");
      sync1.trigger("owl.goTo",number);
    });

    function center(number){
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for(var i in sync2visible){
        if(num === sync2visible[i]){
          var found = true;
        }
      }

      if(found===false){
        if(num>sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", num - sync2visible.length+2)
        }else{
          if(num - 1 === -1){
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if(num === sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", sync2visible[1])
      } else if(num === sync2visible[0]){
        sync2.trigger("owl.goTo", num-1)
      }
      
    }
} // Apps Craft Sync Slider

/*=============================================== 
      9. Apps Craft Video pop UP
  ================================================*/
if ($('.apps-craft-popup-video').length > 0) {
  $('.apps-craft-popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: true,

    fixedContentPos: false
  });
} // Apps Craft Video Pop UP

/*=============================================== 
     10. Apps Craft Video Background
  ================================================*/
if ($('.apps-craft-video-bg-section').length > 0) {
  var options = { 
    videoId: 'waTteMeg4Ag', 
    start: 3 ,
    width: $(window).width(),
    wrapperZIndex: 99,
    repeat: true,
  };
  $('.apps-craft-video-bg-section').tubular(options);
}

/*=============================================== 
     11. Apps Craft Welcome Slider
  ================================================*/
if ($('#apps-craft-welcome-slider').length > 0) {
  var owl1 = $("#apps-craft-welcome-slider");
  owl1.owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1,
      itemsDesktop      : [1199,1],
      itemsDesktopSmall     : [979,1],
      itemsTablet       : [768,1],
      itemsMobile       : [479,1],
      touchDrag: true,
      mouseDrag: true,
      pagination: true,
      navigation: false,
      addClassActive: true,
  });
}


/*=============================================== 
     12. Apps Craft Accordion
  ================================================*/
if ($('.apps-craft-accordion .panel-title').length > 0) {
  $('.apps-craft-accordion .panel-title').click(function(){
    $('.apps-craft-accordion .panel-title').removeClass('click');
    $(this).addClass('click');
  });
}

/*=============================================== 
			13. Contact Form
		================================================*/

		if ($('#apps-craft-form').length > 0) {

	  var apps_craft_contact_btn = $('#apps-craft-input-send'),
	      apps_craft_form = $('#apps-craft-form');

	  apps_craft_form.on('submit', function(e){
	    e.preventDefault();

	    $('.apps_craft_error, .apps-craft-success-message, .apps-craft-loader').remove();
	    $('.form-group input').removeClass('apps_craft_input_error');

	    var apps_craft_input_name     = $('#apps-craft-input-name'),
	        apps_craft_input_email    = $('#apps-craft-input-email'),
	        apps_craft_input_message  = $('#apps-craft-input-message'),
	        apps_craft_error          = false,
	        self                  = $(this);

	    if(apps_craft_input_email.val() === ''){
	      apps_craft_input_email.before('<div class="apps_craft_error">Email Address Should not be emtpy.</div>').hide().fadeIn();
	      apps_craft_input_email.addClass('apps_craft_input_error');
	      apps_craft_error = true;
	    } else if(!validateEmail(apps_craft_input_email.val().toLowerCase())){
	      apps_craft_input_email.before('<div class="apps_craft_error">Email Address Should be valid.</div>').hide().fadeIn();
	      apps_craft_input_email.addClass('apps_craft_input_error');
	      apps_craft_error = true;
	    }else if(apps_craft_input_message.val() === ''){
	      apps_craft_input_message.before('<div class="apps_craft_error">Message Should not be emtpy.</div>').hide().fadeIn();
	      apps_craft_input_message.addClass('apps_craft_input_error');
	      apps_craft_error = true;
	    }

	    if(apps_craft_error === false){
	      apps_craft_contact_btn.before('<span class="apps-craft-loader apps-craft-loader1"></span>').hide().fadeIn();
	      $.ajax({
	        type: "POST",
	        url: "php/contact-form.php",
	        data: {
	          'apps_craft_input_name' : apps_craft_input_name.val(),
	          'apps_craft_input_email' : apps_craft_input_email.val(),
	          'apps_craft_input_message' : apps_craft_input_message.val()
	        },
	        success: function(result){
	           apps_craft_contact_btn.after('<div class="apps-craft-success-message">' + result + '</div>').hide().fadeIn();

	           $(".apps-craft-loader").fadeOut("normal", function() {
	              $(this).remove();
	          });
	        }
	      });
	    }
	  });
  }

  /*=============================================== 
       14. Newsletter Subscription
  ================================================*/
  if ($('.mc-form').length > 0) {
  $('.mc-form').each(function(index){
    var formthis = $(this).ajaxChimp({
        url: '//pixiefy.us13.list-manage.com/subscribe/post?u=1c19cb3fd3c3c6c56177c50ea&amp;id=967a07b6cc',
        callback: callbackFunction
    });
     function callbackFunction(resp){
      formthis.find('label').addClass('apps-craft-subscribed-label');
    }
  });
 }


/*=============================================== 
      15. Skrollr Init
  ================================================*/
var mySkrollr = skrollr.init({
    forceHeight: false,
    easings: {
        easeOutBack: function (p, s) {
            s = 1.70158;
            p = p - 1;
            return (p * p * ((s + 1) * p + s) + 1);
        }
    },
    mobileCheck: function() {
        //hack - forces mobile version to be off
        return false;
    }
});

}); // End Document Ready


$(window).on('resize', function(){
  autoHeight();
}); // End Resize


})(jQuery);