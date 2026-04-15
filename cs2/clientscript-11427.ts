//
function script11427(int0: component, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int2 = cc_getparam(8103);
        int3 = cc_getparam(8105);
        cc_setparam(8103, -1);
        cc_setparam(8105, -1);
        if (((int2 != comp(-1, 65535)) && (IF_FIND[1](int2) == 1))) {
            if ((cc_getparam[1](8102) == true)) {
                if ((int1 == 1)) {
                    cc_setparam[1](8100, int3);
                } else {
                    cc_setparam[1](8101, int3);
                };
            } else {
                cc_setparam[1](8105, int3);
            };
        };
        if (((int3 != comp(-1, 65535)) && (IF_FIND[1](int3) == 1))) {
            cc_setparam[1](8103, int2);
        };
    };
    return;
}