const loadHome = () => {
    $("#mainWindow").load("./templates/homeInfoContent.html");
}
const loadAbout = () => {
    $("#mainWindow").load("./templates/aboutMe.html");
}
const loadPortfolio = () => {
    $("#mainWindow").load("./templates/portfolio.html");
}

// once page has loaded correctly
$(document).ready(function(){
    loadPortfolio(); // load portfolio page
})

//home page content action
//top-nav-menu
$(document).on("click", "#top-nav-home-link", loadHome);
$(document).on("click", "#top-nav-portfolio-link", loadPortfolio);
$(document).on("click", "#top-nav-about-link", loadAbout);

//background-slideshow
let count = 0;
let showImage;
let images = ["assets/images/aspen-maroon-bells.JPG", "assets/images/bangkok-aquarium-shark-head.jpg",  "assets/images/delhi-jamid-mosque.JPG", "assets/images/hampi-elephant-bath.jpg", "assets/images/hampi-hanuman-boys.jpg", "assets/images/kuala-lumpur-murugan.JPG", "assets/images/morocco-rabat-beach-spot.jpeg", "assets/images/napel-pokhara-canoes.jpg", "assets/images/nepal-annapurna-village.JPG", "assets/images/reading-bangkok-infinity-pool.jpg", "assets/images/red-fort-delhi.JPG", "assets/images/taj-mahal-agra.JPG", "assets/images/varanasi-ganges-pier.JPG"]

const displayImage = () => {
    $(".body-content").css("background-image", "url('" + images[count] + "')");
}

const nextImage = () => {
    // displayImage();
    count++;
    setTimeout(displayImage, 1000);
    if (count === images.length) {
        count = 0;
    }
}

const startSlider = () => { 
    setInterval(nextImage, 1000 * 7) 
}

// displayImage();
startSlider();
    
