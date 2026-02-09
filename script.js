window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;

    document.querySelectorAll(".thumb").forEach(img => {
        img.classList.remove("active");
    });

    thumbnail.classList.add("active");
}
const bannerImages = [
    "Images/DDE_Banner.png",
    "Images/DDE_Banner2.png",
    "Images/DDE_Banner3.png"
];

let currentBanner = 0;
const bannerImg = document.getElementById("DDE_Banner");

function showBanner(index) {
    currentBanner = (index + bannerImages.length) % bannerImages.length; // wrap around
    bannerImg.src = bannerImages[currentBanner];
}

function nextBanner() {
    showBanner(currentBanner + 1);
}

function prevBanner() {
    showBanner(currentBanner - 1);
}