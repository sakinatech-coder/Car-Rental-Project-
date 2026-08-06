// Welcome message
console.log("Welcome to DriveEasy Car Rental");

// Rent Now buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Thank you for choosing DriveEasy Car Rental! 🚗 We will contact you soon.");
    });
});

// Contact form
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Your message has been sent successfully! ✅");

    form.reset();
});
