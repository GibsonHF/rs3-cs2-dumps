//
function script11885(int0: int, int1: int, int2: int, int3: component): void {
    var int4 = 38;
    if ((int3 == comp(1742, 78))) {
        if ((SCALE(int0, 500, 10) < int2)) {
            return;
        };
        int4 = 19;
    } else if ((SCALE(int1, 1000, 10) < int2)) {
        int4 = 19;
    };
    var int5 = script11859(int2, int3);
    if (((int5 != comp(-1, 65535)) && (IF_FIND(int5) == 1))) {
        IF_SETHIDE(false, int5);
        IF_SETSIZE(3, 1, 0, 0, int5);
        IF_SETONTIMER(callback(script11887, int5, int3, int4), int5);
    };
    return;
}