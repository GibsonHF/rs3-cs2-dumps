//
function script11426(int0: component, int1: component, int2: unknown_int): void {
    var int3 = comp(-1, 65535);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    if ((IF_FIND(int1) == 1)) {
        if ((int0 == comp(-1, 65535))) {
            return;
        };
        if ((IF_FIND[1](int0) == 1)) {
            if ((cc_getparam(8102) == true)) {
                if ((int2 == 1)) {
                    int3 = cc_getparam(8100);
                } else {
                    int3 = cc_getparam(8101);
                };
            } else {
                int3 = cc_getparam(8105);
            };
            if ((cc_getparam(8102) == true)) {
                if ((int2 == 1)) {
                    cc_setparam(8100, int0);
                } else {
                    cc_setparam(8101, int0);
                };
            } else {
                cc_setparam(8105, int0);
            };
            cc_setparam[1](8103, int1);
            cc_setparam[1](8105, int3);
            if ((int3 == comp(-1, 65535))) {
                return;
            };
            if ((IF_FIND(int3) == 1)) {
                cc_setparam(8103, int0);
            };
        };
    };
    return;
}