//
function script10503(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_45192 == 1)) {
        int0 = IF_GETSCROLLY(comp(517, 168));  // bank:tabs_dynamic
        int1 = IF_GETSCROLLHEIGHT(comp(517, 168));  // bank:tabs_dynamic
        int2 = IF_GETHEIGHT(comp(517, 168));  // bank:tabs_dynamic
    } else {
        int0 = IF_GETSCROLLX(comp(517, 168));  // bank:tabs_dynamic
        int1 = IF_GETSCROLLWIDTH(comp(517, 168));  // bank:tabs_dynamic
        int2 = IF_GETWIDTH(comp(517, 168));  // bank:tabs_dynamic
    };
    var int3 = 0;
    if (((int2 == 0) || (int0 >= (int1 - int2)))) {
        int3 = 1;
    };
    script13991(33882272, -1, 28557, script6428(int0, 0));
    script13991(33882275, -1, 28557, int3);
    return;
}