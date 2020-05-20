/**
 * Globals
 */
var mdtoastObj = { interactionTimeout: 3000, actionText: "OK", interaction: true };

var aosObj = { easing: 'ease-out-back', duration: 800, delay: 300, once: true };

var preferenceObj = {};

var textColor = '#DEDAD6';

var stylishThemeDark = '#4B515D';
var stylishThemedarker = '#3E4551';

var specialThemeDark = '#37474F';
var specialThemedarker = '#263238';

var elegantThemeDark = '#2E2E2E';
var elegantThemedarker = '#212121';

/* Confirmation message to store user preference for a new user */
$('#show-bottom-modal').click(function() {
    let newUser = false;
    if (localStorage.getItem('preferences') === null) {
        newUser = true;
    }

    if (newUser) {
        setTimeout(function() {
            $('#frameModalBottom').modal();
        }, 1000);
    } else {
        $('#save-preferences').trigger('click');
    }
});

/* Save user preferences in local storage */
$('#save-preferences').click(function() {
    let selectedFontFamily = $('#font-dropdown').val();
    let selectedFontItalic = $('#font-italic').is(":checked");
    let selectedTheme = $("input[name='theme-radio-group']").filter(":checked").attr("id");
    let selectedDarkMode = $("input[name='theme-btn-group']").filter(":checked").attr("id");
    let selectedColor = $('#color-val').text();
    let selectedScrollbar = $("input[name='scrollbar-btn-group']").filter(":checked").attr("id");
    let selectedNavbar = $("input[name='navbar-btn-group']").filter(":checked").attr("id");
    let selectedCustomNavbar = "";
    if (selectedNavbar === "custom-navbar") {
        selectedCustomNavbar = $('#navbar-color-chooser').val();
    }
    let selectedParticleStats = $('#particle-stats').is(":checked");
    let selectedAOS = $('#aos-input').is(":checked");

    preferenceObj = {
        font: selectedFontFamily,
        italic: selectedFontItalic,
        theme: selectedTheme,
        darkMode: selectedDarkMode,
        color: selectedColor,
        scrollbar: selectedScrollbar,
        navbar: selectedNavbar,
        customNavbar: selectedCustomNavbar,
        showParticleStats: selectedParticleStats,
        animateOnce: selectedAOS
    };

    localStorage.setItem('preferences', JSON.stringify(preferenceObj));
    mdtoast('Your preferences have been saved.', mdtoastObj);
});

$('#preference-decline').click(function() {
    mdtoast('Preferences could not be saved.', { type: mdtoast.WARNING });
});

/* Initially hide the element */
$('.count-particles').hide();

/**
 * Toolltip
 */
$("#contact form").hover(
    function() {
        $("#contact .face").tooltip("toggle");
    }
);

$(".form-control").focus(
    function() {
        $("#contact .face").tooltip("hide");
    }
);

$("#about img").hover(
    function() {
        $("#about img").tooltip("toggle");
    }
);

$(".navbar-brand").hover(
    function() {
        $(".navbar-brand").tooltip("toggle");
    }
);

/**
 * Navbar toggler button
 */
$('.navbar-toggler-btn').on('click', function() {
    $('.animated-toggler-btn').toggleClass('open');
});

/**
 * AOS
 */
/* Change to fade up animation in small devices */
if ($(window).innerWidth() < 768) {
    $('[data-aos|="fade"]').attr('data-aos', 'fade-up');
    $('[data-aos|="flip-down"]').attr('data-aos', 'fade-up');
}

AOS.init(aosObj);

$('#aos-input').change(function() {
    setAOS(this.checked, aosObj);
});

$(window).on('resize', function() {
    AOS.refresh();
});

/**
 * Font settings
 */
$('#font-dropdown').change(function() {
    setFontFamily($('#font-dropdown').val());
    // mdtoast($('#font-dropdown').val() + " font applied.", mdtoastObj);
});

$('#font-italic').change(function() {
    setItalicFont(this.checked);
    // mdtoast("Font-style set to Italic.", mdtoastObj);
});

/**
 * Color settings
 */
$('#color-val').html(getComputedStyle(document.documentElement).getPropertyValue('--theme-color'));
$('#color-val').css("color", getComputedStyle(document.documentElement).getPropertyValue('--theme-color'));

$('#color-val').click(function() {
    $('#theme-color-chooser').trigger("click");
});

$('#theme-color-chooser').change(function() {
    setColor($('#theme-color-chooser').val());
    // mdtoast($('#theme-color-chooser').val() + ' color applied.', mdtoastObj);
});

/**
 * Navbar settings
 */
