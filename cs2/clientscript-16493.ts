//
function script16493(): void {
    if ((script830() == 0)) {
        if ((IF_GETHIDE(comp(1253, 91)) == true)) {  // wheel_of_fortune:play_again_layer
            IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
        };
    } else {
        IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    };
    return;
}