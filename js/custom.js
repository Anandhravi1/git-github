/*$(".form-group input.form-control").on("focus blur", function() {
    if ($(this).val() == "") {
        $(this)
            .parents(".form-group")
            .toggleClass("focused");
    }
});

$(".form-group textarea.form-control").on("focus blur", function() {
    if ($(this).val() == "") {
        $(this)
            .parents(".form-group")
            .toggleClass("focused");
    }
});*/


$(function() {
    var lis = $("#words-wrapper > li"),
        currentHighlight = 0;
    N = 2; //interval in seconds
    setInterval(function() {
        currentHighlight = (currentHighlight + 1) % lis.length;
        lis.removeClass('highlighted').eq(currentHighlight).addClass('highlighted');
    }, N * 1000);
});




$('.logo-container').hover(function() {
    $(".logo-container").removeClass('active');
    $(this).toggleClass('active');
    $(".logo-content").removeClass('show');
    $(".logo-content").eq($('.logo-container').index(this)).addClass('show');
});







$('.author-detail-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.author-slider'
});



$('.author-slider').slick({
    slidesToShow: 4,
    adaptiveHeight: false,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    asNavFor: '.author-detail-list',
    cssEase: 'linear',
    respondTo: 'window',
    nextArrow: '<i class="fa fa-arrow-right next"></i>',
    prevArrow: '<i class="fa fa-arrow-left prev"></i>',

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.product-slider-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.year-slider-list'
});




$('.year-slider-list').slick({
    slidesToShow: 4,
    adaptiveHeight: false,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    asNavFor: '.product-slider-list',
    cssEase: 'linear',
    respondTo: 'window',
    nextArrow: '<i class="fa fa-arrow-right next"></i>',
    prevArrow: '<i class="fa fa-arrow-left prev"></i>',

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



$('.news-right').slick({
    slidesToShow: 1,
    adaptiveHeight: false,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    respondTo: 'window',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

/********** ziffity-landing ***************** */

$('.content').slick({
    slidesToShow: 2,
    adaptiveHeight: false,
    slidesToScroll: 2,
    autoplay:false,
    dots: true,
    infinite: true,
    arrows:false,
    cssEase: 'linear',
    respondTo: 'window',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.content-two').slick({
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay:false,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows:false,
    cssEase: 'linear',
    respondTo: 'window',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.sponsors').slick({
    slidesToShow: 13,
    adaptiveHeight: false,
    slidesToScroll: 1,
   dots:false,
    infinite: true,
    arrows:false,
    autoplay: false,  
    autoplaySpeed:0,  
    cssEase: 'linear',
    respondTo: 'window',
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 10,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots:false                
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

/******* video ****** */
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
function setHalfVolume() { 

    if(myVideo.volume == 0) {
      myVideo.volume=1;
      document.getElementsByClassName("mute-icon")[0].style.display="none";
    }
    else {
      myVideo.volume=0;
    }
  } 
  $('.video-part').click(function(){
      $(this).toggleClass("play-pause");
  });
  $('.mute-icon').click(function() {
    $(this).hide();
    $('.sound-icon').show();

});
$('.sound-icon').click(function() {
    $(this).hide();
    $('.mute-icon').show();

});

$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: 769,        // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                     // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
 });

 /********** smooth scrolling * */

 $('a[href*="#"]').on('click', function (e) {
	e.preventDefault();
     console.log("welcome");
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1000);
});