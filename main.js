(function (w) {
    const d = document,
        hero = d.querySelector("#hero"),
        nav = d.querySelector("#nav"),
        burgerMenu = nav.querySelector("#nav-icon"),
        navList = nav.querySelector(".nav-list"),
        navLink = nav.querySelectorAll(".nav-list-link");

    const smoothMenu = w => {
        const heroOff = hero
            .getBoundingClientRect()
            .top;

        w.scrollY > heroOff
            ? nav
                .classList
                .add("triggered")
            : nav
                .classList
                .remove("triggered");
    };

    w.addEventListener("scroll", function (e) {
        smoothMenu(w);
    });

    burgerMenu.addEventListener("click", function (e) {
        this
            .classList
            .toggle("open");
        navList
            .classList
            .toggle("active");
    });

    // link redirect

    navLink.forEach((el, i) => {

        el.addEventListener("click", e => {
            if (w.innerWidth <= 768) {
                burgerMenu
                    .classList
                    .toggle("open");
                navList
                    .classList
                    .toggle("active");
            }
        });
    });
})(window);
