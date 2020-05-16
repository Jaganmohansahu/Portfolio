
$(document).ready(function() {
    var width = 100,
        perfData = window.performance.timing,
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = ((EstimatedTime / 1000) % 50) * 100;

    /* Percentage Increment Animation */
    var PercentageID = $(".percentage"),
        start = 0,
        end = 100,
        durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {
        var range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);

        var timer = setInterval(function() {
            current += increment;
            $(obj).text(current);
            /* obj.innerHTML = current; */
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    setTimeout(function() {
        $(".preloader").fadeOut();

        $(".cd-transition-layer")
            .addClass("closing")
            .delay(1000)
            .queue(function() {
                $(this)
                    .removeClass("visible closing opening")
                    .dequeue();
            });
    }, time);

    /* FADE OUT EFFECT WHEN CLICK A LINK */
    $(document).on("click", ".full-menu .fullmenu-content .page-menu a", function() {
        $(".hero-section .navbar-toggler-btn").trigger("click").removeClass("open-btn").addClass("close-btn");
    });

    var paget = $(".page-title .title").text();

    $(".page-title").append("<span></span>");
    $(".page-title span").append(paget);

    var modalTrigger = $(".nav-icon"),
        transitionLayer = $(".cd-transition-layer"),
        transitionBackground = transitionLayer.children(),
        modalWindow = $(".full-menu");

    /* png frame aspect ratio */
    var frameProportion = 1.78,
        /* number of png frames */
        frames = 25,
        resize = false;

    /* set transitionBackground dimentions */
    setLayerDimensions();
    $(window).on("resize", function() {
        if (!resize) {
            resize = true;
            !window.requestAnimationFrame
                ? setTimeout(setLayerDimensions, 300)
                : window.requestAnimationFrame(setLayerDimensions);
        }
    });

    /* open modal window */
    $(".hero-section .navbar-toggler-btn").click(function(event) {
        $("html").css("overflow", "hidden");

        if ($(this).hasClass("modal-open")) {
            $(this).addClass("modal-close");
            $(this).removeClass("modal-open");

            if ($(this).hasClass("close-btn")) {
                $(this).removeClass("close-btn");
            }

            event.preventDefault();
            transitionLayer.addClass("visible opening");
            var delay = $(".no-cssanimations").length > 0 ? 0 : 600;
            setTimeout(function() {
                modalWindow.addClass("visible");
            }, delay);
        } else if ($(this).hasClass("modal-close")) {
            $("html").css("overflow-y", "auto");

            $(this).addClass("modal-open");
            $(this).removeClass("modal-close");

            event.preventDefault();
            transitionLayer.addClass("closing");
            modalWindow.removeClass("visible");
            transitionBackground.one(
                "webkitAnimationEnd oanimationend msAnimationEnd animationend",
                function() {
                    transitionLayer.removeClass("closing opening visible");
                    transitionBackground.off(
                        "webkitAnimationEnd oanimationend msAnimationEnd animationend"
                    );
                }
            );
        }
    });

    function setLayerDimensions() {
        var windowWidth = $(window).outerWidth(),
            windowHeight = $(window).outerHeight(),
            layerHeight,
            layerWidth;

        if (windowWidth / windowHeight > frameProportion) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion;
        } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion;
        }

        transitionBackground.css({
            width: layerWidth * frames + "px",
            height: layerHeight + "px"
        });

        resize = false;
    }


    /*--------------------------------------------------
   Hero Section Height
  ---------------------------------------------------*/

    function homeh() {
        var hometext = $(".main");

        hometext.css({
            height: $(window).height() + "px"
        });
    }

    homeh();
    $(window).resize(homeh);

    $(".page-menu li:not(.social) a, .portfolio_filter ul li a").append(
        "<span></span>"
    );
    /*   $(".nav-icon").on("click", function () {
          $(this).toggleClass("modal-close");
      }); */
});