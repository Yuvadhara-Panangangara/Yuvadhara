/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".sticky-wrapper-header").sticky({topSpacing:0});
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if ($.fn.niceScroll) {
        $(".brand-box").niceScroll({
            cursorcolor:"#9b9b9c",
        });	
    }
	
	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
		$('select').niceSelect();
	});	
		
	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.carousel-slider-post');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('.banner-rotator-slider');
	  owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	  });	  
	});
	
	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
	  var owl = $('#product-in-slider');
	  owl.owlCarousel({
		loop: true,
		nav: true,
		margin: 10,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  960: {
			items: 3
		  },
		  1200: {
			items: 4
		  }
		}
	  });
	  owl.on('mousewheel', '.owl-stage', function(e) {
		if (e.deltaY > 0) {
		  owl.trigger('next.owl');
		} else {
		  owl.trigger('prev.owl');
		}
		e.preventDefault();
	  });
	});
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$(window).on('scroll', function (){
        var scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });

      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if ($.validator) {
        $.validator.setDefaults( {
            submitHandler: function () {
                alert( "submitted!" );
            }
        });
        
        $( document ).ready( function () {
            $( "#contact-form" ).validate( {
                rules: {
                    firstname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    lastname: "required",
                    message: "required",
                    agree: "required"
                },
                messages: {
                    firstname: "Please enter your firstname",
                    email: "Please enter a valid email address",
                    lastname: "Please enter your lastname",
                    message: "Please enter your Message",
                    agree: "Please accept our policy"
                },
                errorElement: "div",
                errorPlacement: function ( error, element ) {
                    error.addClass( "help-block" );
                    if ( element.prop( "type" ) === "checkbox" ) {
                        error.insertAfter( element.parent( "input" ) );
                    } else {
                        error.insertAfter( element );
                    }
                },
                highlight: function ( element, errorClass, validClass ) {
                    $( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-error" ).removeClass( "has-success" );
                },
                unhighlight: function (element, errorClass, validClass) {
                    $( element ).parents( ".col-md-4, .col-md-12" ).addClass( "has-success" ).removeClass( "has-error" );
                }
            });
        });
    }
	
	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if (typeof Swiper !== 'undefined') {
        var swiperHero = new Swiper('.heroslider', {
            spaceBetween: 30,
            centeredSlides: true,
            slidesPerView: 'auto',
            paginationClickable: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
        });

        /* Product Filters */
        var swiperFilters = new Swiper('.swiper-product-filters', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            breakpoints: {
                1024: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 30, slidesPerColumn: 1 },
                640: { slidesPerView: 2, spaceBetween: 20, slidesPerColumn: 1 },
                480: { slidesPerView: 1, spaceBetween: 10, slidesPerColumn: 1 }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            }
        });
    }

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if ($.fn.countdown) {
        $('[data-countdown]').each(function () {
            var $this = $(this),
            finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $(this).html(event.strftime(''
                + '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
                + '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
                + '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
                + '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
                + '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
            });
        });
    }
	
	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if ($.fn.slick) {
        $('.deal-slider').slick({
            dots: false,
            infinite: false,
            prevArrow: '.previous-deal',
            nextArrow: '.next-deal',
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true } },
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });

        /* News Slider */
        $('#news-slider').slick({
            dots: false,
            infinite: false,
            prevArrow: '.previous',
            nextArrow: '.next',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true } },
                { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
    }
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if ($.fn.fancybox) {
        $(".fancybox").fancybox({
            maxWidth: 1200,
            maxHeight: 600,
            width: '70%',
            height: '70%',
        });
    }
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     $('#blogCarousel').carousel({
        interval: 5000
     });

    /* Library Search Functionality 
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    const searchInput = document.getElementById('search-input');
    const books = document.querySelectorAll('.book');

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            
            books.forEach(book => {
                const title = book.querySelector('h4').textContent.toLowerCase();
                const author = book.querySelector('p').textContent.toLowerCase();
                
                // Show/hide based on search term. Empty string style allows Flexbox to work correctly.
                if (title.includes(searchTerm) || author.includes(searchTerm)) {
                    book.style.display = ''; 
                } else {
                    book.style.display = 'none';
                }
            });
        });
    }

}); // End of main function

/* dropdown menu start */
$(document).ready(function() {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });
});
/* dropdown menu end */

/* Blog Read More & Share Button Logic */
document.addEventListener('DOMContentLoaded', function() {
  const blogCards = document.querySelectorAll('.blog-card');

  blogCards.forEach(card => {
    const readMoreBtn = card.querySelector('.read-more-btn');
    const expandableText = card.querySelector('.expandable-text');
    const shareBtn = card.querySelector('.share-btn');
    
    // Safety check for blog title element
    const titleEl = card.querySelector('h1');
    const blogTitle = titleEl ? titleEl.textContent : "Blog Post";

    if (readMoreBtn && expandableText) {
      readMoreBtn.addEventListener('click', function() {
        card.classList.toggle('expanded');
        if (card.classList.contains('expanded')) {
          readMoreBtn.textContent = 'Read less';
          expandableText.style.maxHeight = expandableText.scrollHeight + 'px';
        } else {
          readMoreBtn.textContent = 'Read more';
          expandableText.style.maxHeight = '100px';
        }
      });
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
              title: blogTitle,
              text: 'Check out this blog post: ' + blogTitle,
              url: window.location.href
            }).catch(console.error);
        } else {
            alert('Sharing is not supported on your browser. Please copy and paste the URL to share.');
        }
      });
    }
  });
});