/**
 * @file main.js
 * @author Francesco Violante
 * 
 * Main scripts for index page.
 */

/**
 * Scroll screen to target element.
 * @param {string} target html element's id.
 */
function scrollToTargetAdjusted(target) {
    var element = document.getElementById(target);
    var offset = 70;
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = element.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

/**
 * Add navbar scroll event to window
 */
function scrollEvent() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("main-logo");
    var container = document.getElementById("navbar-container");

    if (window.scrollY > 80) {
        navbar.classList.remove("colored");
        navbar.classList.add("scrolled");
        logo.style.width = "80px";
        container.style.marginTop = "0px";
    } else {
        navbar.classList.remove("scrolled");
        logo.style.width = "120px";
        container.style.marginTop = "15px";
    }
}

// scroll to div
var linkHome = document.getElementById("home");
linkHome.addEventListener("click", function() {
    scrollToTargetAdjusted("top-of-page");
});

var linkHistory = document.getElementById("history");
linkHistory.addEventListener("click", function() {
    scrollToTargetAdjusted("the-band");
});

var linkMusic = document.getElementById("music");
linkMusic.addEventListener("click", function() {
    scrollToTargetAdjusted("discography");
});

var linkShop = document.getElementById("shop");
linkShop.addEventListener("click", function() {
    scrollToTargetAdjusted("shop-section");
});

var linkTour = document.getElementById("tour");
linkTour.addEventListener("click", function() {
    scrollToTargetAdjusted("tour-section");
});

var linkContacts = document.getElementById("contacts");
linkContacts.addEventListener("click", function() {
    scrollToTargetAdjusted("newsletter");
});

var navbar = document.getElementById("navbar");

// set initial class for navbar color, no scroll effect if viewport is tablet or mobile
if (window.innerWidth < 992) {
    navbar.classList.add("colored");
} else {
    window.addEventListener("scroll", scrollEvent, false);
}

// add listener when window is resized to keep navbar working
window.addEventListener("resize", function() {
    if (window.innerWidth > 992) {
        window.removeEventListener("scroll", scrollEvent, false);
        window.addEventListener("scroll", scrollEvent, false);
        navbar.classList.remove("colored");
    } else {
        window.removeEventListener("scroll", scrollEvent, false);
        navbar.classList.remove("scrolled");
        navbar.classList.add("colored");
    }
}, false);

// add text animation after page is loaded
var headerTitle = document.getElementById("big-header-title");
window.addEventListener("load", function(){
    headerTitle.classList.add("animate__animated");
    headerTitle.classList.add("animate__backInUp");
}, false);