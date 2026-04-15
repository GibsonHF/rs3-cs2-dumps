//
function script6841(int0: int, int1: int, int2: int): void {
    var int3 = IF_GETTRANS(comp(1356, 0));
    var int4 = -1;
    if ((int0 < int1)) {
        int4 = MIN(255, (int3 + int2));
    };
    if ((int0 > int1)) {
        int4 = MAX(0, (int3 - int2));
    };
    IF_SETTRANS(int4, comp(1356, 0));
    if ((int4 == int1)) {
        IF_SETONTIMER(callback(), comp(1356, 0));
    };
    return;
}