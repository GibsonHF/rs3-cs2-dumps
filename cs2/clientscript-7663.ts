//
function script7663(int0: struct, int1: quest, int2: achievement): int {
    if ((((int0 == -1 as struct) && (int1 == -1 as quest)) && (int2 == -1 as achievement))) {
        return -1;
    };
    if (((int1 != -1 as quest) || (struct_getparam(int0, 1345) > 0))) {
        return 1;
    };
    if ((int2 != -1 as achievement)) {
        return 2;
    };
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 1346) > 0)) {
            return 8;
        };
        if ((int0 == 11585 as struct)) {
            return 7;
        };
        if ((struct_getparam(int0, 2235) > 0)) {
            return 4;
        };
        if ((struct_getparam(int0, 8072) != -1 as cs2enum)) {
            return 3;
        };
        if ((enum_hasoutput(73, 6452 as cs2enum, int0) == 1)) {
            return 6;
        };
    };
    return 0;
}