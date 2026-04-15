//
function script2470(int0: component, int1: int, string0: string): void {
    var int2 = 0;
    if ((IF_FIND(int0) == 1)) {
        if ((cc_getparam(5433) == -1)) {
            return;
        };
        if (((cc_getparam(5433) == int1) && (strcmp(varclient_5113, string0) == 0))) {
            return;
        };
        varclient_5113 = string0;
        cc_setparam(5433, int1);
        switch (int1) {
            case 0: {
                int2 = 0;
                script3515(23787);
                break;
            }
            case 1: {
                int2 = cc_getparam(5434);
                script3515(23784);
                break;
            }
            case 2: {
                int2 = cc_getparam(5435);
                script3515(23789);
                break;
            }
            default: {
                return;
            }
        };
    } else {
        return;
    };
    var int3 = 5;
    var int4 = FRIEND_COUNT();
    var int5 = false;
    var int6 = script2968(int0);
    var int7 = script3098(int0);
    var int8 = script3099(int0);
    var int9 = script10588(int0);
    var int10 = script10589(int0);
    var int11 = script11297(int0);
    var int12 = 0;
    var int13 = script6431();
    var int14 = (4 + enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics));
    var int15 = 1;
    if ((int13 == true)) {
        int14 = (10 + enum_getvalue(25, 0, 8549 as cs2enum, 32 as fontmetrics));
        int15 = 5;
    };
    while ((int2 != -1)) {
        int12 = (int12 + 1);
        if ((CC_FIND(int9, int2) == 1)) {
            CC_SETPOSITION(0, int3, 0, 0);
        };
        if ((CC_FIND(int10, int2) == 1)) {
            CC_SETPOSITION(CC_GETX(), int3, 0, 0);
        };
        if ((CC_FIND(int11, int2) == 1)) {
            CC_SETPOSITION(2, (int3 + int15), 0, 0);
        };
        if ((CC_FIND(int8, int2) == 1)) {
            CC_SETPOSITION(0, int3, 0, 0);
            switch (int1) {
                case 0: {
                    if ((++int2 >= int4)) {
                        int2 = -1;
                    };
                    break;
                }
                case 1: {
                    int2 = cc_getparam(5434);
                    break;
                }
                case 2: {
                    int2 = cc_getparam(5435);
                    break;
                }
                default: {
                    return;
                }
            };
            int5 = CC_GETHIDE();
        } else {
            return;
        };
        if ((int5 == false)) {
            int3 = (int3 + int14);
        };
    };
    if ((IF_GETSCROLLY(int6) > int3)) {
        IF_SETSCROLLPOS(0, 0, int6);
    };
    if ((IF_GETSCROLLY(int6) > int3)) {
        IF_SETSCROLLPOS(0, 0, int6);
    };
    if ((int3 > IF_GETHEIGHT(int6))) {
        IF_SETSIZE(16, 60, 1, 1, int6);
        IF_SETSCROLLSIZE(0, int3, int6);
        script7791(int7, int6);
    } else {
        IF_SETSIZE(0, 60, 1, 1, int6);
        IF_SETSCROLLPOS(0, 0, int6);
        IF_SETSCROLLSIZE(0, 0, int6);
        CC_DELETEALL(int7);
    };
    return;
}