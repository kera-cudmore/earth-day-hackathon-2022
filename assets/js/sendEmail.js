function sendMail(contactForm) {
    emailjs.send("service_71y6pnc", "template_nzht5cc", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        })
        .then(
            function(response) {
                alert("Message Successfully Sent Thanks", response);
            },
            function(error) {
                alert("Ops! Something went wrong, please try again!", error);
            }
        );
    return false;
}