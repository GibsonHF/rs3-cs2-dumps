//
function script11563(): void {
    if ((varbitplayer_28194 < 60)) {
        varbitplayer_28194 = (varbitplayer_28194 + 1);
    } else {
        IF_SETHIDE(true, comp(1631, 63));  // trh55_world_event:astromancer_sparkle_1
        IF_SETHIDE(true, comp(1631, 64));  // trh55_world_event:astromancer_sparkle_2
        IF_SETHIDE(true, comp(1631, 65));  // trh55_world_event:astromancer_sparkle_3
        IF_SETHIDE(true, comp(1631, 66));  // trh55_world_event:astromancer_sparkle_4
        IF_SETONTIMER(callback(), comp(1631, 66));  // trh55_world_event:astromancer_sparkle_4
    };
    return;
}