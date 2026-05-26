//
function script5(int0: number, int1: number): void {
    if ((varbitplayer_38842 == 1)) {
        return;
    };
    var int2 = (IF_GETY(97648670) + IF_GETHEIGHT(97648670));
    if ((IF_GETHIDE(97648678) == 0)) {
        int2 = (int2 + (IF_GETY(97648641) + IF_GETHEIGHT(97648641)));
        if ((IF_GETHIDE(97648696) == 0)) {
            int2 = (int2 + (IF_GETY(97648647) + IF_GETHEIGHT(97648647)));
        };
    };
    int2 = (int2 + 2);
    if (((varbitplayer_22332 == 0) || ((varbitplayer_22332 == 1) && (varbitplayer_27170 >= 2)))) {
        IF_SETSIZE(200, int2, 0, 0, 97648653);
    } else {
        IF_SETSIZE(0, int2, 1, 0, 97648653);
    };
    var int0 = (int0 - (200 / 2));
    var int1 = (int1 - int2);
    int0 = MAX(MIN(int0, (IF_GETWIDTH(97517568) - 200)), 0);
    int1 = MAX(MIN(int1, (IF_GETHEIGHT(97517568) - 92)), 0);
    var int3 = 200;
    if ((varbitplayer_22332 == 1)) {
        if ((IF_HASSUBOVERLAY(97517572, 1490) == 0)) {
            IF_SETPOSITION(0, 0, 1, 0, 97648653);
        } else {
            int1 = MAX(0, (int1 - 10));
            IF_SETPOSITION(int0, int1, 0, 0, 97648653);
        };
    } else if ((IF_HASSUBOVERLAY(97517572, 1490) == 0)) {
        [int3, int2] = script8716(2008);
        int0 = (int0 + ((IF_GETWIDTH(97648653) - int3) / 2));
        script8387(int0, int1, int3, int2, 2008);
    } else {
        IF_SETPOSITION(int0, int1, 0, 0, 97648653);
    };
    if ((varbitplayer_19925 == 1)) {
        IF_SETHIDE(1, 97648669);
    } else {
        IF_SETHIDE(0, 97648669);
    };
    return;
}