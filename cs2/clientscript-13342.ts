//
function script13342(int0: int, int1: struct): void {
    var int2 = struct_getparam(int1, 6426);
    var int3 = struct_getparam(int1, 6427);
    if ((int2 == -1 as cs2enum)) {
        return;
    };
    var string0 = "";
    var int4 = 0;
    script13334(varplayer_6891, 1);
    CC_DELETEALL(comp(1851, 41));
    if ((CC_FIND(comp(1851, 40), int0) == 1)) {
        CC_SETONOP(callback(script13333, varplayer_6891, -1, 0));
        CC_SETOP(5, "Close");
    };
    if ((CC_FIND(comp(1851, 40), (int0 + 7)) == 1)) {
        CC_SETVFLIP(true);
    };
    var int5 = 0;
    var int6 = 0;
    if ((CC_FIND(comp(1851, 40), int0) == 1)) {
        int5 = CC_GETY();
        int6 = CC_GETHEIGHT();
    };
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as struct;
    switch (int3) {
        case 0: {
            int10 = ENUM_GETOUTPUTCOUNT(int2);
            while ((int9 < int10)) {
                int12 = enum_getvalue(0, 73, int2, int9);
                string0 = script13284(int12);
                switch (script13280(int12)) {
                    case -2: {
                        int4 = 16777215;
                        break;
                    }
                    case -1: {
                        int4 = script10495(6);
                        break;
                    }
                    case -3: {
                        int4 = 16355874;
                        break;
                    }
                    default: {
                        if ((script12477() < struct_getparam(int12, 7895))) {
                            int4 = 16355874;
                        } else {
                            int4 = 7829367;
                        };
                        break;
                    }
                };
                int11 = script13343(int9, int11, int4, string0, int12);
                int9 = (int9 + 1);
            };
            break;
        }
        default: {
            int7 = script13281(int1);
            if ((struct_getparam(int1, 6424) == 1)) {
                int8 = BITCOUNT(script13569(int1));
                while ((int9 < int8)) {
                    if ((TESTBIT(int7, int9) == 1)) {
                        int4 = 16777215;
                    } else {
                        int4 = 7829367;
                    };
                    if ((int3 == 1)) {
                        string0 = OC_NAME(enum_getvalue(0, 33, int2, int9));
                    } else if ((int2 == 13065 as cs2enum)) {
                        if ((int9 == 0)) {
                            if ((varbitplayer_11754 == 0)) {
                                string0 = "Turael";
                            } else {
                                string0 = "Spria";
                            };
                        } else if ((int9 == 6)) {
                            if ((varbitplayer_11754 == 0)) {
                                string0 = "Duradel";
                            } else {
                                string0 = "Lapalok";
                            };
                        } else {
                            string0 = enum_getvalue(0, 36, int2, int9);
                        };
                    } else if (((struct_getparam(int1, 3646) == 1) && (TESTBIT(int7, int9) == 0))) {
                        string0 = "???";
                    } else {
                        string0 = enum_getvalue(0, 36, int2, int9);
                    };
                    int11 = script13343(int9, int11, int4, string0, -1 as struct);
                    int9 = (int9 + 1);
                };
            } else if ((struct_getparam(int1, 6424) == 2)) {
                int8 = script13569(int1);
                while ((int9 < int8)) {
                    string0 = enum_getvalue(0, 36, int2, int9);
                    if ((int9 < int7)) {
                        int4 = 16777215;
                    } else if ((script12477() < struct_getparam(int1, 7895))) {
                        int4 = 16355874;
                    } else {
                        int4 = 7829367;
                    };
                    int11 = script13343(int9, int11, int4, string0, -1 as struct);
                    int9 = (int9 + 1);
                };
            };
            break;
        }
    };
    if (((MODULO(int9, 2) == 1) && (CC_FIND(comp(1851, 41), (IF_GETNEXTSUBID(comp(1851, 41)) - 1)) == 1))) {
        int11 = (int11 + CC_GETHEIGHT());
    };
    int11 = (int11 + 2);
    IF_SETHIDE(false, comp(1851, 41));
    IF_SETSIZE(0, int11, 1, 0, comp(1851, 41));
    IF_SETPOSITION(0, (int5 + int6), 0, 0, comp(1851, 41));
    script13344((int5 + int6), int11);
    IF_SETSCROLLSIZE(0, (IF_GETSCROLLHEIGHT(comp(1851, 40)) + int11), comp(1851, 40));
    IF_SETSCROLLPOS(0, int5, comp(1851, 40));
    script7791(comp(1851, 39), comp(1851, 40));
    return;
}