//
function script8504(int0: int, int1: int): void {
    var int2 = script8552(int0);
    var int3 = script8553(int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int6] = script8548(int0);
    var int7 = script6431();
    var int1 = MAX(int1, IF_GETHEIGHT(int2));
    IF_SETSCROLLSIZE(0, int1, int2);
    var int8 = 0;
    if ((((int4 - int5) == int6) && ((int7 == false) || ((int7 == true) && (varbitplayer_29940 == 1))))) {
        int8 = (int1 - IF_GETHEIGHT(int2));
    } else if (((int5 == 0) && (int7 == true))) {
        int8 = 0;
    } else if ((int5 != 0)) {
        int8 = MAX(((int5 + int1) - int4), 0);
    };
    if ((int3 != comp(-1, 65535))) {
        if (((int7 == true) && (IF_GETHIDE(comp(276, 27)) == true))) {
            IF_SETHIDE(true, int3);
            if ((varbitplayer_29940 == 0)) {
                IF_SETSCROLLPOS(0, 0, int2);
            } else {
                IF_SETSCROLLPOS(0, (int1 - IF_GETHEIGHT(int2)), int2);
            };
            IF_SETONVERTICALSWIPE(callback(), int2);
            IF_SETONSCROLLWHEEL(callback(), int2);
        } else {
            IF_SETHIDE(false, int3);
            script72(int3, int2, int8);
            IF_SETONSCROLLWHEEL(callback(script36, int3, int2, -2147483646), int2);
            script14178(int3, int2);
        };
    } else if ((int0 == 1019)) {
        IF_SETSCROLLPOS(0, int1, int2);
    };
    script8549(int0, IF_GETSCROLLHEIGHT(int2), IF_GETSCROLLY(int2), IF_GETHEIGHT(int2));
    return;
}