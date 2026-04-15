//
function script15825(int0: component, int1: int, int2: int): void {
    if ((((int0 == comp(-1, 65535)) || (int1 == -1)) || (int2 < 1))) {
        return;
    };
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = (65536 / 720);
    var int10 = (65536 / 360);
    var int11 = 0;
    var int12 = 2000;
    var int13 = 0;
    var int14 = -1;
    if (((CC_FIND(int0, int1) == 1) && (IF_FIND[1](int0) == 1))) {
        int6 = CC_GETTRANS();
        if ((int6 >= 127)) {
            return;
        };
        int4 = ((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2));
        int5 = ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2));
        int7 = CC_GET2DANGLE();
        [int8, int14] = script10253(script12722(-1, 1));
        int8 = (int8 - int7);
        if ((int8 != 0)) {
            if ((ABS(int8) > 32768)) {
                if ((int8 < 0)) {
                    int8 = (65536 + int8);
                } else {
                    int8 = (int8 - 65536);
                };
            };
            int8 = MAX(MIN(int8, int10), (0 - int10));
        };
        CC_CLEAROPS();
        CC_SETTRANS(255);
        cc_setparam(5836, -1);
        cc_setparam(5837, -1);
        while (((++int3 < int2) && (CC_FIND[1](int0, ((int1 + int3) + 1)) == 1))) {
            CC_SETPOSITION[1](int4, int5, 1, 1);
            CC_SET2DANGLE[1](int7);
            CC_SETTRANS[1](int6);
            CC_SETHIDE[1](false);
            CC_SENDTOFRONT[1]();
            cc_setparam[1](5935, int8);
            cc_setparam[1](4421, -2147483648);
            cc_setparam[1](4422, -2147483648);
            cc_setparam[1](5926, -1);
            cc_setparam[1](5927, -1);
            cc_setparam[1](5833, 0);
            cc_setparam[1](5834, 0);
            script12707(script12641(int12, (360 - SCALE(MODULO((cc_getparam[1](5936) + int7), 65536), 65536, 360))));
            if ((ABS(cc_getparam[1](5935)) < int9)) {
                if ((cc_getparam[1](5829) < 0)) {
                    cc_setparam[1](5935, int9);
                } else if ((cc_getparam[1](5829) > 0)) {
                    cc_setparam[1](5935, (0 - int9));
                } else if ((cc_getparam[1](5936) < int9)) {
                    cc_setparam[1](5935, int9);
                } else {
                    cc_setparam[1](5935, (0 - int9));
                };
            };
            script12632(int0, CC_GETID[1]());
        };
    };
    return;
}