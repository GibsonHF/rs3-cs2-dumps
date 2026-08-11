//
function script11562(): void {
    if ((varbitplayer_28209 == 0)) {
        return;
    };
    var int0 = -1;
    IF_SETHIDE(false, comp(1631, 49));  // trh55_world_event:astromancer_layer
    IF_SETGRAPHIC(25658 as graphic, comp(1631, 51));  // trh55_world_event:astromancer_graphic_unlocked
    int0 = 25659;
    IF_SETONMOUSEOVER(callback(script11561, 5, int0), comp(1631, 51));  // trh55_world_event:astromancer_graphic_unlocked
    int0 = 25658;
    IF_SETONMOUSELEAVE(callback(script11561, 5, int0), comp(1631, 51));  // trh55_world_event:astromancer_graphic_unlocked
    IF_SETONTIMER(callback(script11032), comp(1631, 3));  // trh55_world_event:astromancer_progress_bar_layer
    IF_SETTEXT(inttostring(varbitplayer_28193, 10), comp(1631, 52));  // trh55_world_event:astromancer_amount
    script11564();
    if ((IF_GETHIDE(comp(1631, 63)) == false)) {  // trh55_world_event:astromancer_sparkle_1
        IF_SETONTIMER(callback(script11563), comp(1631, 66));  // trh55_world_event:astromancer_sparkle_4
    };
    return;
}