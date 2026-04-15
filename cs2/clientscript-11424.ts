//
function script11424(int0: component): component {
    var int1 = comp(-1, 65535);
    var int2 = 50;
    if ((int0 == comp(-1, 65535))) {
        return comp(-1, 65535);
    };
    if (((IF_FIND(int0) == 1) && (cc_getparam(8102) == true))) {
        int1 = cc_getparam(8100);
        while ((int2 > 0)) {
            if ((int1 == comp(-1, 65535))) {
                return comp(-1, 65535);
            };
            if ((IF_FIND[1](int1) == 1)) {
                if ((cc_getparam[1](8105) == comp(-1, 65535))) {
                    return int1;
                };
                int1 = cc_getparam[1](8105);
            } else {
                return comp(-1, 65535);
            };
            int2 = (int2 - 1);
        };
    };
    return int1;
}