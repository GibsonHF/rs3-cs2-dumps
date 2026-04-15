//
function script8372(int0: component, int1: int): int {
    if ((int0 == comp(-1, 65535))) {
        return -1;
    };
    var int2 = 0;
    var int3 = script8374(int0);
    while ((int2 < int3)) {
        if (((CC_FIND(int0, script8373(int2)) == 1) && (cc_getparam(3536) == int1))) {
            return int2;
        };
        int2 = (int2 + 1);
    };
    return -1;
}