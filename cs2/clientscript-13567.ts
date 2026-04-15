//
function script13567(int0: struct): int {
    var int1 = 0;
    var int2 = -1 as cs2enum;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    int2 = struct_getparam(int0, 6426);
    if ((int2 == -1 as cs2enum)) {
        return -1;
    };
    if ((script3983(int0) == 1)) {
        return -2;
    };
    int4 = ENUM_GETOUTPUTCOUNT(int2);
    int6 = struct_getparam(int0, 6836);
    while ((int3 < int4)) {
        int1 = script13280(enum_getvalue(0, 73, int2, int3));
        int7 = struct_getparam(enum_getvalue(0, 73, int2, int3), 7895);
        switch (int1) {
            case -1: {
                if (((int7 > 0) && (int7 > DATE_RUNEDAY()))) {
                    int8 = (int8 + 1);
                } else {
                    return -1;
                };
                break;
            }
            case 0: {
                if (((int7 > 0) && (int7 > DATE_RUNEDAY()))) {
                    int8 = (int8 + 1);
                };
                break;
            }
            case -3: {
                int8 = (int8 + 1);
                break;
            }
            case -2: {
                int5 = (int5 + 1);
                break;
            }
            default: {
                if (((int7 > 0) && (int7 > DATE_RUNEDAY()))) {
                    int8 = (int8 + 1);
                };
                break;
            }
        };
        int3 = (int3 + 1);
    };
    if ((int6 > 0)) {
        if ((int5 >= int6)) {
            return -2;
        };
        if (((int5 + int8) >= int6)) {
            return -3;
        };
    } else {
        if ((int5 == int4)) {
            return -2;
        };
        if (((int5 + int8) == int4)) {
            return -3;
        };
    };
    return SCALE(int5, int4, 10000);
}