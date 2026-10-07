// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Display a message in browser console
console.log(
    "India Agricultural Crop Production Analysis - Flask Application Loaded"
);
console.log(
    "India Agricultural Crop Production Analysis loaded successfully."
);