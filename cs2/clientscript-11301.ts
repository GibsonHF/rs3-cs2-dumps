//
function script11301(): void {
    var int0 = 0;
    var int1 = 15;
    var int2 = 0;
    CC_DELETEALL(comp(1613, 40));
    while ((int1 >= 0)) {
        while ((int0 < 16)) {
            CC_CREATE(comp(1613, 40), 3, int2);
            CC_SETSIZE(15, 15, 0, 0);
            CC_SETCOLOUR(65280);
            CC_SETFILL(1);
            switch (int2) {
                case 103:
                case 104:
                case 119:
                case 120:
                case 135:
                case 136: {
                    CC_SETCOLOUR(65535);
                    break;
                }
            };
            CC_SETPOSITION((int0 * 15), (int1 * 15), 0, 0);
            CC_SETONMOUSEOVER(callback(script11303, -2147483645, CC_GETID()));
            CC_SETONMOUSELEAVE(callback(script11302, CC_GETID()));
            CC_SETTRANS(255);
            if ((script6431() == 1)) {
                CC_SETOP(1, "Build");
            };
            int2 = (int2 + 1);
            int0 = (int0 + 1);
        };
        int0 = 0;
        int1 = (int1 - 1);
    };
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = comp(-1, 65535);
    var int9 = 0;
    var int10 = 0;
    while ((int3 <= 30)) {
        [int9, int10, int4, int5] = script11307(int3);
        int8 = enum_getvalue(0, 9, 9970 as cs2enum, int3);
        if ((int4 > 0)) {
            int7 = (lc_getparam(enum_getvalue(0, 30, 9969 as cs2enum, int4), 5025) * 15);
            stack(lc_getparam(enum_getvalue(0, 30, 9969 as cs2enum, int4), 5026));
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, int8);
            IF_SETSIZE(int7, int7, 0, 0, int8);
            IF_SETPOSITION((int9 * 15), (int10 * 15), 0, 2, int8);
            if ((int5 > 0)) {
                int5 = (65535 - (16384 * int5));
                IF_SET2DANGLE(int5, int8);
            } else {
                IF_SET2DANGLE(0, int8);
            };
        } else {
            IF_SETHIDE(true, int8);
        };
        int3 = (int3 + 1);
    };
    return;
}