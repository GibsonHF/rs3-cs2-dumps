//
function script95(int0: cs2enum, int1: cs2enum, int2: unknown_int): void {
    if (((int0 == -1 as cs2enum) || (int1 == -1 as cs2enum))) {
        return;
    };
    var int3 = comp(516, 9);
    var int4 = comp(516, 1);
    var int5 = comp(516, 0);
    var int6 = comp(516, 10);
    var int7 = comp(516, 11);
    var int8 = comp(516, 12);
    var int9 = 33816584;
    var int10 = -1;
    var int11 = 8;
    var int12 = 5;
    var int13 = -1 as obj;
    var int14 = 0;
    var int15 = ENUM_GETOUTPUTCOUNT(int0);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    CC_DELETEALL(int7);
    var int16 = 51548 as struct;
    if ((int2 == 1)) {
        IF_SETHIDE(false, int8);
        if ((IF_FIND(int6) == 1)) {
            CC_SETSIZE(24, 44, 1, 1);
        };
        if ((IF_FIND(int7) == 1)) {
            CC_SETSIZE(16, 44, 0, 1);
        };
        if ((IF_FIND(int3) == 1)) {
            CC_SETSIZE(0, 38, 1, 1);
        };
    } else {
        IF_SETHIDE(true, int8);
        if ((IF_FIND(int6) == 1)) {
            CC_SETSIZE(24, 6, 1, 1);
        };
        if ((IF_FIND(int7) == 1)) {
            CC_SETSIZE(16, 6, 0, 1);
        };
        if ((IF_FIND(int3) == 1)) {
            CC_SETSIZE(0, 0, 1, 1);
        };
    };
    while ((++int10 < int15)) {
        int13 = enum_getvalue(0, 33, int0, int10);
        int14 = script16349(int1, int13, int10);
        [int13, int14] = script19885(int13, int14);
        if ((int13 != -1 as obj)) {
            int16 = item_getparam(int13, 9267);
            if (((int11 + 40) >= IF_GETWIDTH(int4))) {
                [int11, int12] = [8, ((int12 + 36) + 2)];
            };
            script10410(int4, comp(-1, 65535), int16, int11, int12, 40, 36, 0, false, "");
            CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(((int11 + ((40 - 36) / 2)) + 2), (int12 + ((36 - 32) / 2)), 0, 0);
            if ((int14 > 0)) {
                CC_SETOBJECT(int13, int14);
            } else {
                CC_SETOBJECT_NONUM(int13, 1);
            };
            CC_SETONMOUSEREPEAT(callback(script9564, int13, -2147483645, CC_GETID()));
            CC_CREATE[1](int5, 4, int10);
            CC_SETSIZE[1](40, 36, 0, 0);
            CC_SETPOSITION[1](int11, int12, 0, 0);
            CC_SETPAUSETEXT[1](`Examine ${script4033(int13)}${OC_NAME(int13)}`);
            int11 = (int11 + (40 + 2));
        };
    };
    int12 = (int12 + (36 + 2));
    if ((int12 > IF_GETHEIGHT(int6))) {
        IF_SETSCROLLPOS(0, IF_GETSCROLLY(int6), int6);
        IF_SETSCROLLSIZE(0, int12, int6);
        script7791(int7, int6);
    } else {
        IF_SETPOSITION(0, 3, 1, 0, int6);
    };
    return;
}