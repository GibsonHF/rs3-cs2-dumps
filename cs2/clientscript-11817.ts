//
function script11817(int0: struct): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    [int1, int2, int3] = script8427(int0);
    if (((int2 == comp(-1, 65535)) || (int1 == -1))) {
        return;
    };
    var int4 = 0;
    var int5 = IF_GETNEXTSUBID(int2);
    var int6 = -1;
    if ((int3 != comp(-1, 65535))) {
        int6 = IF_GETNEXTSUBID(int3);
    };
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 1;
    var int14 = 1;
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    var int17 = 32;
    var int18 = 32;
    if ((varbitplayer_38842 == 1)) {
        int17 = 52;
        int18 = 52;
    };
    [int15, int16] = script11809(int0);
    while ((int4 < int5)) {
        if (((int7 == -1) || (int8 == -1))) {
            if (((CC_FIND(int2, int4) == 1) && (cc_getparam(3438) == int0))) {
                if ((CC_GETHIDE() == true)) {
                    return;
                };
                if (((cc_getparam(5313) == true) || (cc_getparam(5314) == true))) {
                    int13 = 0;
                };
                cc_setparam(5313, 1);
                cc_setparam(5314, 1);
                int7 = int4;
                int9 = CC_GETX();
                int10 = CC_GETY();
            };
            int4 = (int4 + 1);
        };
    };
    int4 = 0;
    while ((int4 < int6)) {
        if (((int7 == -1) || (int8 == -1))) {
            if ((((int3 != comp(-1, 65535)) && (CC_FIND[1](int3, int4) == 1)) && (cc_getparam[1](3438) == int0))) {
                if ((CC_GETHIDE[1]() == true)) {
                    return;
                };
                if (((cc_getparam[1](5313) == true) || (cc_getparam[1](5314) == true))) {
                    int14 = 0;
                };
                cc_setparam[1](5313, 1);
                cc_setparam[1](5314, 1);
                int8 = int4;
                int11 = CC_GETX[1]();
                int12 = CC_GETY[1]();
            };
            int4 = (int4 + 1);
        };
    };
    if ((int15 != comp(-1, 65535))) {
        script942(int0, int15, int7, (int9 - 2), (int10 - 2), int17, int18, int13);
    };
    if ((int16 != comp(-1, 65535))) {
        script942(int0, int16, int8, (int11 - 2), (int12 - 2), int17, int18, int14);
    };
    return;
}