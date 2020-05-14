$("document").ready(function () {
    $('div.fourteen button.btn-search').mousedown(function (event) {
        event.preventDefault();
        var $input = $('div.fourteen input');
        $input.focus();
        if ($input.val().length() > 0) {
            // submit form
        }
    });
});