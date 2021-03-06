$(document).ready(function () {
    //    comp top animation

    $('.menu-icon').on("click", function () {
        $("nav ul").toggleClass("showing");
    });

    $(window).on("scroll", function () {
        var wwidth = $(window).width();
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
            //        $('ul li:nth-child(3)').addClass('logo-rotate');
            $('ul li a span:nth-child(2)').addClass('rotate');
            $('.change-color').css('color', 'white');
        } else if (wwidth > 780) {
            $('nav').removeClass('black');
            //         $('ul li:nth-child(3)').removeClass('logo-rotate');
            $('ul li a span:nth-child(2)').removeClass('rotate');
            $('.change-color').css('color', 'black');
        }
    });

    //    portfolio button

    $('.b-show').on("click", function () {
        $('.b-show').toggleClass('p-show');
        $('.p-height').css('height', 'auto');
    })


    //    typing effect

    $(function () {
        $('.typing').typed({
            strings: ["Junior Front-End Developer"],
            typeSpeed: 100,
            backSpeed: 70,
            cursorChar: '_',
            loop: false,
            loopCount: 10,
            shuffle: true,
        });
    });
});

//date in footer

function newDate() {
    let d = new Date();
    let element = d.getFullYear();
    document.querySelector('.year').innerHTML = element;
}

newDate();

//map
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 54.495278,
            lng: 18.541828
        },
        zoom: 12,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
          ]
    });
}
