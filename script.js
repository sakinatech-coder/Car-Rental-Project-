// Welcome Message
console.log("Welcome to DriveEasy Car Rental!");

// Hero Button
const rentButtons = document.querySelectorAll("button");

rentButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("🚗 Thank you for choosing DriveEasy Car Rental!\n\nOur team will contact you soon.");
    });
});

// Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Your booking request has been submitted successfully!");

        form.reset();
    });
}
