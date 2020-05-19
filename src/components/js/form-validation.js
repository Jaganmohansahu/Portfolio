$("#contact-form").submit(function(e) {
    e.preventDefault();
    validateForm();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize())
        .done(function() {
            $('#status').text("Sent !!").css("color", "green");
            mdtoast('Message delivered !!', { type: mdtoast.SUCCESS });
            $('#contact-form').closest('form').find("input[type=text], textarea").val("");
        }).fail(function() {
            $('#status').text("Failed !!").css("color", "red");
            mdtoast('Failed to send message :(', { type: mdtoast.ERROR });
        });
});

function validateForm() {
    /* Name validation */
    var name = $('#name').val();
    if (name == "") {
        $('#status').text("Name cannot be empty!").css("color", "red");
        return false;
    }

    /* Email validation */
    var email = $('#email').val();
    if (email == "") {
        $('#status').text("Email cannot be empty!").css("color", "red");
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            $('#status').text("Email format invalid!").css("color", "red");
            return false;
        }
    }

    /* Subect validation */
    var subject = $('#subject').val();
    if (subject == "") {
        $('#status').text("Subject cannot be empty!").css("color", "red");
        return false;
    }

    /* Message validation */
    var message = $('#message').val();
    if (message == "") {
        $('#status').text("Message cannot be empty!").css("color", "red");
        return false;
    }
    $('#status').text("Sending...").css("color", "green");
}
