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