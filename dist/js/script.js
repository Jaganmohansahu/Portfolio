$("#contact form").hover((function(){$("#contact .face").tooltip("toggle")})),$(".form-control").focus((function(){$("#contact .face").tooltip("hide")})),$("#about img").hover((function(){$("#about img").tooltip("toggle")})),$(".navbar-brand").hover((function(){$(".navbar-brand").tooltip("toggle")})),$(".navbar-toggler-btn").on("click",(function(){$(".animated-toggler-btn").toggleClass("open")}));let aosObj={};function updateDarkTheme(){document.documentElement.style.setProperty("--text-color","#DEDAD6"),$("#stylish-theme-label").addClass("active"),$("#special-theme-label").removeClass("active"),$("#elegant-theme-label").removeClass("active"),$("#stylish-theme").prop("checked",!0),Chart.defaults.global.defaultFontColor=getComputedStyle(document.documentElement).getPropertyValue("--text-color"),frontendChart.update(),backendChart.update()}aosObj.easing="ease-out-back",aosObj.duration=800,aosObj.delay=300,aosObj.once=!0,$(window).innerWidth()<768&&($('[data-aos|="fade"]').attr("data-aos","fade-up"),$('[data-aos|="flip-down"]').attr("data-aos","fade-up")),AOS.init(aosObj),$("#aos-input").change((function(){this.checked?($("#aos-status").text("(always)"),aosObj.once=!1):($("#aos-status").text("(once)"),aosObj.once=!0),AOS.init(aosObj)})),$(window).on("resize",(function(){AOS.refresh()})),$("#font-dropdown").change((function(){var e=$("#font-dropdown").val();"cursive"===e?document.documentElement.style.setProperty("--font-family","cursive"):($("head #font").attr("href","https://fonts.googleapis.com/css2?family="+e+":ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),document.documentElement.style.setProperty("--font-family",'"'+e+'"'))})),$("#font-italic").change((function(){this.checked?document.documentElement.style.setProperty("--font-style","italic"):document.documentElement.style.setProperty("--font-style","unset")})),$("#color-val").html(getComputedStyle(document.documentElement).getPropertyValue("--theme-color")),$("#color-val").css("color",getComputedStyle(document.documentElement).getPropertyValue("--theme-color")),$("#color-val").click((function(){$("#theme-color-chooser").trigger("click")})),$("#theme-color-chooser").change((function(){$("#color-val").html($("#theme-color-chooser").val()),$("#color-val").css("color",$("#theme-color-chooser").val()),document.documentElement.style.setProperty("--theme-color",$("#theme-color-chooser").val())})),$("#dark-navbar").change((function(){$("#navbar").removeAttr("style"),$("#navbar").hasClass("navbar-light")&&($("#navbar").removeClass("navbar-light"),$("#navbar").addClass("navbar-dark").addClass("stylish-color"))})),$("#light-navbar").change((function(){$("#navbar").removeAttr("style"),$("#navbar").hasClass("navbar-dark")&&($("#navbar").removeClass("navbar-dark").removeClass("stylish-color"),$("#navbar").addClass("navbar-light").addClass("white"))})),$("#custom-navbar").click((function(){$("#navbar-color-chooser").trigger("click")})),$("#navbar-color-chooser").change((function(){$("#navbar").hasClass("stylish-color")?($("#navbar").removeClass("stylish-color"),$("#custom-navbar-label").removeClass("btn-light-blue").css("background-color",$("#navbar-color-chooser").val())):$("#navbar").hasClass("white")?($("#navbar").removeClass("white"),$("#custom-navbar-label").removeClass("btn-light-blue").css("background-color",$("#navbar-color-chooser").val())):$("#custom-navbar-label").css("background-color",$("#navbar-color-chooser").val()),$("#navbar").css("background-color",$("#navbar-color-chooser").val())})),$("#dark-scrollbar").change((function(){$("#scrollbar").attr("href","assets/components/css/dark-scrollbar.css")})),$("#light-scrollbar").change((function(){$("#scrollbar").attr("href","assets/components/css/white-scrollbar.css")})),$("#gradient-scrollbar").change((function(){$("body").append('<script src="assets/components/js/rainbow-scrollbar.js"><\/script>'),$("#scrollbar").attr("href","assets/components/css/rainbow-scrollbar.css")})),$("#default-scrollbar").change((function(){$("#scrollbar").removeAttr("href")})),$("#default-theme").is(":checked")&&($("#theme-btn-group-container").hide(),document.documentElement.style.setProperty("--background-color","#ffffff")),$("#default-theme").change((function(){$("#theme-btn-group-container").hide(),document.documentElement.style.setProperty("--background-color","#ffffff"),document.documentElement.style.setProperty("--text-color","#212529"),Chart.defaults.global.defaultFontColor=getComputedStyle(document.documentElement).getPropertyValue("--text-color"),frontendChart.update(),backendChart.update()})),$("#dark-theme").change((function(){$("#theme-btn-group-container").show(),$("#stylish-theme-label").css("background-color","#4B515D"),$("#special-theme-label").css("background-color","#37474F"),$("#elegant-theme-label").css("background-color","#2E2E2E"),document.documentElement.style.setProperty("--background-color","#4B515D"),updateDarkTheme()})),$("#darker-theme").change((function(){$("#theme-btn-group-container").show(),$("#stylish-theme-label").css("background-color","#3E4551"),$("#special-theme-label").css("background-color","#263238"),$("#elegant-theme-label").css("background-color","#212121"),document.documentElement.style.setProperty("--background-color","#3E4551"),updateDarkTheme()})),$("#stylish-theme").change((function(){document.documentElement.style.setProperty("--background-color",$("#stylish-theme-label").css("background-color")),document.documentElement.style.setProperty("--text-color","#DEDAD6")})),$("#special-theme").change((function(){document.documentElement.style.setProperty("--background-color",$("#special-theme-label").css("background-color")),document.documentElement.style.setProperty("--text-color","#DEDAD6")})),$("#elegant-theme").change((function(){document.documentElement.style.setProperty("--background-color",$("#elegant-theme-label").css("background-color")),document.documentElement.style.setProperty("--text-color","#DEDAD6")})),$(".count-particles").hide(),$("#particle-stats").change((function(){this.checked?($(".count-particles").show(),$("body").append('<script src="assets/components/js/particles-stats.js" id="snow-particles"><\/script>')):($("#snow-particles").remove(),$("#particles-monitor").remove(),$(".count-particles").hide())}));