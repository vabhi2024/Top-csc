document.addEventListener("DOMContentLoaded", function () {

    // ALL <a> TAGS
    document.querySelectorAll("a").forEach(function(link) {

        const realLink = link.getAttribute("href");

        // href remove so hover link na dikhe
        link.removeAttribute("href");

        link.style.cursor = "pointer";

        link.addEventListener("click", function (e) {
            e.preventDefault();
            if (realLink && realLink !== "#") {
                window.location.href = realLink;
            }
        });
    });

    // ALL <button> TAGS
    document.querySelectorAll("button").forEach(function(btn) {

        const realLink = btn.getAttribute("data-link");

        btn.addEventListener("click", function () {
            if (realLink) {
                window.location.href = realLink;
            }
        });
    });

});