//
function script9237(int0: component, int1: component, int2: component, int3: component, int4: inv, int5: unknown_int, int6: int, int7: int, int8: unknown_int): void {
    if (((int1 == comp(-1, 65535)) || (int4 == -1 as inv))) {
        return;
    };
    var int7 = MAX(int6, MIN(int7, (INV_SIZE(int4) - 1)));
    if ((int2 != comp(-1, 65535))) {
        IF_SETHIDE(true, int2);
    };
    var int9 = IF_GETLAYER(int1);
    var int10 = 36;
    var int11 = 32;
    var int12 = int10;
    var int13 = int11;
    if ((int0 != comp(-1, 65535))) {
        if ((varbitplayer_22875 != 1)) {
            IF_SETHIDE(false, int0);
        } else {
            IF_SETHIDE(true, int0);
        };
        CC_DELETEALL(int0);
        int12 = 40;
        int13 = 36;
    };
    var int14 = script6431();
    var int15 = 2;
    var int16 = 2;
    var int17 = 2;
    var int18 = 2;
    var int19 = 2;
    var int20 = 2;
    var int21 = 18266 as graphic;
    var int22 = 0;
    if ((int14 == true)) {
        switch (int0) {
            case 43384836: {
                int10 = 44;
                int11 = 39;
                int12 = 44;
                int13 = 44;
                break;
            }
            default: {
                int10 = 44;
                int11 = 39;
                int12 = 44;
                int13 = 44;
                break;
            }
        };
        int15 = 2;
    };
    CC_DELETEALL(int1);
    if ((IF_FIND(int1) == 1)) {
        cc_setparam(3818, int4);
        cc_setparam(3819, int3);
        cc_setparam(3820, int5);
    };
    var int23 = MIN(((int7 - int6) + 1), INV_SIZE(int4));
    var int24 = 0;
    var int25 = 0;
    if ((int9 != comp(-1, 65535))) {
        int24 = IF_GETWIDTH(int9);
        int25 = IF_GETHEIGHT(int9);
    } else {
        int24 = IF_GETWIDTH(int1);
        int25 = IF_GETHEIGHT(int1);
    };
    var int26 = (int10 + int18);
    var int27 = ((int11 + 2) + int15);
    if (((varbitplayer_27169 == 1) && (script9931(int1, script8073()) == 1))) {
        int16 = MIN(15, ((int25 - ((int23 / 4) * int27)) / 2));
        int19 = MAX(int19, ((int24 - (5 * (int26 + int18))) / 2));
        int20 = 2;
    };
    var int28 = int23;
    if ((((int1 == comp(517, 15)) || (int1 == comp(517, 35))) || (((int1 == comp(662, 5)) && (int23 < 4)) || (int1 == comp(1313, 14))))) {
        int28 = 4;
    };
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    [int29, int30, int31] = script9856((int24 - int20), int26, (int19 + int20), int18);
    int29 = MIN(int29, int28);
    if ((int29 >= int28)) {
        int30 = MAX(int18, ((int24 - (int28 * int12)) / (int28 + 2)));
        int31 = MAX(int30, int19);
        int30 = (int30 + int12);
    };
    var int32 = 0;
    int32 = MAX(1, (int23 / int29));
    if ((MODULO(int23, int29) > 0)) {
        int32 = (int32 + 1);
    };
    var int33 = 0;
    var int34 = 0;
    if (((int9 != comp(-1, 65535)) && (int3 != comp(-1, 65535)))) {
        IF_SETPOSITION(0, 0, 0, 0, int9);
        if (((int32 * int27) > (int25 + 5))) {
            int33 = 1;
            IF_SETSIZE(16, 0, 1, 1, int9);
            IF_SETPOSITION(0, 0, 2, 0, int3);
            IF_SETSIZE(16, IF_GETHEIGHT(int9), 0, 0, int3);
            IF_SETHIDE(false, int3);
            int24 = IF_GETWIDTH(int9);
            [int29, int30, int31] = script9856((int24 - int20), int26, (int19 + int20), int18);
            int29 = MIN(int29, int28);
            if ((int29 >= int28)) {
                int30 = MAX(int18, ((int24 - (int28 * int12)) / (int28 + 2)));
                int31 = MAX(int30, int19);
                int30 = (int30 + int12);
            };
            int32 = MAX(1, (int23 / int29));
            if ((MODULO(int23, int29) > 0)) {
                int32 = (int32 + 1);
            };
            int34 = ((int32 * int27) + int16);
            IF_SETSCROLLSIZE(0, int34, int9);
            script7791(int3, int9);
        } else {
            IF_SETSIZE(0, 0, 1, 1, int9);
            IF_SETSCROLLSIZE(0, 0, int9);
            IF_SETHIDE(true, int3);
        };
    };
    var int35 = 0;
    var int36 = 0;
    var int37 = -1;
    var int38 = 0;
    define_array(int29);
    while ((int35 < int29)) {
        pop_array(int35, script9857(int30, int19, int31, int35));
        int35 = (int35 + 1);
    };
    int35 = 0;
    if ((int0 != comp(-1, 65535))) {
        while ((int35 <= int7)) {
            CC_CREATE(int0, 5, int35);
            CC_CREATE[1](int1, 5, int35);
            if ((int35 >= int6)) {
                CC_SETSIZE(int12, int13, 0, 0);
                CC_SETGRAPHIC(int21);
                CC_SETTRANS(int22);
                CC_SETPOSITION((push_array(MODULO(int35, int29)) - 1), ((((int35 / int29) * int27) + int16) - 1), 0, 0);
                CC_SETSIZE[1](int10, int11, 0, 0);
                CC_SETPOSITION[1]((push_array(MODULO(int35, int29)) + 3), ((((int35 / int29) * int27) + 1) + int16), 0, 0);
            } else {
                CC_SETSIZE(0, 0, 0, 0);
                CC_SETHIDE(true);
                CC_SETSIZE[1](0, 0, 0, 0);
                CC_SETHIDE[1](true);
            };
            int35 = (int35 + 1);
        };
    } else {
        while ((int35 <= int7)) {
            CC_CREATE(int1, 5, int35);
            if ((int35 >= int6)) {
                CC_SETSIZE(int12, int13, 0, 0);
                if ((int14 == false)) {
                    CC_SETNOCLICKTHROUGH(true);
                };
                CC_SETPOSITION((push_array(MODULO(int35, int29)) + 3), ((((int35 / int29) * int27) + 1) + int16), 0, 0);
            } else {
                CC_SETSIZE(0, 0, 0, 0);
                CC_SETHIDE(true);
            };
            int35 = (int35 + 1);
        };
    };
    return;
}