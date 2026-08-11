//
function script13615(int0: number, int1: number): void {
    var int2 = (int0 * (60 + 2));
    if ((varbitplayer_37059 == 1)) {
        int2 = (int0 * (35 + 2));
    };
    if ((int2 < IF_GETHEIGHT(comp(1851, 40)))) {  // achievements_sub:build_layer
        int2 = IF_GETHEIGHT(comp(1851, 40));  // achievements_sub:build_layer
    };
    IF_SETSCROLLSIZE(0, int2, comp(1851, 40));  // achievements_sub:build_layer
    if ((int1 == 1)) {
        IF_SETSCROLLPOS(0, 0, comp(1851, 40));  // achievements_sub:build_layer
    } else if ((int1 == 2)) {
        IF_SETSCROLLPOS(0, varclient_5992, comp(1851, 40));  // achievements_sub:build_layer
    };
    script7791(121307175, 121307176);
    return;
}