function validateForm(){if(""==$("#name").val())return $("#status").text("Name cannot be empty!").css("color","red"),!1;var t=$("#email").val();if(""==t)return $("#status").text("Email cannot be empty!").css("color","red"),!1;if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t))return $("#status").text("Email format invalid!").css("color","red"),!1;if(""==$("#subject").val())return $("#status").text("Subject cannot be empty!").css("color","red"),!1;if(""==$("#message").val())return $("#status").text("Message cannot be empty!").css("color","red"),!1;$("#status").text("Sending...").css("color","green");var e=$(this);$.post(e.attr("action"),e.serialize()).done((function(){$("#status").text("Sent !!").css("color","green"),mdtoast("Message delivered !!",{type:mdtoast.SUCCESS}),$("#contact-form").closest("form").find("input[type=text], textarea").val("")})).fail((function(){$("#status").text("Failed !!").css("color","red"),mdtoast("Failed to send message :(",{type:mdtoast.ERROR})}))}$("#contact-form").submit((function(t){t.preventDefault(),validateForm()}));