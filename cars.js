// Welcome Message
window.onload = function () {
    console.log("DriveEasy Car Rental Loaded Successfully!");
};

// View Details Button
document.querySelectorAll(".btn").forEach(function(button){

    button.addEventListener("click",function(e){

        if(button.innerText=="View Details"){

            e.preventDefault();

            alert("🚗 Car Details\n\nBooking feature will be available soon.");

        }

    });

});

// Card Animation
const cards=document.querySelectorAll(".car-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

setTimeout(()=>{

card.style.transition="0.8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*250);

});

// Hover Effect
cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});
