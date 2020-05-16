/* document.getElementById("form-submit").addEventListener("click", validateForm());
 */
$("#contact-form").submit(function(e) {
    e.preventDefault();
    validateForm();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Thank you!");
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

/* /* Ajax call
formData = {
    'name': $('input[name=name]').val(),
    'email': $('input[name=email]').val(),
    'subject': $('input[name=subject]').val(),
    'message': $('textarea[name=message]').val()
};


$.ajax({
    url: "mail.php",
    type: "POST",
    data: formData,
    success: function(data, textStatus, jqXHR) {
        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
            $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function(jqXHR, textStatus, errorThrown) {
        $('#status').text(jqXHR);
    }
}); */