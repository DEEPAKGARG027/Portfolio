// function alt(){
//     alert('Message Sent !')
// }

//   document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("myForm");
  
//     form.addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent form from submitting and page reload
  
//       const formData = {}; // Create an empty object to store form data
//       formData.name = document.getElementById("1").value;
//       formData.email = document.getElementById("2").value;
//       formData.subject = document.getElementById("3").value;
//       formData.text = document.getElementById("4").value;
  
//       alert(JSON.stringify(formData, null, 2)); // Display the object in an alert
//     });
//   });

  // document.addEventListener("DOMContentLoaded", function () {
  //   const form = document.getElementById("myForm");
  
  //   form.addEventListener("submit", function (event) {
  //     event.preventDefault(); // Prevent form from submitting and page reload
  
  //     const formData = {}; // Create an empty object to store form data
  
  //     const nameValue = document.getElementById("1").value;
  //     const emailValue = document.getElementById("2").value;
  //     const subjectValue = document.getElementById("3").value;
  //     const textValue = document.getElementById("4").value;
  
  //     if (nameValue || emailValue || subjectValue || textValue) {
  //       if (nameValue) {
  //         formData.name = nameValue;
  //       }
  //       if (emailValue) {
  //         formData.email = emailValue;
  //       }
  //       if (subjectValue) {
  //           formData.subject = subjectValue;
  //       }
  //       if (textValue) {
  //           formData.text = textValue;
  //       }

  //       alert(JSON.stringify(formData, null, 2)); // Display the object in an alert
  //     } else {
  //       alert("Please fill in at least one form field.");
  //     }
  //   });
  // });
  
  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", function () {
      const name = encodeURIComponent(document.getElementById("1").value);
      const email = encodeURIComponent(document.getElementById("2").value);
      const subject = encodeURIComponent(document.getElementById("3").value);
      const message = encodeURIComponent(document.getElementById("4").value);
  
      const mailtoLink = `mailto:deepakgarg6466@gmail.com?subject=${subject}&body=Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
      
      window.location.href = mailtoLink;
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const hireButton = document.getElementById("btn");
    hireButton.addEventListener("click", function () {
      const emailAddress = "deepakgarg6466@gmail.com"; // Replace with your email address
      const subject = "I'm Interested in Hiring You";
      const body = "Hello,\n\nI'm interested in discussing potential job opportunities with you. Please let me know when we can connect.\n\nBest regards,\n[Your Name]";
  
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
    });
  });
  
  
  