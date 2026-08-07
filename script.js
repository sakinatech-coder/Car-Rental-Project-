// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Rent Now Button
document.querySelectorAll(".car-card button").forEach(button => {

    button.addEventListener("click", function(){

        alert("🚗 Thank You!\n\nYour booking request has been received.\nOur team will contact you shortly.");

    });

});

// Booking Form
const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Booking Submitted Successfully!");

    form.reset();

});

}

// Navbar Background Change
window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background="#000";

header.style.boxShadow="0 3px 15px rgba(0,0,0,.5)";

}else{

header.style.background="#111";

header.style.boxShadow="none";

}

});

// Hero Button Animation
const heroBtn=document.querySelector(".btn");

if(heroBtn){

setInterval(()=>{

heroBtn.style.transform="scale(1.05)";

setTimeout(()=>{

heroBtn.style.transform="scale(1)";

},500);

},1500);

}

// Search Button
const searchBtn=document.querySelector(".search button");

if(searchBtn){

searchBtn.addEventListener("click",function(e){

e.preventDefault();

alert("🔍 Searching Available Cars...");

});

}
