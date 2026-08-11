//
function script16961(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16961, int0), comp(1067, 23));  // trh186_overlay:genie_anim_timer
        return;
    };
    IF_SETHIDE(false, comp(1067, 21));  // trh186_overlay:genie_anim_layer
    IF_SETHIDE(false, comp(1067, 22));  // trh186_overlay:genie_anim_npc_layer
    IF_SETMODELANIM(35056 as seq, comp(1067, 79));  // trh186_overlay:genie_anim_npc
    IF_SETONTIMER(callback(script16962, 120), comp(1067, 23));  // trh186_overlay:genie_anim_timer
    return;
}