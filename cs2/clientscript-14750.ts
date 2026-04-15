//
function script14750(int0: component, int1: int, int2: int, int3: unknown_int): int {
    var int2 = (int2 + 8);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int3 == 1)) {
            CC_SETSIZE(8192, ((int2 - 2) - CC_GETY()), 2, 0);
        } else {
            CC_SETSIZE(0, ((int2 - 2) - CC_GETY()), 1, 0);
        };
    };
    return int2;
}