//
function script13589(int0: struct): unknown_int {
    var int1 = struct_getparam(int0, 8072);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((int1 == -1 as cs2enum)) {
        return 0;
    };
    if ((struct_getparam(int0, 1294) == 62)) {
        if ((script13290(enum_getvalue(0, 73, int1, 0)) == 0)) {
            return 1;
        };
    } else if ((script13290(int0) == 0)) {
        return 1;
    };
    if (((varbitplayer_48342 == 1) && (varbitplayer_48343 == 1))) {
        [int2, int3, int4] = script8218(int1);
        if ((int2 >= int3)) {
            return 1;
        };
    } else if ((varbitplayer_48343 == 1)) {
        [int2, int3, int4] = script8219(int1);
        if ((int2 >= int3)) {
            return 1;
        };
    } else if ((varbitplayer_48342 == 1)) {
        [int2, int3, int4] = script13289(int1);
        if ((int2 >= int3)) {
            return 1;
        };
    };
    return 0;
}