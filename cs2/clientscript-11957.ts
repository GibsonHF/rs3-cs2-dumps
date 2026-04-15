//
function script11957(int0: int, string0: string): void {
    var int1 = 0;
    if ((IF_FIND(comp(1108, 2)) == 1)) {
        if ((cc_getparam(5433) == -1)) {
            return;
        };
        if (((cc_getparam(5433) == int0) && (strcmp(varclient_5113, string0) == 0))) {
            return;
        };
        varclient_5113 = string0;
        cc_setparam(5433, int0);
        switch (int0) {
            case 0: {
                int1 = 0;
                break;
            }
            case 1: {
                int1 = cc_getparam(5434);
                break;
            }
            case 2: {
                int1 = cc_getparam(5435);
                break;
            }
            case 3: {
                int1 = cc_getparam(5436);
                break;
            }
            case 4: {
                int1 = cc_getparam(5437);
                break;
            }
            default: {
                return;
            }
        };
    } else {
        return;
    };
    var int2 = 0;
    var int3 = FRIEND_COUNT();
    var int4 = false;
    if ((int3 > 1)) {
        while ((int1 != -1)) {
            if ((CC_FIND(comp(1108, 7), int1) == 1)) {
                CC_SETPOSITION(0, int2, 0, 0);
            };
            if ((CC_FIND(comp(1108, 5), int1) == 1)) {
                CC_SETPOSITION(0, int2, 0, 0);
            };
            if ((CC_FIND(comp(1108, 6), int1) == 1)) {
                CC_SETPOSITION(0, int2, 0, 0);
                switch (int0) {
                    case 0: {
                        if ((++int1 >= int3)) {
                            int1 = -1;
                        };
                        break;
                    }
                    case 1: {
                        int1 = cc_getparam(5434);
                        break;
                    }
                    case 2: {
                        int1 = cc_getparam(5435);
                        break;
                    }
                    case 3: {
                        int1 = cc_getparam(5436);
                        break;
                    }
                    case 4: {
                        int1 = cc_getparam(5437);
                        break;
                    }
                    default: {
                        return;
                    }
                };
                int4 = CC_GETHIDE();
            } else {
                return;
            };
            if ((int4 == false)) {
                int2 = (int2 + 16);
            };
        };
    };
    if ((IF_GETSCROLLY(comp(1108, 27)) > int2)) {
        IF_SETSCROLLPOS(0, 0, comp(1108, 27));
    };
    if ((int2 > IF_GETHEIGHT(comp(1108, 27)))) {
        IF_SETSCROLLSIZE(0, int2, comp(1108, 27));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1108, 27));
    };
    script7791(comp(1108, 3), comp(1108, 27));
    return;
}