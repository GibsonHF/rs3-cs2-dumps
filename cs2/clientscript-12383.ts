//
function script12383(int0: int, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = 0;
    if ((int0 < (int1 / 2))) {
        int5 = SCALE(int4, (int1 / 2), int0);
        IF_SETSIZE((int2 + int5), int3, 0, 0, comp(1746, 71));
    } else {
        int5 = SCALE(int4, int1, (int0 - (int1 / 2)));
        IF_SETSIZE((int2 - int5), int3, 0, 0, comp(1746, 71));
    };
    if ((int0 == int1)) {
        IF_SETONTIMER(callback(), comp(1746, 71));
    } else {
        IF_SETONTIMER(callback(script12383, (int0 + 1), int1, int2, int3, int4), 114425927);
    };
    return;
}