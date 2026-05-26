//
function script9506(int0: number, int1: number): void {
    if (((int0 == 0) || (int1 == 0))) {
        IF_SETHIDE(1, 49086526);
        return;
    };
    IF_SETHIDE(0, 49086526);
    if ((int0 > int1)) {
        var int0 = int1;
    };
    var int2 = IF_GETWIDTH(49086535);
    int2 = SCALE(int0, int1, int2);
    if ((int2 < 1)) {
        int2 = 1;
    };
    IF_SETSIZE(int2, 0, 0, 1, 49086469);
    IF_SETONMOUSEREPEAT(callback(script9508, -2147483645, -2147483647, -2147483646, int0), 49086526);
    return;
}