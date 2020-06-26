//= lib/jquery-3.5.1.min.js
//= lib/slick.min.js

$(document).ready(function () {
    $('.main-slider').slick({
        "slidesToScroll": 1,
        "slidesToShow": 1
    });

    $('.init__slick').slick({
        "slidesToScroll": 1,
        "slidesToShow": 4,
        "arrows": true,
        "responsive": [
            {
                "breakpoint": 1700,
                "settings": {
                    "slidesToShow": 3
                }
            },
            {
                "breakpoint": 1200,
                "settings": {
                    "slidesToShow": 2
                }
            },
            {
                "breakpoint": 992,
                "settings": {
                    "slidesToShow": 2
                }
            },
            {
                "breakpoint": 768,
                "settings": {
                    "slidesToShow": 1
                }
            }
        ]
    });

    $('.js__tab-nav').on('click', '.js__tab-nav__item:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.js__tab-wrap').find('.js__tab-panel').removeClass('active').eq($(this).index()).addClass('active');

    });

    $('.js__tab-nav__item').click(function () {
        //$(".init__slick").slick('reinit');
    });

    $('.inner-sizes').on('click', '.inner-sizes__item:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* BEGIN: Search Field */

    $('.search-run').click(function () {
        $(this).parent().toggleClass('active');
    });

    /* END: Search Field  */
});

window.addEventListener("DOMContentLoaded", function () {
    /* BEGIN: Menu toggle */
    let hamburger = document.querySelector('.nav-menu__toggle');
    let menu = document.querySelector('.header-menu__list-second');

    const toggleMenu = function () {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    };

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function (e) {
        let target = e.target;
        let its_menu = target === menu || menu.contains(target);
        let its_hamburger = target === hamburger;
        let menu_is_active = menu.classList.contains('active');

        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenu();
        }
    })
    /* END: Menu toggle */
});



