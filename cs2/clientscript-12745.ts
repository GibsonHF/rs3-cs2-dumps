//
function script12745(): void {
    var int0 = IF_GETWIDTH(117047309);
    var int1 = (IF_GETWIDTH(117047306) - 2);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script12742();
    var int5 = (int1 / int4);
    var int6 = SCALE(int1, int4, int3);
    if ((int0 < int6)) {
        int2 = MIN((int0 + 2), int6);
    } else if ((int0 > int6)) {
        int2 = MAX((int0 - 2), int6);
    } else {
        IF_SETONTIMER(callback(), 117047309);
        return;
    };
    if ((int2 == 0)) {
        int2 = 1;
        IF_SETONTIMER(callback(), 117047309);
    };
    IF_SETSIZE(int2, 0, 0, 1, 117047309);
    return;
}