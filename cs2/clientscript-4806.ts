//
function script4806(int0: cs2enum, int1: int, int2: int, int3: unknown_int, int4: int): void {
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = -1;
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = -1;
    var int11 = comp(-1, 65535);
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    var int15 = comp(-1, 65535);
    [int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15] = script4818(int1, int2);
    switch (int2) {
        case 1: {
            IF_SETTEXT(enum_getvalue(0, 36, 4044 as cs2enum, int4), int15);
            break;
        }
        case 2: {
            IF_SETTEXT(enum_getvalue(0, 36, 4045 as cs2enum, int4), int15);
            break;
        }
        case 3: {
            IF_SETTEXT(enum_getvalue(0, 36, 4046 as cs2enum, int4), int15);
            break;
        }
    };
    IF_SETHIDE(false, int5);
    var int16 = 0;
    var int17 = 1;
    var int18 = -1 as struct;
    var int19 = 0;
    switch (varbitplayer_6981) {
        case 1: {
            switch (int2) {
                case 1: {
                    int19 = varbitplayer_6990;
                    break;
                }
                case 2: {
                    int19 = varbitplayer_6991;
                    break;
                }
                case 3: {
                    int19 = varbitplayer_6992;
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (int2) {
                case 1: {
                    int19 = varbitplayer_6999;
                    break;
                }
                case 2: {
                    int19 = varbitplayer_7000;
                    break;
                }
                case 3: {
                    int19 = varbitplayer_7001;
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (int2) {
                case 1: {
                    int19 = varbitplayer_7008;
                    break;
                }
                case 2: {
                    int19 = varbitplayer_7009;
                    break;
                }
                case 3: {
                    int19 = varbitplayer_7010;
                    break;
                }
            };
            break;
        }
    };
    while ((int17 <= ENUM_GETOUTPUTCOUNT(int0))) {
        int18 = enum_getvalue(0, 73, int0, int17);
        if ((int18 != -1 as struct)) {
            CC_CREATE(int14, 3, int16);
            CC_SETSIZE(0, 26, 1, 0);
            CC_SETPOSITION(0, (int16 * 27), 0, 0);
            CC_SETFILL(1);
            CC_SETCOLOUR(2893856);
            CC_CREATE(int6, 5, int16);
            CC_SETGRAPHIC(struct_getparam(int18, 1565));
            CC_SETSIZE(22, 22, 0, 0);
            CC_SETPOSITION(0, (2 + (int16 * 27)), 0, 0);
            CC_SETONMOUSEREPEAT(callback(script4812, struct_getparam(int18, 1566), struct_getparam(int18, 1565), struct_getparam(int18, 1567), 25));
            CC_SETONMOUSELEAVE(callback(script4813));
            CC_CREATE(int7, 5, int16);
            CC_SETGRAPHIC(struct_getparam(int18, 1572));
            CC_SETSIZE(20, 20, 0, 0);
            CC_SETPOSITION(1, (2 + (int16 * 27)), 0, 0);
            CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int18, 1570), -2147483645, -2147483643));
            CC_CREATE(int10, 4, int16);
            CC_SETTEXT(inttostring(struct_getparam(int18, 1573), 10));
            CC_SETSIZE(0, 26, 1, 0);
            CC_SETPOSITION(0, (int16 * 27), 0, 0);
            CC_SETTEXTSHADOW(0);
            CC_SETTEXTFONT(66);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETCOLOUR(16777215);
            if ((int8 != -1)) {
                CC_CREATE(int8, 5, int16);
                CC_SETGRAPHIC(struct_getparam(int18, 1576));
                CC_SETSIZE(20, 20, 0, 0);
                CC_SETPOSITION(1, (2 + (int16 * 27)), 0, 0);
                CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int18, 1574), -2147483645, -2147483643));
            };
            if ((int11 != comp(-1, 65535))) {
                CC_CREATE(int11, 4, int16);
                CC_SETTEXT(inttostring(struct_getparam(int18, 1577), 10));
                CC_SETSIZE(0, 26, 1, 0);
                CC_SETPOSITION(0, (int16 * 27), 0, 0);
                CC_SETTEXTSHADOW(false);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETCOLOUR(16777215);
            };
            if ((int9 != comp(-1, 65535))) {
                CC_CREATE(int9, 5, int16);
                CC_SETGRAPHIC(struct_getparam(int18, 1580));
                CC_SETSIZE(20, 20, 0, 0);
                CC_SETPOSITION(0, (2 + (int16 * 27)), 0, 0);
                CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int18, 1578), -2147483645, -2147483643));
            };
            if ((int12 != comp(-1, 65535))) {
                CC_CREATE(int12, 4, int16);
                CC_SETTEXT(inttostring(struct_getparam(int18, 1581), 10));
                CC_SETSIZE(0, 26, 1, 0);
                CC_SETPOSITION(0, (int16 * 27), 0, 0);
                CC_SETTEXTSHADOW(false);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETCOLOUR(16777215);
            };
            CC_CREATE(int13, 5, int16);
            CC_SETSIZE(16, 16, 0, 0);
            CC_SETPOSITION(1, (5 + (int16 * 27)), 0, 0);
            if ((int3 == 0)) {
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script4832, -2147483645, -2147483643));
            };
            if ((int19 == (int16 + 1))) {
                CC_SETGRAPHIC(6004 as graphic);
            } else {
                CC_SETGRAPHIC(6009 as graphic);
            };
            int16 = (int16 + 1);
        };
        int17 = (int17 + 1);
        int18 = -1 as struct;
    };
    IF_SETPARAM_INT(1564, (int16 * 27), int5);
    return;
}