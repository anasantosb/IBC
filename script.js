document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");

    const links = document.querySelectorAll("nav ul li a, .botoes a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            loader.style.display = "flex";

            setTimeout(function() {
                window.location.href = link.href;
            }, 500); 
        });
    });
});
