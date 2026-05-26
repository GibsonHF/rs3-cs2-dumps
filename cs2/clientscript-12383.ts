//
function script12383(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    if ((int0 < (int1 / 2))) {
        int5 = SCALE(int4, (int1 / 2), int0);
        IF_SETSIZE((int2 + int5), int3, 0, 0, 114425927);
    } else {
        int5 = SCALE(int4, int1, (int0 - (int1 / 2)));
        IF_SETSIZE((int2 - int5), int3, 0, 0, 114425927);
    };
    if ((int0 == int1)) {
        IF_SETONTIMER(callback(), 114425927);
    } else {
        IF_SETONTIMER(callback(script12383, (int0 + 1), int1, int2, int3, int4), 114425927);
    };
    return;
}