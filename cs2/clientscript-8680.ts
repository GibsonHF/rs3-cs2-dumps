//
function script8680(int0: component): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    [int1, int2, int3, int4, int6, int5] = script8682(int0);
    var int7 = script6431();
    var int8 = 33;
    var int9 = 40;
    var int10 = 36;
    var int11 = 36;
    var int12 = 32;
    var int13 = 2;
    var int14 = 2;
    var int15 = 2;
    var int16 = 2;
    if ((int7 == true)) {
        if ((int0 == comp(1473, 0))) {
            int9 = 44;
            int10 = 44;
            int11 = 44;
            int12 = 39;
        } else {
            int9 = 44;
            int10 = 44;
            int11 = 44;
            int12 = 39;
        };
        int16 = 2;
        int8 = 42;
    };
    var int17 = INV_SIZE(93 as inv);
    var int18 = (IF_GETHEIGHT(int0) - int8);
    var int19 = 0;
    var int20 = 0;
    if ((int1 != comp(-1, 65535))) {
        IF_SETSIZE(0, int8, 1, 1, int1);
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETSIZE(0, int8, 1, 1, int2);
    };
    var int21 = -1;
    var int22 = -1;
    if ((int1 != comp(-1, 65535))) {
        int21 = IF_GETWIDTH(int1);
        int22 = IF_GETHEIGHT(int1);
    };
    var int23 = (int22 - (int13 + int14));
    var int24 = 2;
    var int25 = 2;
    var int26 = 2;
    var int27 = (int11 + int15);
    var int28 = ((int12 + 2) + int16);
    if ((varbitplayer_27169 == 1)) {
        int13 = MIN(15, ((int22 - ((int17 / 4) * int28)) / 2));
        int24 = MAX(int24, ((int21 - (5 * (int27 + int15))) / 2));
        int26 = int24;
        int25 = int24;
    };
    if ((int7 == true)) {
        int27 = (int9 + int15);
        int28 = (int10 + int16);
        switch (int0) {
            case 96534528:
            case 33882127:
            case 33882147:
            case 86048782: {
                if ((((7 * (int28 - 1)) > int23) && ((7 * ((int10 + 2) - 1)) <= int23))) {
                    int16 = ((int23 - (int10 * 7)) / 6);
                    int28 = (int10 + int16);
                };
                int13 = 2;
                int24 = int15;
                int26 = int15;
                int28 = (int28 - 1);
                break;
            }
            default: {
                int13 = 2;
                int24 = MAX(int24, ((int21 - (5 * (int27 + int15))) / 2));
                int26 = int24;
                break;
            }
        };
        int25 = 0;
    };
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    [int31, int29, int30] = script9856((int21 - int26), int27, (int24 + int25), int15);
    int31 = MIN(int31, int17);
    if ((((int7 == false) && (varbitplayer_31052 > 0)) && (int5 != comp(-1, 65535)))) {
        int31 = MIN(int31, varbitplayer_31052);
        if ((int31 >= varbitplayer_31052)) {
            int29 = (int27 + int15);
            int30 = (((int21 - int26) - (int29 * varbitplayer_31052)) / 2);
        };
    };
    var int32 = (int17 / int31);
    int32 = MAX(int32, 1);
    if ((MODULO(int17, int31) > 0)) {
        int32 = (int32 + 1);
    };
    int32 = MAX(1, int32);
    if ((((int1 != comp(-1, 65535)) && (int2 != comp(-1, 65535))) && ((int32 * int28) > int23))) {
        int19 = 1;
        IF_SETSIZE(16, int8, 1, 1, int1);
        IF_SETPOSITION(0, 0, 2, 0, int2);
        IF_SETSIZE(16, IF_GETHEIGHT(int1), 0, 0, int2);
        int21 = IF_GETWIDTH(int1);
        int22 = IF_GETHEIGHT(int1);
        if ((int7 == false)) {
            [int31, int29, int30] = script9856((int21 - int26), int27, (int24 + int25), int15);
        };
    };
    int31 = MIN(int31, int17);
    if ((((int7 == false) && (varbitplayer_31052 > 0)) && (int5 != comp(-1, 65535)))) {
        int31 = MIN(int31, varbitplayer_31052);
        if ((int31 >= varbitplayer_31052)) {
            int29 = (int27 + int15);
            int30 = (((int21 - int26) - (int29 * varbitplayer_31052)) / 2);
        };
    };
    if ((int7 == true)) {
        int29 = int27;
        int30 = (((int21 - int26) - (int29 * 4)) / 2);
    };
    int32 = (int17 / int31);
    int32 = MAX(int32, 1);
    if ((MODULO(int17, int31) > 0)) {
        int32 = (int32 + 1);
    };
    int32 = MAX(1, int32);
    var int33 = 0;
    var int34 = 0;
    var int35 = -1 as obj;
    var int36 = 0;
    var int37 = (varclient_1031 - 1);
    define_array(int31);
    var int38 = 0;
    var int39 = 0;
    var int40 = 0;
    while ((int40 < int31)) {
        pop_array(int40, script9857(int29, int24, int30, int40));
        int40 = (int40 + 1);
    };
    while ((int33 < int17)) {
        if (((((int3 != comp(-1, 65535)) && (int4 != comp(-1, 65535))) && (CC_FIND[1](int3, int33) == 1)) && (CC_FIND(int4, int33) == 1))) {
            int35 = INV_GETOBJ(93 as inv, int33);
            int36 = INV_GETNUM(93 as inv, int33);
            if ((int7 == true)) {
                int38 = push_array(MODULO(int33, int31));
                int39 = (((int33 / int31) * int28) + int13);
                CC_SETPOSITION[1](int38, int39, 0, 0);
                CC_SETPOSITION((int38 + ((int9 - int11) / 2)), (int39 + ((int10 - int12) / 2)), 0, 0);
            } else {
                CC_SETPOSITION[1]((push_array(MODULO(int33, int31)) - 1), ((((int33 / int31) * int28) + int13) - 1), 0, 0);
                CC_SETPOSITION((push_array(MODULO(int33, int31)) + 3), ((((int33 / int31) * int28) + 1) + int13), 0, 0);
            };
            if (((int6 != comp(-1, 65535)) && (CC_FIND[1](int6, int33) == 1))) {
                CC_SETPOSITION[1]((push_array(MODULO(int33, int31)) - 1), ((((int33 / int31) * int28) + int13) - 1), 0, 0);
            };
            if ((int35 != -1 as obj)) {
                script12090(int35, int36, 93, int33);
                if ((int33 == int37)) {
                    CC_SETOUTLINE(2);
                } else {
                    CC_SETOUTLINE(1);
                };
            } else {
                script9230(-1 as obj, 0);
            };
        };
        int33 = (int33 + 1);
    };
    script12409(comp(1473, 17));
    var int41 = ((((int32 * int28) + int13) + int14) - int16);
    if ((int1 != comp(-1, 65535))) {
        int41 = MAX(IF_GETHEIGHT(int1), int41);
        CC_DELETEALL(int2);
        IF_SETONVARTRANSMIT(callback(), int2);
        IF_SETSCROLLSIZE(0, int41, int1);
        if ((int41 > IF_GETHEIGHT(int1))) {
            script7791(int2, int1);
        };
    };
    script16559(script255(int0), 2);
    return;
}