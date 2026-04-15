//
function script15428(int0: struct, int1: component): component {
    var int2 = comp(-1, 65535);
    var int3 = 50;
    if ((int1 == comp(-1, 65535))) {
        return comp(-1, 65535);
    };
    if ((IF_FIND(int1) == 1)) {
        int2 = cc_getparam(8100);
        while (((int2 != comp(-1, 65535)) && (int3 > 0))) {
            if ((IF_FIND[1](int2) == 1)) {
                if ((cc_getparam[1](8106) == int0)) {
                    return int2;
                };
                int2 = cc_getparam[1](8105);
            } else {
                int2 = comp(-1, 65535);
            };
            int3 = (int3 - 1);
        };
    };
    return comp(-1, 65535);
}