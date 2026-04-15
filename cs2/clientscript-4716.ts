//
function script4716(int0: component, int1: component, int2: cs2enum, int3: int): void {
    var int4 = -1;
    var int5 = 0;
    var int6 = -1 as struct;
    var int7 = -1;
    var int8 = -1;
    var string0 = "";
    var int9 = true;
    var int10 = 0;
    var int11 = 0;
    var int12 = ENUM_GETOUTPUTCOUNT(int2);
    var int13 = IF_GETWIDTH(int0);
    var int14 = 0;
    var int15 = 0;
    var int16 = -1;
    var int17 = 0;
    var int18 = 13;
    if ((varbitplayer_34815 == 1)) {
        if ((varbitplayer_38842 == 1)) {
            int14 = 1;
            int18 = 30;
        } else {
            [int14, int13, int17] = script8107(int13, 112);
        };
    } else {
        [int14, int13, int17] = script8107(int13, 43);
    };
    var int19 = 1;
    while ((++int4 < int12)) {
        int19 = 0;
        int6 = enum_getvalue(0, 73, int2, int4);
        if ((CC_FIND(int0, int4) == 1)) {
            int9 = cc_getparam(6277);
            if ((varbitplayer_34815 == 1)) {
                CC_SETSIZE(107, int18, 0, 0);
            } else {
                CC_SETSIZE(48, 48, 0, 0);
            };
            if ((int3 == 0)) {
                int19 = 1;
                if ((((struct_getparam(int6, 1422) == 13) || (struct_getparam(int6, 1422) == 14)) && (varbitplayer_11297 != 2))) {
                    int19 = 0;
                };
                if (((struct_getparam(int6, 3326) != 0) && (int9 == false))) {
                    int19 = 0;
                };
            } else if ((int3 == 1)) {
                if ((int9 == true)) {
                    int19 = 1;
                };
                if ((((struct_getparam(int6, 1422) == 13) || (struct_getparam(int6, 1422) == 14)) && (varbitplayer_11297 != 2))) {
                    int19 = 0;
                };
            } else if ((int3 == struct_getparam(int6, 1422))) {
                int19 = 1;
            } else if ((int3 == struct_getparam(int6, 1423))) {
                int19 = 1;
            } else if ((int3 == struct_getparam(int6, 1424))) {
                int19 = 1;
            } else if ((int3 == struct_getparam(int6, 1425))) {
                int19 = 1;
            } else if ((int3 == struct_getparam(int6, 1426))) {
                int19 = 1;
            };
            if (((((struct_getparam(int6, 3326) == 2) || (varplayer_3079 < struct_getparam(int6, 4742))) || (varplayer_3079 > struct_getparam(int6, 4743))) && (int9 == false))) {
                int19 = 0;
            };
            if (((struct_getparam(int6, 9207) == true) && (script19316() == false))) {
                int19 = 0;
            };
            if ((int19 == 1)) {
                CC_SETHIDE(false);
                if ((varbitplayer_34815 == 1)) {
                    if ((int14 > 1)) {
                        int15 = MODULO(int5, int14);
                        if ((int15 == 0)) {
                            int16 = (int16 + 1);
                        };
                        int10 = script8108(int13, int17, int15);
                    } else {
                        int16 = (int16 + 1);
                        CC_SETSIZE(0, int18, 1, 0);
                    };
                    int11 = (int18 * int16);
                    CC_SETPOSITION(int10, int11, 0, 0);
                    int5 = (int5 + 1);
                } else {
                    int15 = MODULO(int5, int14);
                    if ((int15 == 0)) {
                        int16 = (int16 + 1);
                    };
                    int10 = script8108(int13, int17, int15);
                    int11 = (58 * int16);
                    CC_SETPOSITION(int10, int11, 0, 0);
                    int5 = (int5 + 1);
                };
            } else {
                CC_SETHIDE(true);
            };
        };
    };
    var int20 = (int11 + 58);
    if ((varbitplayer_34815 == 1)) {
        int20 = (int11 + int18);
    };
    IF_SETSCROLLSIZE(0, int20, int0);
    IF_SETHIDE(false, int1);
    script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    varclient_2822 = int2;
    varclient_2823 = int3;
    return;
}