/*---------------------------------------------------------------------
    File Name: custom.js
    Description: Combined site logic and Library Tab Search
---------------------------------------------------------------------*/

$(function () {
    
    "use strict";
    
    /* 1. Preloader
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
    
    /* 2. Menu & Sticky
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        if ($.fn.meanmenu) {
            $('header nav').meanmenu();
        }
        if ($.fn.sticky) {
            $(".sticky-wrapper-header").sticky({topSpacing:0});
        }
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* 3. Owl Carousels (Post, Banner, Product)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function() {
        if ($.fn.owlCarousel) {
            // Post Slider
            $('.carousel-slider-post').owlCarousel({
                items: 1, loop: true, margin: 10, autoplay: true, autoplayTimeout: 3000
            });
            
            // Banner Rotator
            $('.banner-rotator-slider').owlCarousel({
                items: 1, loop: true, margin: 10, nav: true, dots: false,
                navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                autoplay: true, autoplayTimeout: 3000
            });

            // Product Slider
            var productSlider = $('#product-in-slider');
            productSlider.owlCarousel({
                loop: true, nav: true, margin: 10,
                navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                responsive: { 0: {items: 1}, 600: {items: 2}, 960: {items: 3}, 1200: {items: 4} }
            });
        }
    });

    /* 4. Scroll to Top
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(window).on('scroll', function (){
        if ($(window).scrollTop() >= 100){
            $("#back-to-top").addClass('b-show_scrollBut');
        } else {
            $("#back-to-top").removeClass('b-show_scrollBut');
        }
    });

    $("#back-to-top").on("click", function(){
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

    /* 5. Library Search Logic (PAPERBACK & E-BOOKS)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function() {
        // This listens to any search input with the class 'lib-search'
        $('.lib-search').on('input', function() {
            const searchTerm = $(this).val().toLowerCase();
            // It finds the target list (paper-list or ebook-list) from the HTML attribute
            const targetListId = $(this).data('target');
            const books = $('#' + targetListId + ' .book');

            books.each(function() {
                const title = $(this).find('h4').text().toLowerCase();
                const author = $(this).find('p').text().toLowerCase();
                
                // Matches title or author
                if (title.includes(searchTerm) || author.includes(searchTerm)) {
                    $(this).show(); 
                } else {
                    $(this).hide();
                }
            });
        });
    });

    /* 6. Blog Read More & Share Logic
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function() {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            const readMoreBtn = card.querySelector('.read-more-btn');
            const expandableText = card.querySelector('.expandable-text');
            const shareBtn = card.querySelector('.share-btn');

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
                            title: 'Blog Post',
                            url: window.location.href
                        }).catch(console.error);
                    } else {
                        alert('Sharing not supported on this browser.');
                    }
                });
            }
        });
    });

}); // End of File


/*Added for the submenu items on the menu bar opens only on click and not on hovering
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
$(document).ready(function() {
    // Target only the submenu toggle links
    $('.dropdown-submenu a.dropdown-toggle').on("click", function(e) {
        var $subMenu = $(this).next(".dropdown-menu");
        var $parentLi = $(this).parent(".dropdown-submenu");

        // Toggle the 'open' class on the clicked submenu
        $parentLi.toggleClass('open');

        // Prevent other submenus at the same level from staying open (Optional)
        $parentLi.siblings().removeClass('open');

        // CRITICAL: Prevent the main dropdown from closing when this is clicked
        e.stopPropagation();
        e.preventDefault();
    });

    // Reset submenus when the main dropdown is closed
    $('.dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('.dropdown-submenu').removeClass('open');
    });
});


/*Added for the video play and pause button in image gallery custom videos
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function toggleVideo(wrapper) {
    const video = wrapper.querySelector('video');
    
    if (video.paused) {
        // Pause any other playing videos first (optional)
        document.querySelectorAll('video').forEach(v => {
            v.pause();
            v.parentElement.classList.remove('playing');
        });

        // Play this video
        video.play();
        wrapper.classList.add('playing');
    } else {
        // Pause this video
        video.pause();
        wrapper.classList.remove('playing');
    }
}

// Reset the play button when the video ends
document.querySelectorAll('video').forEach(video => {
    video.onended = function() {
        this.parentElement.classList.remove('playing');
    };
});