//
function script11425(int0: component): component {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    if ((int0 == comp(-1, 65535))) {
        return comp(-1, 65535);
    };
    if (((IF_FIND(int0) == 1) && (cc_getparam(8102) == true))) {
        int1 = cc_getparam(8101);
        if ((int1 == comp(-1, 65535))) {
            return comp(-1, 65535);
        };
        if ((IF_FIND[1](int1) == 1)) {
            int2 = cc_getparam[1](8105);
            cc_setparam[1](8103, -1);
            cc_setparam[1](8105, -1);
            cc_setparam(8101, int2);
            if ((IF_FIND[1](int2) == 1)) {
                cc_setparam[1](8103, int0);
            };
        };
    };
    return int1;
}