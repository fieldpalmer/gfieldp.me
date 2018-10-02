const loadHome = () => {$("#home-page").load("../templates/home-info-content.html");}
const loadAbout = () => {$("#about-page").load("../templates/about-me.html");}
const loadPortfolio = () => {$("#portfolio-page").load("../templates/portfolio.html");}
// const loadContact = () => {$("#contact-page").load("../templates/contact.html");}
// const loadStore = () => {$("#shop-page").load("../templates/shop.html");}

//initialize site
$(document).ready(function(){
    startSlider();
    loadPortfolio();
    loadAbout();
});
//home page content action

    //background-slideshow
    let count = 0
    let showImage;
    let images = ["./assets/images/hanuman-boys-playing-hampi.jpg", "./assets/images/ocean.jpg","./assets/images/rabat-beach-field-friends.jpg","./assets/images/field-france-mont-st-michel.jpg"]
    function displayImage() {
        $(".body-content").css("background-image", "url('" + images[count] + "')");
    }
    function nextImage() {
        count++;
        setTimeout(displayImage);
        if (count === images.length) {
            count = 0;
        }
    }
    function startSlider () { 
        displayImage();
        showImage = setInterval(nextImage, 1000 * 13) 
    }
    
