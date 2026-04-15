//
function script19523(): void {
    var int0 = 44;
    if ((script6431() == true)) {
        int0 = 52;
    };
    var int1 = 8;
    var int2 = 5;
    var int3 = IF_GETWIDTH(comp(1313, 74));
    var int4 = IF_GETHEIGHT(comp(1313, 74));
    var int5 = 0;
    var int6 = script19579();
    while ((int5 <= int6)) {
        if (((CC_FIND(comp(1313, 75), int5) == 1) && (CC_FIND[1](comp(1313, 90), int5) == 1))) {
            CC_SETPOSITION(int1, int2, 0, 0);
            CC_SETHIDE(false);
            CC_SETPOSITION[1]((int1 - 8), int2, 0, 0);
            CC_SETHIDE[1](false);
            int1 = (int1 + int0);
            if (((int1 + 36) >= int3)) {
                int1 = 8;
                int2 = (int2 + int0);
            };
        };
        int5 = (int5 + 1);
    };
    if ((int1 != 8)) {
        int1 = 8;
        int2 = (int2 + int0);
    };
    script19524(int1, (int2 - int0), 0, 1, 0);
    while ((int5 < 200)) {
        if ((CC_FIND(comp(1313, 75), int5) == 1)) {
            CC_SETHIDE(true);
        };
        int5 = (int5 + 1);
    };
    IF_SETSCROLLPOS(0, MIN(varclient_8168, int2), comp(1313, 74));
    script19544(int2);
    return;
}