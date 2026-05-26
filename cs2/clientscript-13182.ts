//
function script13182(): void {
    var int0 = -1;
    var int1 = IF_GETWIDTH(comp(1843, 251));
    var int2 = MODULO((4 - MODULO(int1, 4)), 4);
    if ((int2 < 3)) {
        int2 = (int2 + 4);
    };
    int1 = (((int1 + int2) / 4) - int2);
    var int3 = IF_GETHEIGHT(comp(1843, 251));
    int3 = (int3 - int2);
    var int4 = (MODULO(int3, 2) + int2);
    int3 = (int3 / 2);
    var int5 = -1;
    var int6 = enum_getvalue(0, 73, 8601 as cs2enum, ++int5);
    var int7 = comp(-1, 65535);
    while ((int6 != -1 as struct)) {
        int7 = struct_getparam(int6, 6397);
        if (((int7 != comp(-1, 65535)) && (IF_FIND(int7) == 1))) {
            CC_SETSIZE((int1 - (2 * 2)), (int3 - (2 * 2)), 0, 0);
            CC_SETPOSITION((((int2 + int1) * MODULO(int5, 4)) + 2), (((int4 + int3) * (int5 / 4)) + 2), 0, 0);
            cc_setparam(6361, -1);
            cc_setparam(6360, -1);
            cc_setparam(5945, -1);
            CC_SETPARAM_STRING(2533, "");
            CC_SETHIDE(true);
            int6 = enum_getvalue(0, 73, 8601 as cs2enum, ++int5);
        } else {
            int6 = -1 as struct;
        };
    };
    return;
}