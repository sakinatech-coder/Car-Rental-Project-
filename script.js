// ===============================
// DRIVE EASY - FINAL JAVASCRIPT
// ===============================

// Search Car
const searchForm = document.querySelector(".search form");

if (searchForm) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Car search feature is ready! 🚗");
    });
}


// ===============================
// Booking Form
// ===============================

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const car = document.getElementById("car").value;
        const pickup = document.getElementById("pickup").value;
        const returnDate = document.getElementById("returnDate").value;

        if (returnDate < pickup) {
            alert("Return date cannot be before pickup date.");
            return;
        }

        alert(
            "🎉 Booking Confirmed!\n\n" +
            "Name: " + name + "\n" +
            "Car: " + car + "\n" +
            "Pickup Date: " + pickup + "\n" +
            "Return Date: " + returnDate
        );
    });
}


// ===============================
// Button Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {
        button.style.transform = "scale(0.95)";

        setTimeout(function() {
            button.style.transform = "";
        }, 150);
    });

});
