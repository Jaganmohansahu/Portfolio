/**
 * Display Greeting Message
 */
var today = new Date()
var currHr = today.getHours()
var greetingTxt = "";

if (currHr < 12) {
    greetingTxt = "Good Morning!!";
} else if (currHr < 18) {
    greetingTxt = "Good Afternoon!!";
} else {
    greetingTxt = "Good Evening!!";
}

document.getElementById("greeting").innerText = greetingTxt;