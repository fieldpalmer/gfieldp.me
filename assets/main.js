const loadHome = () => {
    $("#mainWindow").load("./templates/homeInfoContent.html");
    showSpacePic();
    whatsNews();
}
const loadAbout = () => {
    $("#mainWindow").load("./templates/aboutMe.html");
}
const loadPortfolio = () => {
    $("#mainWindow").load("./templates/portfolio.html");
}

// once page has loaded correctly
$(document).ready(function(){
    loadHome(); // load portfolio page
})

//home page content action

//shooting stars canvas by David Zakrzewski https://codepen.io/bts/pen/BygMzB
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var field = document.getElementById("field");
var f = field.getContext("2d");
var stars = {};
var starIndex = 0;
var numStars = 0;
var acceleration = 1;
var starsToDraw = (field.width * field.height) / 200;
if (getUrlParameter("stars")) {
  starsToDraw = getUrlParameter("stars");
}
if (getUrlParameter("accel")) {
  acceleration = getUrlParameter("accel");
} 
function Star() {
    this.X = field.width / 2;
    this.Y = field.height / 2;

    this.SX = Math.random() * 10 - 5;
    this.SY = Math.random() * 10 - 5;

    var start = 0;

    if (field.width > field.height)
        start = field.width;
    else
        start = field.height;

    this.X += this.SX * start / 10;
    this.Y += this.SY * start / 10;

    this.W = 1;
    this.H = 1;

    this.age = 0;
    this.dies = 500;

    starIndex++;
    stars[starIndex] = this;

    this.ID = starIndex;
    this.C = "#ffffff";
}
Star.prototype.Draw = function () {
    this.X += this.SX;
    this.Y += this.SY
    
    this.SX += this.SX / (50 / acceleration);
  	this.SY += this.SY / (50 / acceleration);

    this.age++;

    if (this.age == Math.floor(50 / acceleration) | this.age == Math.floor(150 / acceleration) | this.age == Math.floor(300 / acceleration)) {
        this.W++;
        this.H++;
    }

    if (this.X + this.W < 0 | this.X > field.width |
        this.Y + this.H < 0 | this.Y > field.height)
      {
        delete stars[this.ID];
        numStars--;
			}
  
    f.fillStyle = this.C;
    f.fillRect(this.X, this.Y, this.W, this.H);
}
field.width = window.innerWidth;
field.height = window.innerHeight;
function draw() {
  	if (field.width != window.innerWidth)
      	field.width = window.innerWidth;
  	if (field.height != window.innerHeight)
      	field.height = window.innerHeight;
  
  	// Play with the "a" value to create streams...it's fun!
    f.fillStyle = "rgba(0, 0, 0, 0.8)";
    f.fillRect(0, 0, field.width, field.height);

    for (var i = numStars; i < starsToDraw; i++) {
        new Star();
        numStars++;
    }

    for (var star in stars) {
        stars[star].Draw();
    }
}
// Original timing of the screensaver
setInterval(draw, 40);

//top-nav-menu
$(document).on("click", "#top-nav-home-link", loadHome);
$(document).on("click", "#top-nav-portfolio-link", loadPortfolio);
$(document).on("click", "#top-nav-about-link", loadAbout);


// //background-slideshow
// let count = 0;
// let showImage;
// let images = ["assets/images/aspen-maroon-bells.JPG", "assets/images/bangkok-aquarium-shark-head.jpg",  "assets/images/delhi-jamid-mosque.JPG", "assets/images/hampi-elephant-bath.jpg", "assets/images/hampi-hanuman-boys.jpg", "assets/images/kuala-lumpur-murugan.JPG", "assets/images/morocco-rabat-beach-spot.jpeg", "assets/images/napel-pokhara-canoes.jpg", "assets/images/nepal-annapurna-village.JPG", "assets/images/reading-bangkok-infinity-pool.jpg", "assets/images/red-fort-delhi.JPG", "assets/images/taj-mahal-agra.JPG", "assets/images/varanasi-ganges-pier.JPG"]

// const displayImage = () => {
//     $(".body-content").css("background-image", "url('" + images[count] + "')");
// }

// const nextImage = () => {
//     // displayImage();
//     count++;
//     setTimeout(displayImage, 1000);
//     if (count === images.length) {
//         count = 0;
//     }
// }

// const startSlider = () => { 
//     setInterval(nextImage, 1000 * 7) 
// }

// // displayImage();
// startSlider();
    
// nasa pic of the day api
const showSpacePic = () => {
    let query = 'https://api.nasa.gov/planetary/apod?api_key=olmNTdDBjgx4ooHMEwFYVsbouT3wzx5pp2wE7CQD';
    $.ajax({
        url: query,
        method: "GET"
    }).then( (response) => {
        let imgSrc = response.url;
        let caption = response.explanation;
        let title = response.title;
        let copyright = response.copyright;
        let imgTitle = $("<h5 class='card-subtitle'>" + title + "</h5>");
        let imgCaption = $("<p class='pt-2 card-text'>" + caption + "</p>");

        $("#nasaPic").attr({
            src: imgSrc,
            alt: title,
            caption: caption 
        });

        $("#nasaPicFooter").append(imgTitle, imgCaption, "&#169; " + copyright);
    })
}

// news headlines

const whatsNews = () => {
    let query = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b9ab90edbe1047acb8d6ee4e806cb6f8"
    $.ajax({
        url: query,
        method: "GET"
    }).then( (response) => {
        let articleInfo = response.articles;
        for (var i = 0 ; i < articleInfo.length ; i++) {
            let source = articleInfo[i].source.name;
            let title = articleInfo[i].title;
            let link = articleInfo[i].url;
            let blurb = articleInfo[i].description;
            let imgSrc = articleInfo[i].urlToImage;

            let newArticle = $("<li class='list-group-item d-inline-flex'><div class='col-sm-4'><img class='img-fluid pb-2' src=" + imgSrc + "><a href=" + link + ">" + source + "</a></div><div class='col-sm-8'><h5>" + title + "</h5><p>" + blurb + "</p></div></li>");

            $(".newsList").append(newArticle);
        };
    })
}

//rotating Welcome words process

let words = ["Welcome", "مرحبا", "Bienvenue", "欢迎光临", "Willkommen", "ברוך הבא", "Bienvenidos", "सवागत हैं", "Fáilte", "ようこそ", "Benvenuto", "پخير", "Salve", "Тавтай морилогтун", "स्वागतम्", "Witam", "خوش آمدی", "Bem-vindos", "Добро пожаловать!", "Dobrodošli", "Karibuni", "ยินดีต้อนรับ", "Hoş geldiniz", "Được tiếp đãi ân cần", "Namkelekile", "Welcome"];

var i = 0;

(function loop() {
    $("#welcome-load").html(words[i]);
    if (i === words.length) {
        i = 0 ;
        return i;
    }
    if (++i < words.length) {
        setTimeout(loop, 3000);  // call myself in 3 seconds time if required
    }
    
})();