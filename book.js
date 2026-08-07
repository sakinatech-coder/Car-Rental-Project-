document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("🎉 Booking Successful!\n\nThank you for choosing DriveEasy Car Rental.");

    this.reset();

    setTimeout(function() {
        window.location.href = "index.html";
    }, 1500);
});
