// =====================================
// DRIVE EASY - FINAL JAVASCRIPT
// =====================================


// =====================================
// SEARCH CAR
// =====================================

const searchForm = document.getElementById("searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const brandElement = document.getElementById("brandSelect");
        const fuelElement = document.getElementById("fuelSelect");
        const priceElement = document.getElementById("priceSelect");

        if (!brandElement || !fuelElement || !priceElement) {
            return;
        }

        const brand = brandElement.value;
        const fuel = fuelElement.value;
        const price = priceElement.value;

        const cards = document.querySelectorAll(".car-card");

        let found = false;

        cards.forEach(function (card) {

            const cardCar = card.getAttribute("data-car");
            const cardFuel = card.getAttribute("data-fuel");
            const cardPrice = card.getAttribute("data-price");

            let show = true;

            if (brand !== "" && brand !== cardCar) {
                show = false;
            }

            if (fuel !== "" && fuel !== cardFuel) {
                show = false;
            }

            if (price !== "" && price !== cardPrice) {
                show = false;
            }

            if (show) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }

        });


        const carsSection = document.getElementById("cars");

        if (carsSection) {

            carsSection.scrollIntoView({
                behavior: "smooth"
            });

        }


        if (!found) {

            alert(
                "Sorry! No car found with these options. 🚗"
            );

        }

    });

}


// =====================================
// BOOKING FORM
// =====================================

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameElement =
            document.getElementById("name");

        const carElement =
            document.getElementById("car");

        const pickupElement =
            document.getElementById("pickup");

        const returnElement =
            document.getElementById("returnDate");


        if (
            !nameElement ||
            !carElement ||
            !pickupElement ||
            !returnElement
        ) {
            return;
        }


        const name =
            nameElement.value.trim();

        const car =
            carElement.value;

        const pickup =
            pickupElement.value;

        const returnDate =
            returnElement.value;


        if (!name || !car || !pickup || !returnDate) {

            alert(
                "Please fill all required fields."
            );

            return;
        }


        if (returnDate < pickup) {

            alert(
                "Return date cannot be before pickup date."
            );

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


// =====================================
// BUTTON ANIMATION
// =====================================

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform =
            "scale(0.95)";


        setTimeout(function () {

            button.style.transform = "";

        }, 150);

    });

});
