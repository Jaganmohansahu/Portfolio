$("document").ready(function () {
    let bubbles = "";
    let noOfBubbles = 0;

    /* Set the no of bubbles according to the window width */
    const windowWidth = $(window).innerWidth();

    if(windowWidth >= 1200) {
        noOfBubbles = 150;
    } else if(windowWidth >= 992) {
        noOfBubbles = 120;
    } else if(windowWidth >= 768) {
        noOfBubbles = 90;
    } else if(windowWidth >= 600) {
        noOfBubbles = 70;
    } else {
        noOfBubbles = 30;
    }

    for (let i = 0; i < noOfBubbles; i++) {
        bubbles += '<div class="bubble" style="--size:' + `${2 + Math.random() * 4}` + 'rem; --distance:' + `${6 + Math.random() * 4}` + 'rem; --position:' + `${-5 + Math.random() * 110}` + '%; --time:' + `${2 + Math.random() * 2}` + 's; --delay:' + `${-1 * (2 + Math.random() * 2)}` + 's;"></div>';
    }
    $(".bubbles").prepend(bubbles);
});