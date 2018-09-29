function loadHome () {
    $("#home-page").load("../templates/home-info-content.html");
}
function loadAbout() {
    $("#about-page").load("../templates/about-me.html");
}
function loadPortfolio() {
    $("portfolio-page").load("../templates/portfolio.html");
}
function loadContact() {
    $("#contact-page").load("../templates/contact.html");
}
function loadStore() {
    $("#shop-page").load("../templates/shop.html");
}
//initialize site
$(document).ready(loadHome());
//sidebar visibility action
$(document).on("click", ".about-btn", loadAbout());
//home page content action
