
// =========================================================
// DRIVE EASY - CAR DETAILS JAVASCRIPT
// =========================================================

// Get car name from URL
const params = new URLSearchParams(window.location.search);
const car = params.get("car");

// =========================================================
// CAR DATA
// =========================================================

const cars = {

    thar: {
        name: "Mahindra Thar",
        price: "₹3500 / Day",
        transmission: "⚙ Manual",
        fuel: "⛽ Diesel",
        seats: "👥 4 Seats",

        front: "images/Thar-front.jpg",
        interior: "images/Thar-Interior.jpg",
        dashboard: "images/Thar-dashboard.jpg",

        description:
            "Mahindra Thar is a powerful and stylish SUV, perfect for road trips, adventures and off-road journeys."
    },

    scorpio: {
        name: "Mahindra Scorpio",
        price: "₹3000 / Day",
        transmission: "⚙ Manual",
        fuel: "⛽ Diesel",
        seats: "👥 7 Seats",

        front: "images/scorpio-front.jpg",
        interior: "images/scorpio-Interior.jpg",
        dashboard: "images/scorpio-dashboard.jpg",

        description:
            "Mahindra Scorpio offers a spacious interior, powerful performance and a comfortable experience for family journeys."
    },

    bmw: {
        name: "BMW 5 Series",
        price: "₹9000 / Day",
        transmission: "⚙ Automatic",
        fuel: "⛽ Petrol",
        seats: "👥 5 Seats",

        front: "images/bmw-front.jpg",
        interior: "images/bmw-Interior.jpg",
        dashboard: "images/bmw-dashboard.jpg",

        description:
            "BMW 5 Series delivers luxury, comfort and powerful performance for premium business trips and special journeys."
    },

    lamborghini: {
        name: "Lamborghini Huracan",
        price: "₹25000 / Day",
        transmission: "⚙ Automatic",
        fuel: "⛽ Petrol",
        seats: "👥 2 Seats",

        front: "images/lamborghini-front.jpg",
        interior: "images/lamborghini-Interior.jpg",
        dashboard: "images/lamborghini-dashboard.jpg",

        description:
            "Lamborghini Huracan delivers an exciting supercar experience with premium styling and outstanding performance."
    }

};


// =========================================================
// FIND SELECTED CAR
// =========================================================

const selectedCar = cars[car];


// =========================================================
// UPDATE CAR DETAILS
// =========================================================

if (selectedCar) {

    // Main car image
    const mainImage = document.getElementById("mainCarImage");

    if (mainImage) {
        mainImage.src = selectedCar.front;
        mainImage.alt = selectedCar.name;
    }


    // Interior image
    const interiorImage = document.getElementById("interiorImage");

    if (interiorImage) {
        interiorImage.src = selectedCar.interior;
        interiorImage.alt = "Car Interior";
    }


    // Dashboard image
    const dashboardImage = document.getElementById("dashboardImage");

    if (dashboardImage) {
        dashboardImage.src = selectedCar.dashboard;
        dashboardImage.alt = "Car Dashboard";
    }


    // Car name
    const carName = document.getElementById("carName");

    if (carName) {
        carName.textContent = selectedCar.name;
    }


    // Price
    const carPrice = document.getElementById("carPrice");

    if (carPrice) {
        carPrice.textContent = selectedCar.price;
    }


    // Transmission
    const carTransmission =
        document.getElementById("carTransmission");

    if (carTransmission) {
        carTransmission.textContent =
            selectedCar.transmission;
    }


    // Fuel
    const carFuel = document.getElementById("carFuel");

    if (carFuel) {
        carFuel.textContent = selectedCar.fuel;
    }


    // Seats
    const carSeats = document.getElementById("carSeats");

    if (carSeats) {
        carSeats.textContent = selectedCar.seats;
    }


    // Description
    const carDescription =
        document.getElementById("carDescription");

    if (carDescription) {
        carDescription.textContent =
            selectedCar.description;
    }


    // =====================================================
    // BOOK THIS CAR BUTTON
    // =====================================================

    const bookButton =
        document.getElementById("bookButton");

    if (bookButton) {

        bookButton.addEventListener("click", function () {

            window.location.href =
                "book.html?car=" +
                encodeURIComponent(selectedCar.name);

        });

    }

}


// =========================================================
// IF CAR IS NOT FOUND
// =========================================================

else {

    console.error("Car not found!");

    const carName = document.getElementById("carName");

    if (carName) {
        carName.textContent = "Car Not Found";
    }

    const carDescription =
        document.getElementById("carDescription");

    if (carDescription) {
        carDescription.textContent =
            "Sorry, the selected car could not be found.";
    }

}


// =========================================================
// IMAGE ERROR HANDLING
// =========================================================

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.error(
            "Image not found:",
            image.getAttribute("src")
        );

    });

});
