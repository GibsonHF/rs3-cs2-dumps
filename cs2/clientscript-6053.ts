//
function script6053(int0: component, int1: int, int2: int): void {
    var int3 = 425;
    var int4 = SCALE(varplayer_679, 1000, 100);
    var int5 = SCALE(IF_GETWIDTH(int0), int3, 100);
    var int6 = 3;
    var int7 = comp(640, 8);
    var int8 = 0;
    var int9 = comp(640, 9);
    if ((IF_GETLAYER(int0) == comp(1616, 1))) {
        int7 = comp(1616, 6);
        int9 = comp(1616, 7);
    };
    var int2 = int1;
    var int1 = script42(IF_GETHIDE(int7));
    if ((int5 != int4)) {
        if ((int5 < int4)) {
            IF_SETSIZE(MIN((IF_GETWIDTH(int0) + int6), int3), IF_GETHEIGHT(int0), 0, 0, int0);
            int8 = 1;
            IF_SETHIDE(false, int7);
            IF_SETPOSITION(((IF_GETWIDTH(int0) + IF_GETX(int0)) - (IF_GETWIDTH(int7) - 3)), IF_GETY(int7), 0, 0, int7);
            IF_SETPOSITION((IF_GETX(int7) + 6), IF_GETY(int9), 0, 0, int9);
        } else {
            int6 = 10;
            IF_SETSIZE(MAX((IF_GETWIDTH(int0) - int6), 1), IF_GETHEIGHT(int0), 0, 0, int0);
            int8 = 0;
            IF_SETHIDE(true, int7);
            IF_SETHIDE(true, int9);
        };
        if (((script42(IF_GETHIDE(int7)) != int1) && (int1 != int2))) {
            IF_SETONTIMER(callback(), int0);
            IF_SETHIDE(1, int7);
            return;
        };
        int5 = SCALE(IF_GETWIDTH(int0), int3, 100);
        if ((int5 != int4)) {
            IF_SETONTIMER(callback(script6053, int0, int1, int2), int0);
            return;
        };
    };
    if ((varplayer_679 < 1)) {
        IF_SETSIZE(1, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    IF_SETONTIMER(callback(), int0);
    IF_SETHIDE(1, int7);
    if (((int8 == 1) && (varbitplayer_1902 < varplayer_679))) {
        IF_SETHIDE(false, int9);
        IF_SETTRANS(255, int9);
        IF_SETONTIMER(callback(script6054, -2147483645, 0), int9);
    };
    return;
}