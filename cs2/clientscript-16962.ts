//
function script16962(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16962, int0), comp(1067, 23));  // trh186_overlay:genie_anim_timer
        return;
    };
    IF_SETONTIMER(callback(), comp(1067, 23));  // trh186_overlay:genie_anim_timer
    IF_SETHIDE(true, comp(1067, 21));  // trh186_overlay:genie_anim_layer
    IF_SETHIDE(false, comp(1067, 17));  // trh186_overlay:genie_layer
    return;
}