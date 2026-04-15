//
function script8144(): void {
    var int0 = comp(1431, 1);
    var int1 = comp(1431, 8);
    var int2 = comp(1431, 0);
    var int3 = comp(1431, 12);
    var int4 = IF_GETWIDTH(int0);
    if ((int4 == 0)) {
        return;
    };
    var int5 = IF_GETHEIGHT(int0);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 32;
    var int23 = 32;
    script13852(int4, int5);
    var int24 = IF_GETWIDTH(int1);
    var int25 = IF_GETHEIGHT(int1);
    var int26 = script6431();
    if (((varbitplayer_27169 == 0) && (int26 == false))) {
        if ((varbitplayer_22875 == 1)) {
            int22 = 32;
            int23 = 32;
            int20 = 4;
            int21 = 7;
        };
        int15 = MAX(1, (int24 / int22));
        int16 = MAX(1, (int25 / int23));
        int13 = (MODULO(int24, int22) / int15);
        int14 = (MODULO(int25, int23) / int16);
        int7 = (int15 * int16);
        int6 = int7;
        int9 = script2387(varbitclient_42113);
        if ((int9 < int7)) {
            int8 = (int7 - int9);
            int17 = ((int15 + int16) - 1);
            while ((((int8 >= int17) && (int15 > 1)) && (int16 > 1))) {
                int8 = (int8 - int17);
                int15 = (int15 - 1);
                int16 = (int16 - 1);
                int17 = ((int15 + int16) - 1);
            };
            while (((int8 >= int15) && (int16 > 1))) {
                int8 = (int8 - int15);
                int16 = (int16 - 1);
            };
            while (((int8 >= int16) && (int15 > 1))) {
                int8 = (int8 - int16);
                int15 = (int15 - 1);
            };
            int13 = ((int24 - (int22 * int15)) / int15);
            int14 = ((int25 - (int23 * int16)) / int16);
            int7 = int9;
        };
        int18 = (int13 / 2);
        int19 = (int14 / 2);
    } else if ((int26 == true)) {
        int7 = 8;
        int22 = 50;
        int23 = 50;
        int20 = 0;
        int21 = 0;
    } else {
        int7 = 16;
        int22 = 32;
        int23 = 32;
        int20 = 4;
        int21 = 7;
    };
    if (((PLAYERMEMBER() == false) && (int9 < script2385(135, 1)))) {
        script2393(135, int9);
    };
    script13846(int2, int3, 13319 as cs2enum);
    if ((int26 == true)) {
        int19 = 0;
    };
    while ((int10 < int7)) {
        int11 = script2384(int10, varbitclient_42113);
        if ((int26 == true)) {
            if ((script13856(int11) == 0)) {
                int20 = 0;
                int21 = 0;
            } else {
                int20 = 6;
                int21 = 15;
            };
        } else if ((varbitplayer_22875 != 1)) {
            int20 = 4;
            int21 = 4;
        };
        if ((enum_hasoutput(0, 13319 as cs2enum, int11) == 1)) {
            int12 = enum_getreverseindex(0, 0, 13319 as cs2enum, int11, 0);
            if (((CC_FIND(int2, int12) == 1) && (CC_FIND[1](int3, int12) == 1))) {
                CC_SETPOSITION(int18, int19, 0, 0);
                CC_SETHIDE(false);
                CC_SETPOSITION[1]((int18 + int20), (int19 + int21), 0, 0);
                CC_SETHIDE[1](false);
                if ((int26 == false)) {
                    int18 = (int18 + (int13 + int22));
                    if (((int18 + int22) > int24)) {
                        int18 = (int13 / 2);
                        int19 = (int19 + (int14 + int23));
                    };
                } else {
                    int19 = (int19 + (int23 + 3));
                };
            };
        } else {
            script2393(int11, -1);
        };
        int10 = (int10 + 1);
    };
    IF_SETPARAM_INT(6837, int7, int0);
    IF_SETPARAM_INT(6838, int6, int0);
    script8145();
    script17044(comp(1431, 13));
    script15783();
    return;
}