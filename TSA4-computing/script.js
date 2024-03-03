document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarNav = document.getElementById("navbarNav");

    navbarToggle.addEventListener("click", function() {
        navbarNav.classList.toggle("show");
    });
});
