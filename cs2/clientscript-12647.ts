//
function script12647(int0: unknown_int, int1: unknown_int, int2: int, int3: int, int4: int): void {
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((CC_GETTRANS[1]() != 255)) {
        if (((int0 == 1) && ((int1 == 1) || (cc_getparam[1](5945) == CLIENTCLOCK())))) {
            int11 = ((int2 - int4) - 4);
            int5 = cc_getparam[1](5848);
            int6 = cc_getparam[1](4423);
            if ((int5 != comp(-1, 65535))) {
                if ((int11 < 0)) {
                    CC_SETTEXTALIGN[1](0, 1, 0);
                } else {
                    CC_SETTEXTALIGN[1](2, 1, 0);
                };
                [int7, int8, int9, int10] = script12613(int5, int6);
                if ((((int6 == -1) && (IF_FIND(int5) == 1)) || (CC_FIND(int5, int6) == 1))) {
                    if (((int10 < CC_GETHEIGHT()) || ((int11 < 0) && (int9 < 1)))) {
                        CC_SETTRANS[1](255);
                        CC_SETHIDE[1](true);
                    } else {
                        if ((int11 < 0)) {
                            CC_SETPOSITION[1](int7, (int8 - enum_getvalue(25, 0, 8584 as cs2enum, CC_GETFONTMETRICS[1]())), 0, 0);
                        } else {
                            CC_SETPOSITION[1](int11, int8, 0, 0);
                        };
                        CC_SETSIZE[1](int4, 27, 0, 0);
                    };
                };
            };
        } else {
            CC_SETTRANS[1](255);
            CC_SETHIDE[1](true);
            cc_setparam[1](5946, -1);
        };
    } else {
        CC_SETHIDE[1](true);
    };
    return;
}