//
function script4754(int0: component, int1: int, int2: unknown_int): int {
    var int3 = 0;
    if ((CC_FIND(int0, 1) == 1)) {
        int3 = (CC_GETHEIGHT() + 10);
    };
    var int4 = (IF_GETHEIGHT(int0) - int3);
    var int1 = (int4 * (int1 / MAX(1, int4)));
    if ((int2 == 0)) {
        int1 = (int1 + int4);
    } else {
        int1 = (int1 - int4);
    };
    return int1;
}