const loadHome = () => {$("#home-page").load("../templates/home-info-content.html");}
const loadAbout = () => {$("#about-page").load("../templates/about-me.html");}
const loadPortfolio = () => {$("#portfolio-page").load("../templates/portfolio.html");}
// const loadContact = () => {$("#contact-page").load("../templates/contact.html");}
// const loadStore = () => {$("#shop-page").load("../templates/shop.html");}

//initialize site
$(document).ready(function(){
    startSlider();
    loadHome();
    loadPortfolio();
    loadAbout();
});

//home page content action

$("#top-nav-home-link").on("click", loadHome);
$("#top-nav-portfolio-link").on("click", loadPortfolio);
$("#top-nav-about-link").on("click", loadAbout);

    //background-slideshow
    let count = 0
    let showImage;
    let images = ["./assets/images/aspen-maroon-bells.JPG", "./assets/images/bangkok-aquarium-shark-head.jpg",  "./assets/images/delhi-jamid-mosque.JPG", "./assets/images/hampi-elephant-bath.jpg", "./assets/images/hampi-hanuman-boys.jpg", "./assets/images/kuala-lumpur-murugan.jpg", "./assets/images/morocco-rabat-beach-spot.jpeg", "./assets/images/napel-pokhara-canoes.jpg", "./assets/images/nepal-annapurna-village.jpg", "./assets/images/reading-bangkok-infinity-pool.jpg", "./assets/images/red-fort-delhi.jpg", "./assets/images/taj-mahal-agra.jpg", "./assets/images/varanasi-ganges-pier.jpg"]
    function displayImage() {
        $(".body-content").css("background-image", "url('" + images[count] + "')");
    }
    function nextImage() {
        count++;
        setTimeout(displayImage, 1000);
        if (count === images.length) {
            count = 0;
        }
    }
    function startSlider () { 
        displayImage();
        showImage = setInterval(nextImage, 1000 * 13) 
    }
    
