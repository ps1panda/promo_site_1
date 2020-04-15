$(function() {

    var scroll = 0;
    var doc = 0;
    console.log('ready')
    $('.link').click(function() {
        $('html, body').animate({
            scrollTop: $('[scroll_box =' + $(this).attr('to_scroll') + ']').offset().top
        }, 500)
        console.log('321')
        $('.link').removeClass('active_link')
        $(this).addClass('active_link')
        $('.line').css({
            'width': $(this).width(),
            'left': $(this).offset().left
        })
        if ($(window).width() < 767) {
            $('nav').removeClass('open_nav')
            $('#nav-icon4').removeClass('open')
        }

    })
    $('.play').click(function() {
        $('.trailer_poster').hide()
        $('video').css('opacity', '1')
        $('video')[0].play()
        $(this).hide()
    })
    $('video').on('ended', function() {
        $('.play').show()
        $('video').css('opacity', '0')
        $('.trailer_poster').show()

    });
    if ($(window).width() < 767) {
        $('.pat_diag').each(function() {
            var text = $(this).html();
            text = text.replace('<br>&nbsp;', '');
            $(this).html(text);
        })
        $('.doc_gallery').owlCarousel({
            items: '1',
            navText: ["<img src='images/arrow-1.png' class='prev-arrow'>", "<img src='images/arrow-1.png' class='next-arrow'>"],
            loop: true
        });
        /*
        $('.pat_gallery').owlCarousel({
            items: '1',
            navText: ["<img src='images/arrow-2.png' class='prev-arrow'>", "<img src='images/arrow-2.png' class='next-arrow'>"],
            loop: true
        });*/


    }

    gsap.to(".seasons", { duration: 2, delay: 0.5, opacity: 1, ease: "none" });
    gsap.to(".date_text", { duration: 2, delay: 1.5, opacity: 1, ease: "none" });
    gsap.to(".header_bg", { duration: 2, opacity: 1, ease: "none" });
    gsap.to(".red_back", { duration: .5, delay: 0.8, left: 0 });
    $('#nav-icon4').click(function() {
        $(this).toggleClass('open');
        $('nav').toggleClass('open_nav')
    });

    $(window).scroll(function(e) {

        if ($(window).scrollTop() > $('.invest-main').offset().top - $(window).height() + 200) {
            $('.invest-main').css('opacity', '1')
        }
        if ($(window).scrollTop() > $('.invest-main').offset().top - $(window).height() + 100) {
            $('.invest-kodred').css('left', '10.5%')
        }

        if ($(window).scrollTop() > 300) {
            $('nav').addClass('scrolled')
        } else {
            $('nav').removeClass('scrolled')
        }
        if ($(window).scrollTop() < $('.trailer').offset().top) {
            $('.link').removeClass('active_link')
            $('.line').css({
                'width': 0,
                'left': 0
            })
        }
        if ($(window).scrollTop() < $('.doctor').offset().top) {
            $('#nav-icon4 span').css('background', '#fff')
        }
        if ($(window).scrollTop() > $('.trailer').offset().top - 70 /*&& $(window).scrollTop() < $('.doctors').offset().top*/ ) {
            $('.link').removeClass('active_link')
            $('nav a[to_scroll = ' + $('.trailer').attr('scroll_box') + ']').addClass('active_link')
            $('.line').css({
                'width': $('nav a[to_scroll = ' + $('.trailer').attr('scroll_box') + ']').width(),
                'left': $('nav a[to_scroll = ' + $('.trailer').attr('scroll_box') + ']').offset().left
            })
        }

        if ($(window).scrollTop() > $('.doctors').offset().top - 70 /*&& $(window).scrollTop() < $('.patients').offset().top*/ ) {
            $('.link').removeClass('active_link')
            $('nav a[to_scroll = ' + $('.doctors').attr('scroll_box') + ']').addClass('active_link')
            $('.line').css({
                'width': $('nav a[to_scroll = ' + $('.doctors').attr('scroll_box') + ']').width(),
                'left': $('nav a[to_scroll = ' + $('.doctors').attr('scroll_box') + ']').offset().left
            })
            $('#nav-icon4 span').css('background', '#000')
            $('video')[0].pause()
        }

        if ($(window).scrollTop() > $('.patients').offset().top - 70) {
            $('.link').removeClass('active_link')
            $('nav a[to_scroll = ' + $('.patients').attr('scroll_box') + ']').addClass('active_link')
            $('.line').css({
                'width': $('nav a[to_scroll = ' + $('.patients').attr('scroll_box') + ']').width(),
                'left': $('nav a[to_scroll = ' + $('.patients').attr('scroll_box') + ']').offset().left
            })
            $('#nav-icon4 span').css('background', '#fff')
        }
        if ($(window).scrollTop() > $('.investor').offset().top - 70) {
            $('.link').removeClass('active_link')
            $('nav a[to_scroll = ' + $('.investor').attr('scroll_box') + ']').addClass('active_link')
            $('.line').css({
                'width': $('nav a[to_scroll = ' + $('.investor').attr('scroll_box') + ']').width(),
                'left': $('nav a[to_scroll = ' + $('.investor').attr('scroll_box') + ']').offset().left
            })
            $('#nav-icon4 span').css('background', '#000')
        }
        if ($(window).scrollTop() > $('.about_footer').offset().top - 70) {
            $('.link').removeClass('active_link')
            $('nav a[to_scroll = ' + $('.about_footer').attr('scroll_box') + ']').addClass('active_link')
            $('.line').css({
                'width': $('nav a[to_scroll = ' + $('.about_footer').attr('scroll_box') + ']').width(),
                'left': $('nav a[to_scroll = ' + $('.about_footer').attr('scroll_box') + ']').offset().left
            })
        }
    })
})