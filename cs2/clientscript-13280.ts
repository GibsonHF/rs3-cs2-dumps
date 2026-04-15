//
function script13280(int0: struct): int {
    if ((int0 == -1 as struct)) {
        return -65535;
    };
    if ((struct_getparam(int0, 6413) <= -1)) {
        if ((struct_getparam(int0, 1268) == 4090)) {
            return -65535;
        };
        script12478(`Struct ID is -1 - ${struct_getparam(int0, 6410)} [${struct_getparam(int0, 6411)}] ${inttostring(struct_getparam(int0, 1268), 10)} ${struct_getparam(int0, 1266)} ${struct_getparam(int0, 1273)}`);
        return -1;
    };
    var int1 = 0;
    var int2 = 0;
    if ((struct_getparam(int0, 6416) == 1)) {
        return script13567(int0);
    };
    int1 = script13281(int0);
    if ((int1 == -1)) {
        return -1;
    };
    int2 = script13569(int0);
    if ((int0 == 36841 as struct)) {
        int1 = TESTBIT(int1, 18);
        int2 = 1;
    };
    if ((int1 >= int2)) {
        return -2;
    };
    if ((script13290(int0) == 0)) {
        return -1;
    };
    if ((int1 > 0)) {
        if ((struct_getparam(int0, 6424) == 1)) {
            int1 = SCALE(BITCOUNT(int1), BITCOUNT(int2), 10000);
        } else {
            int1 = SCALE(int1, int2, 10000);
        };
        if ((int1 >= 10000)) {
            return -2;
        };
        if ((script12477() < struct_getparam(int0, 7895))) {
            return -3;
        };
        return int1;
    };
    if ((script12477() < struct_getparam(int0, 7895))) {
        return -3;
    };
    return 0;
}