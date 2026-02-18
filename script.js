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
    "Images/DDE/DDE_Banner.png",
    "Images/DDE/DDE_Banner2.png",
    "Images/DDE/DDE_Banner3.png"
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
document.addEventListener("DOMContentLoaded", function () {

    const listItems = document.querySelectorAll(".project-contribution-list li");
    const contentBox = document.getElementById("contentBox");

    listItems.forEach(item => {
        item.addEventListener("click", () => {

            const key = item.getAttribute("data-key");
            const template = document.getElementById(`${key}-content`);

            if (template) {
                contentBox.innerHTML = template.innerHTML;
            }

            // Optional active styling
            listItems.forEach(li => li.classList.remove("active"));
            item.classList.add("active");
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    document.addEventListener("click", function (e) {

        if (e.target.classList.contains("clickable-image")) {
            lightbox.style.display = "block";
            lightboxImg.src = e.target.src;
        }

    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});