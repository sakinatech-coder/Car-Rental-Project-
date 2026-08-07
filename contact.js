
// Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("✅ Thank you for contacting DriveEasy!\n\nWe will get back to you soon.");

    this.reset();
});

// Simple Fade-in Animation
window.onload = function () {
    const contact = document.querySelector(".contact");

    contact.style.opacity = "0";
    contact.style.transform = "translateY(30px)";

    setTimeout(() => {
        contact.style.transition = "0.8s";
        contact.style.opacity = "1";
        contact.style.transform = "translateY(0)";
    }, 200);
};
