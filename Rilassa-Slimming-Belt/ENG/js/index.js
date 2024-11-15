document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
});

//ingredients

document.addEventListener("click", function (e) {
    const ingrTitle = e.target.closest(".ingr-title");
    if (ingrTitle) {
        const textElement = ingrTitle.nextElementSibling;
        if (textElement && textElement.classList.contains("ingr-text")) {
            textElement.style.display = (textElement.style.display === "none") ? "block" : "none";
            const iconElement = ingrTitle.querySelector(".icon");
            iconElement.textContent = (textElement.style.display === "none") ? "+" : "-";
        }
    }
});