$('#dark-navbar').change(function() {
    setDarkNavbar();
    // mdtoast('Dark theme applied to the navigation bar.', mdtoastObj);
});

$('#light-navbar').change(function() {
    setLightNavbar();
    // mdtoast('Light theme applied to the navigation bar.', mdtoastObj);
});

$('#custom-navbar').change(function() {
    $('#navbar-color-chooser').click();
});

$('#navbar-color-chooser').change(function() {
    setCustomNavbar($('#navbar-color-chooser').val());
    // mdtoast(selectedNavbarCustomTheme + ' theme applied to the navigation bar.', mdtoastObj);
});

/**
 * Scrollbar settings
 */
$('#dark-scrollbar').change(function() {
    setDarkScrollbar();
    // mdtoast('Dark scrollbar theme applied.', mdtoastObj);
});

$('#light-scrollbar').change(function() {
    setLightScrollbar();
    // mdtoast('Light scrollbar theme applied.', mdtoastObj);
});

$('#gradient-scrollbar').change(function() {
    setGradientScrollbar();
    // mdtoast('Gradient scrollbar theme applied.', mdtoastObj);
});

$('#default-scrollbar').change(function() {
    setDefaultScrollbar();
    // mdtoast('Default scrollbar theme applied.', mdtoastObj);
});

/**
 * Theme settings
 */
if ($('#default-theme').is(':checked')) {
    $('#theme-btn-group-container').hide();
    document.documentElement.style.setProperty('--background-color', '#ffffff');
}

/* Radio button events */
$('#default-theme').change(function() {
    setDefaultTheme();
    // mdtoast('Default theme applied.', mdtoastObj);
});

$('#dark-theme').change(function() {
    setDarkTheme();
    // mdtoast('Stylish theme applied.', mdtoastObj);
});

$('#darker-theme').change(function() {
    setDarkerTheme();
    // mdtoast('Stylish theme applied.', mdtoastObj);
});

/* Button group events */
$('#stylish-theme').change(function() {
    setStylishTheme();
    // mdtoast('Stylish theme applied.', mdtoastObj);
});

$('#special-theme').change(function() {
    setSpecialTheme();
    // mdtoast('Special theme applied.', mdtoastObj);
});

$('#elegant-theme').change(function() {
    setElegantTheme();
    // mdtoast('Elegant theme applied.', mdtoastObj);
});

/**
 * Particle stats settings
 */
$('#particle-stats').change(function() {
    setParticleStats(this.checked);
});

/**
* If user prefernces found apply it
*/
if (localStorage.getItem('preferences') != null) {
    preferenceObj = JSON.parse(localStorage.getItem('preferences'));

    /* Font family */
    $('#font-dropdown').val(preferenceObj.font);
    setFontFamily(preferenceObj.font);

    /* Italic font */
    $('#font-italic').prop('checked', preferenceObj.italic);
    setItalicFont(preferenceObj.italic);

    $('#' + preferenceObj.theme).click();

    if (preferenceObj.theme != 'default-theme') {
        $('#' + preferenceObj.darkMode).click();
    }

    setColor(preferenceObj.color);

    $('#' + preferenceObj.scrollbar).click();

    if (preferenceObj.customNavbar != '') {
        setCustomNavbar(preferenceObj.customNavbar);
        $('#custom-navbar-label').addClass('active');
        $('#custom-navbar-label').prop("checked", true);

    } else {
        $('#' + preferenceObj.navbar).click();
    }

    /* AOS */
    $('#aos-input').prop('checked', preferenceObj.animateOnce);
    setAOS(preferenceObj.animateOnce, aosObj);

    /* Particle stats */
    $('#particle-stats').prop('checked', preferenceObj.showParticleStats);
    setParticleStats(preferenceObj.showParticleStats);
}

