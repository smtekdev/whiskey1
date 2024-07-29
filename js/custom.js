// JavaScript Document

$(document).ready(function(){
    $('#fil-group-bn .comonfli').click(function(){
      $('.comonfli').removeClass("active-new2");
      $(this).addClass("active-new2");
  });
});
$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('.mn-head').addClass('fixed-menu');
          } else {
              $('.mn-head').removeClass('fixed-menu');
          }
      });
  });
$(document).ready(function(){
    $('.ps-sild').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
		dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:4
            }
        }
    })


    $('.wine-slider').owlCarousel({
      loop: true,
      autoplay:true,
      margin: 25,
      nav: false,
      dots:true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items:1
              },
              1000: {
                  items:4
              }
          }
      })

$('.best-sl-m').owlCarousel({
        
		autoplay:true,
      margin:30,
        nav: false,
		dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:3
            }
        }
    })

  $('.best-sl-m2').owlCarousel({
      
    autoplay:true,
    margin:25,
    loop:true,
    nav: true,
    dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            768: {
              items:2
            },
            1000: {
                items:4
            }
        }
    })

	$('.news-slid').owlCarousel({
        
		autoplay:true,
        nav: false,
		margin: 20,
		dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            768: {
              items:2
            },
            1000: {
                items:3
            }
        }
    })

    $('.team-slid').owlCarousel({
        
        autoplay:true,
        loop:true,
         nav: true,
        margin: 20,
        dots:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items:1
                },
                1000: {
                    items:4
                }
            }
    })
});


// price


function getVals(){
	// Get slider values
	let parent = this.parentNode;
	let slides = parent.getElementsByTagName("input");
	  let slide1 = parseFloat( slides[0].value );
	  let slide2 = parseFloat( slides[1].value );
	// Neither slider will clip the other, so make sure we determine which is larger
	if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
	
	let displayElement = parent.getElementsByClassName("rangeValues")[0];
		displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
	// Initialize Sliders
	let sliderSections = document.getElementsByClassName("range-slider");
		for( let x = 0; x < sliderSections.length; x++ ){
		  let sliders = sliderSections[x].getElementsByTagName("input");
		  for( let y = 0; y < sliders.length; y++ ){
			if( sliders[y].type ==="range" ){
			  sliders[y].oninput = getVals;
			  // Manually trigger event first time to display values
			  sliders[y].oninput();
			}
		  }
		}
  }
//-----JS for Price Range slider ends-----


// more bn js 

$(document).ready(function () {
    
   
    $('#more-link').click(function () {
      $('#more-div-text').slideToggle("slow");
	  $('#more-link').hide();
    });

	$('#more-link2').click(function () {
		$('#more-div-text2').slideToggle("slow");
		$('#more-link2').hide();
	  });

	$('#more-link3').click(function () {
		$('#more-div-text3').slideToggle("slow");
		$('#more-link3').hide();
	  });
});


// products list grid js
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    $('#list').click(function(event){event.preventDefault();$('#products .item').removeClass('grid-group-item');});
  });
  
$(document).ready(function(){
$('.listed-bn ul li a').click(function(){
    $('.listed-bn li a').removeClass("active");
    $(this).addClass("active");
});
});

// wish list js

$(document).ready(function(){
	$(".comon-likke").click(function(){
		$(".comon-likke").toggleClass("short-link");
	});
});

// pagination

$(document).ready(function () {
	var items = $(".list-wrapper .list-item");
		var numItems = items.length;
		var perPage = 8;
	
		items.slice(perPage).hide();
	
		$('#pagination-container').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).fadeIn(700);
			}
		});
		
});


//  size js
$(document).ready(function () {
  var selector = '.sixe-menu-q li';
  
    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
  });


// products slide

$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});


// edit checkout

var form_ele = '.form';

// make eveything disabled
var disableFormEdit = function(selector){	
  $(selector).removeClass('form--enabled').addClass('form--disabled');
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button').prop('disabled', true);
}


// make eveything enabled
var enableFormEdit = function(selector){	
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button ').prop('disabled', false);
  $(selector).removeClass('form--disabled').addClass('form--enabled');
}


