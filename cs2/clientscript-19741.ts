//
function script19741(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = IF_GETWIDTH(int0);
    if ((int5 > 1)) {
        int5 = MAX(1, (int5 - 25));
        IF_SETSIZE(int5, IF_GETHEIGHT(int0), 0, 0, int0);
        IF_SETONTIMER(callback(script19741, int0, int1, int2, int3, int4), int0);
    } else {
        IF_SETGRAPHIC(enum_getvalue(0, 23, 6651 as cs2enum, int1), int0);
        IF_SETONTIMER(callback(script19742, int0, int2, int3, int4), int0);
    };
    return;
}