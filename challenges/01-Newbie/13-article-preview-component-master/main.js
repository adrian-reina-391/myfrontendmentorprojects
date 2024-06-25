document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.getElementById("shareButton");
    const shareButtonTooltip = document.getElementById("shareButtonTooltip");
    const share = document.querySelector(".share");
    const author = document.querySelector(".author");

    shareButton.addEventListener("click", function() {
        if (window.innerWidth <= 767) {
            // Pantallas móviles
            author.style.display = "none";
            share.style.display = "flex";
        } else {
            // Pantallas mayores a 767px
            share.style.display = "flex";
        }
    });

    shareButtonTooltip.addEventListener("click", function() {
        if (window.innerWidth <= 767) {
            // Pantallas móviles
            share.style.display = "none";
            author.style.display = "grid";
        } else {
            // Pantallas mayores a 767px
            share.style.display = "none";
        }
    });
});
