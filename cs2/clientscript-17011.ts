//
function script17011(): void {
    IF_SETHIDE(true, comp(1253, 459));  // wheel_of_fortune:splash_screen
    IF_SETHIDE(true, comp(1253, 7));  // wheel_of_fortune:splash_screen_graphic
    IF_SETHIDE(false, comp(1253, 68));  // wheel_of_fortune:countdown_layer
    IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETHIDE(false, comp(1253, 35));  // wheel_of_fortune:banner_layer
    if ((IF_GETHIDE(comp(1253, 447)) == true)) {  // wheel_of_fortune:trh_promo_info
        script16198(1, 82117067);
    };
    if ((struct_getparam(script16161(), 8712) == false)) {
        IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    };
    return;
}