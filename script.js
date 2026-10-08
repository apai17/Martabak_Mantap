// ================= MENU MOBILE =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// ================= NAVIGASI =================

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// ================= FILTER MENU =================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const menuCards =
    document.querySelectorAll(".menu-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        menuCards.forEach(function(card) {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// ================= PESAN WHATSAPP =================

document.querySelectorAll(".order-btn")
.forEach(function(button) {

    button.addEventListener("click", function() {

        const product =
            button.dataset.product;


        const phoneNumber =
            "6281234567890";


        const message =
            `Halo Martabak Mantap! Saya ingin memesan ${product}. Apakah masih tersedia?`;


        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

});


// ================= ANIMASI =================

const animatedElements =
    document.querySelectorAll(
        ".menu-card, .feature-card, .contact-card, .about-content, .about-image"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ================= NAVBAR SAAT SCROLL =================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(62,35,20,.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});