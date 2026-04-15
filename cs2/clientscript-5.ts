//
function script5(int0: int, int1: int): void {
    if ((varbitplayer_38842 == 1)) {
        return;
    };
    var int2 = (IF_GETY(comp(1490, 30)) + IF_GETHEIGHT(comp(1490, 30)));
    if ((IF_GETHIDE(comp(1490, 38)) == false)) {
        int2 = (int2 + (IF_GETY(comp(1490, 1)) + IF_GETHEIGHT(comp(1490, 1))));
        if ((IF_GETHIDE(comp(1490, 56)) == false)) {
            int2 = (int2 + (IF_GETY(comp(1490, 7)) + IF_GETHEIGHT(comp(1490, 7))));
        };
    };
    int2 = (int2 + 2);
    if (((varbitplayer_22332 == 0) || ((varbitplayer_22332 == 1) && (varbitplayer_27170 >= 2)))) {
        IF_SETSIZE(200, int2, 0, 0, comp(1490, 13));
    } else {
        IF_SETSIZE(0, int2, 1, 0, comp(1490, 13));
    };
    var int0 = (int0 - (200 / 2));
    var int1 = (int1 - int2);
    int0 = MAX(MIN(int0, (IF_GETWIDTH(comp(1488, 0)) - 200)), 0);
    int1 = MAX(MIN(int1, (IF_GETHEIGHT(comp(1488, 0)) - 92)), 0);
    var int3 = 200;
    if ((varbitplayer_22332 == 1)) {
        if ((IF_HASSUBOVERLAY(comp(1488, 4), 1490 as overlayinterface) == 0)) {
            IF_SETPOSITION(0, 0, 1, 0, comp(1490, 13));
        } else {
            int1 = MAX(0, (int1 - 10));
            IF_SETPOSITION(int0, int1, 0, 0, comp(1490, 13));
        };
    } else if ((IF_HASSUBOVERLAY(comp(1488, 4), 1490 as overlayinterface) == 0)) {
        [int3, int2] = script8716(2008);
        int0 = (int0 + ((IF_GETWIDTH(comp(1490, 13)) - int3) / 2));
        script8387(int0, int1, int3, int2, 2008);
    } else {
        IF_SETPOSITION(int0, int1, 0, 0, comp(1490, 13));
    };
    if ((varbitplayer_19925 == 1)) {
        IF_SETHIDE(true, comp(1490, 29));
    } else {
        IF_SETHIDE(false, comp(1490, 29));
    };
    return;
}