$(document).ready((function(){var e=window.performance.timing,n=-(e.loadEventEnd-e.navigationStart)/1e3%50*100;!function(e,n,i,t){var a=i-n,o=n,s=i>n?1:-1,l=Math.abs(Math.floor(t/a)),d=$(e),r=setInterval((function(){o+=s,$(d).text(o),o==i&&clearInterval(r)}),l)}($(".percentage"),0,100,n),setTimeout((function(){$(".preloader").fadeOut(),$(".cd-transition-layer").addClass("closing").delay(1e3).queue((function(){$(this).removeClass("visible closing opening").dequeue()}))}),n),$(document).on("click",".full-menu .fullmenu-content .page-menu a",(function(){$(".hero-section .navbar-toggler-btn").trigger("click").removeClass("open-btn").addClass("close-btn")}));var i=$(".page-title .title").text();$(".page-title").append("<span></span>"),$(".page-title span").append(i);$(".nav-icon");var t=$(".cd-transition-layer"),a=t.children(),o=$(".full-menu"),s=1.78,l=!1;function d(){var e,n,i=$(window).outerWidth(),t=$(window).outerHeight();i/t>s?e=(n=i)/s:n=(e=1.2*t)*s,a.css({width:25*n+"px",height:e+"px"}),l=!1}function r(){$(".main").css({height:$(window).height()+"px"})}d(),$(window).on("resize",(function(){l||(l=!0,window.requestAnimationFrame?window.requestAnimationFrame(d):setTimeout(d,300))})),$(".hero-section .navbar-toggler-btn").click((function(e){if($("html").css("overflow","hidden"),$(this).hasClass("modal-open")){$(this).addClass("modal-close"),$(this).removeClass("modal-open"),$(this).hasClass("close-btn")&&$(this).removeClass("close-btn"),e.preventDefault(),t.addClass("visible opening");var n=$(".no-cssanimations").length>0?0:600;setTimeout((function(){o.addClass("visible")}),n)}else $(this).hasClass("modal-close")&&($("html").css("overflow-y","auto"),$(this).addClass("modal-open"),$(this).removeClass("modal-close"),e.preventDefault(),t.addClass("closing"),o.removeClass("visible"),a.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",(function(){t.removeClass("closing opening visible"),a.off("webkitAnimationEnd oanimationend msAnimationEnd animationend")})))})),r(),$(window).resize(r)}));