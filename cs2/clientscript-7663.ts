//
function script7663(int0: number, int1: number, int2: number): number {
    if ((((int0 == -1) && (int1 == -1)) && (int2 == -1))) {
        return -1;
    };
    if (((int1 != -1) || (struct_getparam(int0, 1345) > 0))) {
        return 1;
    };
    if ((int2 != -1)) {
        return 2;
    };
    if ((int0 != -1)) {
        if ((struct_getparam(int0, 1346) > 0)) {
            return 8;
        };
        if ((int0 == 11585)) {
            return 7;
        };
        if ((struct_getparam(int0, 2235) > 0)) {
            return 4;
        };
        if ((struct_getparam(int0, 8072) != -1 as cs2enum)) {
            return 3;
        };
        if ((enum_hasoutput(73, 6452, int0) == 1)) {
            return 6;
        };
    };
    return 0;
}