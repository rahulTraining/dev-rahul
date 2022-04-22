// var loader = document.querySelector('.loader');
        // window.onload = function() {
        //     setTimeout(function() {
        //         loader.classList.add('active')
        //     },2500)
        // }

        var cursor = document.querySelector('.cursor');
        cursor.style.display = 'none'
        document.onmousemove = function (e) {
            cursor.style.left = (e.pageX) + "px"
            cursor.style.top = (e.pageY) + "px"
            cursor.style.display = 'grid'
        }

        var menuIcon = document.querySelector("[menu-icon]");
        var icon = document.querySelector('[icon]');

        var nav = document.querySelector(".nav");

        menuIcon.addEventListener('click', function () {
            nav.classList.toggle('active');
            icon.classList.toggle('fa-xmark')
        })

        var a = document.querySelectorAll('.hero-section nav a');
        var contents = document.querySelectorAll('#contents');

        a.forEach((nav, index) => {
            nav.addEventListener('click', function () {
                a.forEach(head => head.classList.remove('active'));
                nav.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                contents[index].classList.add('active')
            })
            a[0].click();
        })

        var header = document.querySelector('header');
        var prevScrollpos = window.pageYOffset;
        // var prevScrollpos = 0;
        window.onscroll = function () {
            var currentScrollpos = window.pageYOffset;
            if (prevScrollpos < currentScrollpos) {
                header.classList.add('active')
            } else {
                header.classList.remove('active')
            }
            prevScrollpos = currentScrollpos
        }

        var up = document.querySelector('.up');
        up.onclick = function () {
            document.body.scrollTo(0, 0);
            document.documentElement.scrollTo(0, 0)
        }

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 200) {
                up.style.right = "25px"
            } else {
                up.style.right = "-40px"
            }
        })

        $(document).ready(function () {
            $('#progressbar-hoz').hide()
            $(window).scroll(function () {
                $('#progressbar-hoz').show();
                var scroll = $(window).show().scrollTop(),
                    dh = $(document).height(),
                    wh = $(window).height();
                scrollPercentage = (scroll / (dh - wh)) * 100;
                $('#progressbar-hoz').css('width', scrollPercentage + '%')
            })
        });

        // $('.slick').slick({
        //     infinite: false,
        //     centerPadding: '50px',
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     adaptiveHeight: true,
        //     prevArrow: `<i class='fa fa-angle-left fa-2x text-white slick-prev arrows_slick'></i>`,
        //     nextArrow: `<i class='fa fa-angle-right fa-2x text-white slick-next arrows_slick'></i>`,
        //     responsive: [
        //         {
        //             breakpoint: 2560,
        //             settings: {
        //                 slidesToShow: 4,
        //                 slidesToScroll: 4,
        //             }
        //         },
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 2,
        //             }
        //         },
        //         {
        //             breakpoint: 542,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]
        // });