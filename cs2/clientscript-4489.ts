//
function script4489(int0: int, int1: int, int2: unknown_int, int3: unknown_int, int4: int): void {
    var int5 = ENUM_GETOUTPUTCOUNT(11807 as cs2enum);
    var int6 = 1;
    var int7 = 0;
    define_array((504 + 1));
    define_array[65536]((504 + 1));
    define_array[131072]((504 + 1));
    define_array[196608]((504 + 1));
    var int8 = -1 as struct;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    var int17 = 0;
    while (((int6 < int5) && (int17 == 0))) {
        [int8, int12, int9, int11, int10, int13, int14, int15, int16] = script5723(int6);
        if (((((int8 != -1 as struct) && (int12 != -1)) && (script858(int12, int4) == 0)) && ((int15 == MAP_LANG()) || (int15 == -1)))) {
            if (((int12 == 7) && (int10 == -1))) {
                int10 = int9;
            };
            if (((int10 != -1) && (int10 > varplayer_3079))) {
                int9 = -1;
            };
            if ((((int9 != -1) && (int16 != -1)) && (int16 != 0))) {
                if (((int11 == -1) || (int9 == int11))) {
                    if (((int9 >= int0) && (int9 <= int1))) {
                        pop_array(int7, int9);
                        pop_array[1](int7, script7138(int16));
                        pop_array[2](int7, int6);
                        if ((++int7 >= 504)) {
                            int17 = 1;
                        };
                    };
                } else {
                    while (((int9 <= int11) && (int17 == 0))) {
                        if (((int9 >= int0) && (int9 <= int1))) {
                            pop_array(int7, int9);
                            pop_array[1](int7, script7138(int16));
                            pop_array[2](int7, int6);
                            if ((++int7 >= 504)) {
                                int17 = 1;
                            };
                        };
                        int9 = (int9 + 1);
                        int16 = script7140(int16);
                    };
                };
            };
        };
        int6 = (int6 + 1);
    };
    ARRAY_SORT(int7, 0, 2);
    ARRAY_SORT(int7, 1, 3);
    int6 = 0;
    var int18 = 0;
    define_array[262144](int7);
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = -1 as graphic;
    var int25 = 0;
    if ((int2 == 1)) {
        if ((int7 > 12)) {
            varbitclient_40727 = 12;
        } else {
            varbitclient_40727 = int7;
        };
    };
    if ((int7 == 0)) {
        if ((int2 == 1)) {
            varbitclient_40728 = 0;
        };
        return;
    };
    while ((int6 < int7)) {
        int19 = 0;
        int23 = 0;
        int25 = 0;
        int17 = 0;
        [int8, int12, int9, int11, int13, int14] = script6194(push_array[2](int6));
        if (((int8 != -1 as struct) && (push_array(int6) != -1))) {
            int21 = push_array(int6);
            int22 = script7139(push_array[1](int6));
            pop_array[3](int19, int13);
            pop_array[4](int19, push_array[2](int6));
            int24 = -1 as graphic;
            switch (MAP_LANG()) {
                case 1: {
                    int24 = struct_getparam(int8, 7282);
                    break;
                }
                case 2: {
                    int24 = struct_getparam(int8, 7283);
                    break;
                }
                case 3: {
                    int24 = struct_getparam(int8, 7284);
                    break;
                }
            };
            if ((int24 == -1 as graphic)) {
                int24 = struct_getparam(int8, 7181);
            };
            if ((((int12 == 6) && (int24 != -1 as graphic)) && (int2 == 0))) {
                int25 = 1;
                script4490(int8, int12, int14, int9, struct_getparam(int8, 6045), 0, int2, push_array[4](int19), int4);
            };
            int19 = (int19 + 1);
            [int8, int12, int9, int11, int13, int14] = script6194(push_array[2](++int6));
            while ((((push_array(int6) == int21) && (int8 != -1 as struct)) && (push_array(int6) != -1))) {
                pop_array[3](int19, int13);
                pop_array[4](int19, push_array[2](int6));
                int24 = -1 as graphic;
                switch (MAP_LANG()) {
                    case 1: {
                        int24 = struct_getparam(int8, 7282);
                        break;
                    }
                    case 2: {
                        int24 = struct_getparam(int8, 7283);
                        break;
                    }
                    case 3: {
                        int24 = struct_getparam(int8, 7284);
                        break;
                    }
                };
                if ((int24 == -1 as graphic)) {
                    int24 = struct_getparam(int8, 7181);
                };
                if ((((int12 == 6) && (int24 != -1 as graphic)) && (int2 == 0))) {
                    int25 = 1;
                    script4490(int8, int12, int14, int21, int22, 0, int2, push_array[4](int19), int4);
                };
                int19 = (int19 + 1);
                [int8, int12, int9, int11, int13, int14] = script6194(push_array[2](++int6));
            };
            if (((int25 == 1) && (int2 == 0))) {
                [int18, int20] = script4492(int22);
                if ((int19 > 1)) {
                    script5155(comp(740, 1), int18, (int19 - 1), 0);
                };
            } else {
                ARRAY_SORT(int19, 3, 4);
                while (((int23 < int19) && (int17 == 0))) {
                    if (((((int23 < 4) && (int19 <= 4)) || (int23 < 3)) || (int2 == 1))) {
                        [int8, int12, int14] = script6195(push_array[4](int23));
                        script4490(int8, int12, int14, int21, int22, int23, int2, push_array[4](int23), int4);
                        int23 = (int23 + 1);
                    } else {
                        int17 = 1;
                        [int18, int20] = script4492(int22);
                        script5155(comp(740, 1), int18, (int19 - int23), 1);
                    };
                };
            };
            [int18, int20] = script4492(int22);
            if (((CC_FIND(comp(740, 1), int18) == 1) && (cc_getparam(7188) == int21))) {
                cc_setparam(7193, int19);
            };
        };
    };
    return;
}