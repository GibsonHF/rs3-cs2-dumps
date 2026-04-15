//
function script13392(int0: int, int1: int, int2: int, int3: int): void {
    if ((script6431() == true)) {
        varplayer_7989 = 1;
        if ((varclient_6403 != 0)) {
            varplayer_7989 = 2;
        };
    };
    var int4 = enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var [int0, int1, int5, int6, int7, int8, int9, int10] = script13393(int0, int1, int2, int3, int4);
    IF_SETSIZE((int5 + int8), MAX(int6, int9), 0, 0, comp(1322, 5));
    IF_SETPOSITION(int0, int1, 0, 0, comp(1322, 5));
    if (((int3 > MAX(3, varplayer_7990)) && (int10 == 0))) {
        script13396(int0, int1, int5, int6, int7, int3, int4);
    } else {
        if ((int6 != int7)) {
            int5 = (int5 - 16);
        };
        script13395(int0, int1, int5, int6, int7, int2, int4);
    };
    if ((script13749() == false)) {
        IF_SETONMOUSELEAVE(callback(script14227), comp(1322, 2));
        IF_SETHIDE(0, 86638594);
        IF_SETSIZE(((int5 + int8) + (2 * 31)), ((int6 + int9) + (2 * 31)), 0, 0, 86638594);
        IF_SETPOSITION((int0 - 31), (int1 - 31), 0, 0, 86638594);
    };
    return;
}