disableFormEdit(form_ele);


$('.js-toggleForm').click(function(){
   // get the status of form
  var form_status = $(form_ele).hasClass('form--disabled') ? 'disabled' : 'enabled';
  
  // check if disabled or enabled
  switch (form_status){
    case 'disabled':
      enableFormEdit(form_ele);
      $(this).text('Save')
      break;
    case 'enabled':
      disableFormEdit(form_ele);
      $(this).text('Edit')
      break;
  }
});

//  bank js
$(document).ready(function(){
  $("#customRadio1").click(function(){
    $("#ac-2").hide();
    $("#ac-1").show();
  });

   $("#customRadio2").click(function(){
    $("#ac-1").hide();
    $("#ac-2").show();
  });
});

// ------------step-wizard-------------
 // admision form js
 jQuery(document).ready(function() {
	// click on next button
	jQuery('.form-wizard-next-btn').click(function() {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();

			if( thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function() {
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev =jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		jQuery(document).find('.wizard-fieldset').each(function(){
			if(jQuery(this).hasClass('show')){
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if(jQuery(this).attr('data-attr') == formAtrr){
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});


// rating js 


$(document).ready(function () {
	$(".star label").click(function(){
	  $(this).parent().find("label").css({"background-color": "#a2be2d"});
	  $(this).css({"background-color": "#a2be2d"});
	  $(this).nextAll().css({"background-color": "#a2be2d"});
	});
	$(".star label").click(function(){
	  $(this).parent().find(".star label").css({"color": "#bbb"});
	  $(this).css({"color": "#a2be2d"});
	  $(this).nextAll().css({"color": "#a2be2d"});
	  $(this).css({"background-color": "transparent"});
	  $(this).nextAll().css({"background-color": "transparent"});
	});
});
// quantity js

// quantity
(function () {
    "use strict";
    var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
      return function (arg) {
        if (this.length > 1) {
          this.each(function () {
            var $this = $(this);
  
            if (!$this.data(ident)) {
              $this.data(ident, func($this, arg));
            }
          });
  
          return this;
        } else if (this.length === 1) {
          if (!this.data(ident)) {
            this.data(ident, func(this, arg));
          }
  
          return this.data(ident);
        }
      };
    });
  })();
  
  (function () {
    "use strict";
    function Guantity($root) {
      const element = $root;
      const quantity = $root.first("data-quantity");
      const quantity_target = $root.find("[data-quantity-target]");
      const quantity_minus = $root.find("[data-quantity-minus]");
      const quantity_plus = $root.find("[data-quantity-plus]");
      var quantity_ = quantity_target.val();
      $(quantity_minus).click(function () {
        quantity_target.val(--quantity_);
      });
      $(quantity_plus).click(function () {
        quantity_target.val(++quantity_);
      });
    }
    $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
    $("[data-quantity]").Guantity();
  })();
  

// fiter mobile js

jQuery(function($){
    // Filter Function Triggers
    filterTrigger.desktopFilter(".filt-container");
    filterTrigger.mobileFilter("#mobile-filter", ".filt-container");
  });
       
  // FUNCTION FOR ALL FILTERS
  var filterTrigger = {
    desktopFilter: function(container) {
        if( $(container).length > 0 ) {
            var $container = $(container);
            var $filter = $(".filter-list").find("li").first().data("filter");
            
            var mixer = mixitup($container, {
                load: {
                  filter: $filter
                }
            });
            
            $(".filter").on("click", function() {
                if( $("#mobile-filter").length > 0 ) {
                    $("#mobile-filter").val($(this).data("filter"));
                }
            });
        }
    },
    
    mobileFilter: function(filter, container) {
        if( $(filter).length > 0 && $(container).length > 0 ) {
            var $filter = $(filter),
              $container = $(container);
  
            $container.mixItUp();
  
            $filter.on('change', function(){
                $container.mixItUp('filter', this.value);
            });
            
            $(window).resize(function() {
                
            });
        }
    }
  }
  
  
  // filter mobile js ends
  