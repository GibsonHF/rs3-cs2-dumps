//
function script12710(): void {
    if ((varbitplayer_27907 > 0)) {
        IF_SETHIDE(false, comp(1620, 3));  // trh54_guaranteed_quality:activate_button_disabled_layer
    } else if (((varbitplayer_27908 < 5) || (varbitplayer_33688 == 1))) {
        IF_SETHIDE(false, comp(1620, 3));  // trh54_guaranteed_quality:activate_button_disabled_layer
    } else {
        IF_SETHIDE(true, comp(1620, 3));  // trh54_guaranteed_quality:activate_button_disabled_layer
    };
    return;
}