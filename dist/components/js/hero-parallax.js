let moon=document.getElementById("moon"),mountain=document.getElementById("mountain"),road=document.getElementById("road"),heroText=document.getElementById("hero-text");window.addEventListener("scroll",(function(){let e=window.scrollY;moon.style.left="calc("+.5*-e+"px)",mountain.style.top=.15*-e+"px",road.style.top=.2*e+"px"}));