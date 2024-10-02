// Initialize EmailJS with your user ID
(function () {
  emailjs.init("lFhgZbS-cxtLYKvIa");
})();

// Function to send email using EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Send the email using the form data
    emailjs.sendForm("service_5z92i2r", "template_ormzmr8", this).then(
      function () {
        alert("Message Sent Successfully!");
      },
      function (error) {
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
