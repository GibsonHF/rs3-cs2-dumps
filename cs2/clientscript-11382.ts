//
function script11382(): void {
    var int0 = IF_GETWIDTH(comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
    var int1 = (IF_GETWIDTH(comp(1620, 23)) - 4);  // trh54_guaranteed_quality:progress_bar_background
    var int2 = 0;
    var int3 = (int1 / 24);
    var int4 = (varbitplayer_27908 * int3);
    if ((int0 < int4)) {
        int2 = MIN((int0 + 1), int4);
    } else if ((int0 > int4)) {
        int2 = MAX((int0 - 2), int4);
    } else {
        IF_SETONTIMER(callback(), comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
    };
    if ((int2 < (int3 * 5))) {
        IF_SETGRAPHIC(2291 as graphic, comp(1620, 8));  // trh54_guaranteed_quality:gem_container_yellow
        IF_SETGRAPHIC(378 as graphic, comp(1620, 9));  // trh54_guaranteed_quality:gem_indicator_yellow
        IF_SETGRAPHIC(33110 as graphic, comp(1620, 10));  // trh54_guaranteed_quality:gem_icon_yellow
    } else {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 8));  // trh54_guaranteed_quality:gem_container_yellow
        IF_SETGRAPHIC(379 as graphic, comp(1620, 9));  // trh54_guaranteed_quality:gem_indicator_yellow
        IF_SETGRAPHIC(33109 as graphic, comp(1620, 10));  // trh54_guaranteed_quality:gem_icon_yellow
    };
    if ((int2 < (int3 * (5 + 8)))) {
        IF_SETGRAPHIC(2291 as graphic, comp(1620, 31));  // trh54_guaranteed_quality:gem_container_orange
        IF_SETGRAPHIC(378 as graphic, comp(1620, 32));  // trh54_guaranteed_quality:gem_indicator_orange
        IF_SETGRAPHIC(33106 as graphic, comp(1620, 33));  // trh54_guaranteed_quality:gem_icon_orange
    } else {
        IF_SETGRAPHIC(2290 as graphic, comp(1620, 31));  // trh54_guaranteed_quality:gem_container_orange
        IF_SETGRAPHIC(379 as graphic, comp(1620, 32));  // trh54_guaranteed_quality:gem_indicator_orange
        IF_SETGRAPHIC(33105 as graphic, comp(1620, 33));  // trh54_guaranteed_quality:gem_icon_orange
    };
    IF_SETSIZE(int2, 18, 0, 0, comp(1620, 24));  // trh54_guaranteed_quality:progress_bar_fill
    return;
}