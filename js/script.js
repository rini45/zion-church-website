/* =========================================================
   ZION CHURCH WEBSITE
   GLOBAL JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("mobile-open");

            const isOpen = mainNav.classList.contains("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
       ===================================================== */

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (mainNav) {
                mainNav.classList.remove("mobile-open");
            }

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector(".site-header");

    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );

    handleHeaderScroll();


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".service-item, " +
        ".event-card, " +
        ".sermon-card, " +
        ".connect-card, " +
        ".section-heading, " +
        ".section-top, " +
        ".testimony-container, " +
        ".prayer-container"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add(
                "revealed"
            );

        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();


    navLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add(
                "active"
            );

        }

    });

});
