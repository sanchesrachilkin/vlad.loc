/**
 * Created by magda on 03.01.2017.
 */
//Loader ?
//Scroll top
//Slider
//Parallax bg ?
//Validation form

$(document).on('ready', function() {
    FullScreenSliderInit();
});


function FullScreenSliderInit() {
    $('.slider-full-screen').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true
    });
}