function setFontFamily(selectedFont) {
    if (selectedFont === "cursive") {
        document.documentElement.style.setProperty('--font-family', 'cursive');
    } else {
        $('head #font').attr("href", "https://fonts.googleapis.com/css2?family=" + selectedFont + ":ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
        document.documentElement.style.setProperty('--font-family', '"' + selectedFont + '"');
    }
}

function setItalicFont(isItalic) {
    if (isItalic) {
        document.documentElement.style.setProperty('--font-style', 'italic');
    } else {
        document.documentElement.style.setProperty('--font-style', 'unset');
    }
}

function setDefaultTheme() {
    $('#theme-btn-group-container').hide();
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#212529');
    Chart.defaults.global.defaultFontColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    frontendChart.update();
    backendChart.update();
}

function setDarkTheme() {
    $('#theme-btn-group-container').show();
    $('#stylish-theme-label').css("background-color", stylishThemeDark);
    $('#special-theme-label').css("background-color", specialThemeDark);
    $('#elegant-theme-label').css("background-color", elegantThemeDark);
    /* Set stylish theme after selecting dark mode */
    document.documentElement.style.setProperty('--background-color', stylishThemeDark);
    updateDarkTheme();
}

function setDarkerTheme() {
    $('#theme-btn-group-container').show();
    $('#stylish-theme-label').css("background-color", stylishThemedarker);
    $('#special-theme-label').css("background-color", specialThemedarker);
    $('#elegant-theme-label').css("background-color", elegantThemedarker);
    /* Set stylish dark theme after selecting darker mode */
    document.documentElement.style.setProperty('--background-color', stylishThemedarker);
    updateDarkTheme();
}

function updateDarkTheme() {
    document.documentElement.style.setProperty('--text-color', textColor);
    $('#stylish-theme-label').addClass('active');
    $('#special-theme-label').removeClass('active');
    $('#elegant-theme-label').removeClass('active');
    $('#stylish-theme').prop("checked", true);
    Chart.defaults.global.defaultFontColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    frontendChart.update();
    backendChart.update();
}

function setStylishTheme() {
    document.documentElement.style.setProperty('--background-color', $('#stylish-theme-label').css("background-color"));
    document.documentElement.style.setProperty('--text-color', textColor);
}

function setSpecialTheme() {
    document.documentElement.style.setProperty('--background-color', $('#special-theme-label').css("background-color"));
    document.documentElement.style.setProperty('--text-color', textColor);
}

function setElegantTheme() {
    document.documentElement.style.setProperty('--background-color', $('#elegant-theme-label').css("background-color"));
    document.documentElement.style.setProperty('--text-color', textColor);
}

function setColor(selectedTheme) {
    $('#color-val').html(selectedTheme);
    $('#color-val').css("color", selectedTheme);
    document.documentElement.style.setProperty('--theme-color', selectedTheme);
}

function setLightScrollbar() {
    $('#scrollbar').attr("href", "components/css/white-scrollbar.css");
}

function setDarkScrollbar() {
    $('#scrollbar').attr("href", "components/css/dark-scrollbar.css");
}

function setGradientScrollbar() {
    $.getScript('components/js/rainbow-scrollbar.js')
    .done(function(script, textStatus) {
        $('#scrollbar').attr("href", "components/css/rainbow-scrollbar.css");
    })
    .fail(function(jqxhr, settings, exception) {
        mdtoast('Unable to set gradient scrollbar.', { type: mdtoast.WARNING });
    });    
}

function setDefaultScrollbar() {
    $('#scrollbar').removeAttr("href");
}

function setLightNavbar() {
    $('#navbar').removeAttr("style");
    $('#navbar').addClass('navbar-light');
    $('#navbar').addClass('white');
    $('#navbar').removeClass('navbar-dark');
    $('#navbar').removeClass('stylish-color');
}

function setDarkNavbar() {
    $('#navbar').removeAttr("style");
    $('#navbar').removeClass('navbar-light');
    $('#navbar').removeClass('white');
    $('#navbar').addClass('navbar-dark');
    $('#navbar').addClass('stylish-color');
}

function setCustomNavbar(selectedNavbarCustomTheme) {
    if ($('#navbar').hasClass('stylish-color')) {
        $('#navbar').removeClass('stylish-color');
        $('#custom-navbar-label').removeClass('btn-light-blue').css("background-color", selectedNavbarCustomTheme);
    } else if ($('#navbar').hasClass('white')) {
        $('#navbar').removeClass('white');
        $('#custom-navbar-label').removeClass('btn-light-blue').css("background-color", selectedNavbarCustomTheme);
    } else {
        $('#custom-navbar-label').css("background-color", selectedNavbarCustomTheme);
    }

    $('#navbar').css("background-color", selectedNavbarCustomTheme);
}

function setParticleStats(isParticleStats) {
    if (isParticleStats) {
        $.getScript('components/js/particles-stats.js')
            .done(function(script, textStatus) {
                $('.count-particles').show();
            })
            .fail(function(jqxhr, settings, exception) {
                mdtoast('Unable to display particle-stats.', { type: mdtoast.WARNING });
            });
    } else {
        $('#particles-monitor').remove();
        $('.count-particles').hide();
    }
}

function setAOS(isAOSAlways, aosObj) {
    if (isAOSAlways) {
        $('#aos-status').text('(always)');
        aosObj.once = false;
    } else {
        $('#aos-status').text('(once)');
        aosObj.once = true;
    }
    AOS.init(aosObj);
}