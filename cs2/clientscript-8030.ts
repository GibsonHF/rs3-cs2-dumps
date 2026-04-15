//
function script8030(int0: int, int1: int): unknown_int {
    if ((int0 == int1)) {
        return 1;
    };
    var int2 = script8877(int0);
    var int3 = script8877(int1);
    if (((int2 != -1) && (int2 == int1))) {
        return 1;
    };
    if (((int3 != -1) && (int3 == int0))) {
        return 1;
    };
    return 0;
}