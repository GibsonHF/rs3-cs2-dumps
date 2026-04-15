//
function script6077(int0: int, int1: obj, int2: inv): int {
    if ((int1 == -1 as obj)) {
        return 0;
    };
    var int1 = OC_UNCERT(int1);
    var int3 = enum_getvalue(33, 0, 732 as cs2enum, int1);
    if (((int0 == 2) && (int3 != -1))) {
        return int3;
    };
    int3 = enum_getvalue(33, 0, 1441 as cs2enum, int1);
    if (((int3 != -1) && (int3 > 0))) {
        return int3;
    };
    var int4 = 0;
    var int5 = 30;
    if ((script12649(int0) == 1)) {
        int5 = script12652();
        if ((int2 != -1 as inv)) {
            if ((enum_getvalue(39, 0, 11746 as cs2enum, int2) > 0)) {
                int5 = (int5 + enum_getvalue(39, 0, 11746 as cs2enum, int2));
            };
            if ((enum_getvalue(39, 0, 11747 as cs2enum, int2) > 0)) {
                int4 = (int4 + enum_getvalue(39, 0, 11747 as cs2enum, int2));
            };
        };
    };
    if (((int0 == 5) && (item_getparam(int1, 2195) == 35))) {
        int5 = 0;
    };
    int3 = MAX(1, (SCALE(script17369(int1), 100, int5) + int4));
    return int3;
}