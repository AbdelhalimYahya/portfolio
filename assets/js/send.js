document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // // Initialize EmailJS with your user ID
        // emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

        // Collect form data
        let formData = {
            contact_name: document.getElementById("contact-name").value,
            contact_phone: document.getElementById("contact-phone").value,
            contact_email: document.getElementById("contact-email").value,
            subject: document.getElementById("subject").value,
            contact_message: document.getElementById("contact-message").value,
        };

        // Show loading alert
        Swal.fire({
            title: "Sending...",
            text: "Please wait while we send your message.",
            icon: "info",
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Send email using EmailJS
        emailjs.send("service_x4gk9jl", "template_j6prwwx", formData)
            .then(function(response) {
                // Success Alert
                Swal.fire({
                    title: "Message Sent!",
                    text: "Your message has been successfully sent.",
                    icon: "success",
                    confirmButtonText: "OK"
                });

                // Clear input fields after successful send
                document.getElementById("contact-form").reset();
            }, function(error) {
                // Error Alert
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue sending your message. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                console.error("EmailJS Error:", error);
            });
    });
});
