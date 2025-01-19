// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('registrationForm');
//     const thankYouMessage = document.getElementById('thankYouMessage');

//     if (form) {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault();

//             // Collect form data
//             const formData = {
//                 fullName: form.fullName.value,
//                 dateOfBirth: form.dob.value,
//                 city: form.city.value,
//                 address: form.address.value,
//                 email: form.email.value,
//                 phone: form.phone.value,
//                 ssn: form.ssn.value,
//                 workplace: form.workplace.value
//             };

//             // Send email using mailto
//             const mailtoLink = `mailto:your-email@example.com?subject=New Registration&body=${encodeURIComponent(JSON.stringify(formData, null, 2))}`;
//             window.location.href = mailtoLink;

//             // Hide form and show thank you message
//             form.classList.add('hidden');
//             thankYouMessage.classList.remove('hidden');
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const loaderButton = document.getElementById("loader");
    const submitButton = document.getElementById("submit");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Hide the submit button and show the loader button
      submitButton.classList.add("hidden");
      loaderButton.classList.remove("hidden");
  
      // Simulate a 3-second delay
      setTimeout(() => {
        // Hide the loader and reset the form
        loaderButton.classList.add("hidden");
        form.reset();
        form.style.display = "none";
  
        // Show the thank-you message
        thankYouMessage.classList.remove("hidden");
      }, 3000);
    });
  });
  
  
 