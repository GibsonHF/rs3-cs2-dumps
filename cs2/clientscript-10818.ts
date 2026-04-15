//
function script10818(int0: struct, int1: component): component {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = -1 as struct;
    var int5 = 100;
    var int6 = script11296(int0);
    if ((int1 == comp(-1, 65535))) {
        return comp(-1, 65535);
    };
    if ((IF_FIND(int1) == 1)) {
        int2 = cc_getparam(8100);
        int3 = int1;
        while (((int2 != comp(-1, 65535)) && (int5 > 0))) {
            if ((IF_FIND[1](int2) == 1)) {
                int4 = cc_getparam[1](8106);
                if (((int4 != -1 as struct) && (cc_getparam[1](8108) <= int6))) {
                    return int3;
                };
                int3 = int2;
                int2 = cc_getparam[1](8105);
            } else {
                int2 = comp(-1, 65535);
            };
            int5 = (int5 - 1);
        };
    };
    return int3;
}