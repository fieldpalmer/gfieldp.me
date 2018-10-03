const loadHome = () => {
    $("#home-page").load("./templates/homeInfoContent.html");
}
const loadAbout = () => {
    $("#about-page").load("./templates/aboutMe.html");
}
const loadPortfolio = () => {
    $("#portfolio-page").load("./templates/portfolio.html");
}
// const loadContact = () => {$("#contact-page").load("../templates/contact.html");}
// const loadStore = () => {$("#shop-page").load("../templates/shop.html");}

//initialize site
$(".content-input").html(loadHome);

//home page content action
    //top-nav-menu
    $("#top-nav-home-link").on("click", function() {
        $(".content-input").html(loadHome);
    });

    $("#top-nav-portfolio-link").on("click", function() {
        $(".content-input").html(loadPortfolio);
    });
    $("#top-nav-about-link").on("click", function() {
        $(".content-input").html(loadAbout);
    });

    //background-slideshow
    let count = 0
    let showImage;
    let images = ["/images/aspen-maroon-bells.JPG", "/images/bangkok-aquarium-shark-head.jpg",  "/images/delhi-jamid-mosque.JPG", "/images/hampi-elephant-bath.jpg", "/images/hampi-hanuman-boys.jpg", "/images/kuala-lumpur-murugan.jpg", "/images/morocco-rabat-beach-spot.jpeg", "/images/napel-pokhara-canoes.jpg", "/images/nepal-annapurna-village.jpg", "/images/reading-bangkok-infinity-pool.jpg", "/images/red-fort-delhi.jpg", "/images/taj-mahal-agra.jpg", "/images/varanasi-ganges-pier.jpg"]
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
        // displayImage();
        showImage = setInterval(nextImage, 1000 * 13) 
    }
    startSlider();
    
