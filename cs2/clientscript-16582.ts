//
function script16582(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16582, int0), comp(485, 11));  // trh181_overlay:gemfall_timer
        return;
    };
    IF_SETONTIMER(callback(), comp(485, 11));  // trh181_overlay:gemfall_timer
    IF_SETONTIMER(callback(), comp(1253, 5));  // wheel_of_fortune:background
    IF_SETHIDE(false, comp(485, 9));  // trh181_overlay:gemfall_layer
    return;
}