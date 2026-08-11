//
function script16294(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16294, int0), comp(485, 44));  // trh181_overlay:gemfall_container
        return;
    };
    IF_SETHIDE(false, comp(485, 5));  // trh181_overlay:main_layer
    IF_SETHIDE(false, comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETHIDE(false, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    IF_SETONTIMER(callback(), comp(485, 44));  // trh181_overlay:gemfall_container
    IF_SETHIDE(true, comp(485, 9));  // trh181_overlay:gemfall_layer
    script16728(varbitplayer_22145, varbitplayer_27090);
    return;
}