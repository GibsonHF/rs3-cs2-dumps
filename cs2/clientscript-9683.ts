//
function script9683(int0: number, int1: number): void {
    if ((int1 <= 0)) {
        IF_SETMODELANIM(-1 as seq, int0);
        IF_SETMODELANIM(22645 as seq, int0);
        IF_SETONTIMER(callback(), int0);
    } else {
        var int1 = (int1 - 1);
        if ((((int0 == comp(1585, 6) /*trh45_overlay:chest_model_6*/) && (varbitplayer_26873 >= 5)) && (IF_GETHIDE(comp(1585, 16) /*trh45_overlay:crate_graphics_layer*/) == true))) {
            IF_SETHIDE(false, comp(1585, 16));  // trh45_overlay:crate_graphics_layer
        };
        IF_SETONTIMER(callback(script9683, int0, int1), int0);
    };
    return;
}