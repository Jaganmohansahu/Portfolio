function smoothScroll(target, duration) {
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset || window.scrollY;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function loop(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easeOutCubic(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(loop);
    }

    function easeOutCubic(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    };
    requestAnimationFrame(loop);
}

/* Smooth scroll animation for nav bar links */
document.getElementById("home-link").addEventListener("click", function() {
    smoothScroll("home", 2000);
});

document.getElementById("about-link").addEventListener("click", function(e) {
    smoothScroll("about", 2000);
});

document.getElementById("skills-link").addEventListener("click", function(e) {
    smoothScroll("skills", 2000);
});

document.getElementById("portfolio-link").addEventListener("click", function(e) {
    smoothScroll("portfolio", 2000);
});

document.getElementById("contact-link").addEventListener("click", function(e) {
    smoothScroll("contact", 2000);
});

/* Smooth scroll animation for modal links */
document.getElementById("home-link-modal").addEventListener("click", function() {
    smoothScroll("home", 2000);
});

document.getElementById("about-link-modal").addEventListener("click", function(e) {
    smoothScroll("about", 2000);
});

document.getElementById("skills-link-modal").addEventListener("click", function(e) {
    smoothScroll("skills", 2000);
});

document.getElementById("portfolio-link-modal").addEventListener("click", function(e) {
    smoothScroll("portfolio", 2000);
});

document.getElementById("contact-link-modal").addEventListener("click", function(e) {
    smoothScroll("contact", 2000);
});
