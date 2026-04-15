//
function script10503(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_45192 == 1)) {
        int0 = IF_GETSCROLLY(comp(517, 168));
        int1 = IF_GETSCROLLHEIGHT(comp(517, 168));
        int2 = IF_GETHEIGHT(comp(517, 168));
    } else {
        int0 = IF_GETSCROLLX(comp(517, 168));
        int1 = IF_GETSCROLLWIDTH(comp(517, 168));
        int2 = IF_GETWIDTH(comp(517, 168));
    };
    var int3 = false;
    if (((int2 == 0) || (int0 >= (int1 - int2)))) {
        int3 = true;
    };
    script13991(comp(517, 160), comp(-1, 65535), 28557 as struct, script6428(int0, 0));
    script13991(comp(517, 163), comp(-1, 65535), 28557 as struct, int3);
    return;
}