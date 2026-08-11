//
function script6292(int0: number): void {
    var int1 = 0;
    IF_SETSCROLLPOS(0, 0, comp(1296, 9));  // cruc_battle_overlay:name_scroll_layer
    int1 = (int0 * 12);
    IF_SETSCROLLSIZE(0, int1, comp(1296, 9));  // cruc_battle_overlay:name_scroll_layer
    if ((int1 > IF_GETHEIGHT(comp(1296, 9)))) {  // cruc_battle_overlay:name_scroll_layer
        IF_SETHIDE(false, comp(1296, 10));  // cruc_battle_overlay:scroll_layer
        script31(84934666, 84934665, 8383, 8380, 8381, 8382, 8375, 8374);
    } else {
        IF_SETHIDE(true, comp(1296, 10));  // cruc_battle_overlay:scroll_layer
    };
    return;
}