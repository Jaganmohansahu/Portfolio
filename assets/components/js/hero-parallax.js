/* let bg = document.getElementById("bg"); */
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let heroText = document.getElementById("hero-text");

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    /* bg.style.top = value * 0.5 + "px"; */
    moon.style.left = "calc(" + -value * 0.5 + "px)";
    mountain.style.top = -value * 0.15 + "px";
    road.style.top = value * 0.2 + "px";
})