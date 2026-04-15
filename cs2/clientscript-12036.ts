//
function script12036(int0: component, int1: int, string0: string): void {
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
                script14979(23787);
                break;
            }
            case 1: {
                int2 = cc_getparam(5434);
                script14979(23784);
                break;
            }
            case 2: {
                int2 = cc_getparam(5435);
                script14979(23789);
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
    var int4 = IGNORE_COUNT();
    var int5 = false;
    var int6 = script12023(int0);
    var int7 = script12024(int0);
    var int8 = script6431();
    var int9 = enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics);
    if ((int8 == true)) {
        int9 = enum_getvalue(25, 0, 8549 as cs2enum, 32 as fontmetrics);
    };
    int9 = (int9 + 4);
    while ((int2 != -1)) {
        if ((CC_FIND(int7, int2) == 1)) {
            CC_SETPOSITION(0, int3, 0, 0);
        };
        if ((CC_FIND(int6, int2) == 1)) {
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
            int3 = (int3 + int9);
        };
    };
    script3516(int3, script12021(int0), script12022(int0));
    return;
}