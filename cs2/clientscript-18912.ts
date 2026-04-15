//
function script18912(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: dbrow): int {
    var int9 = (int1 + 19);
    define_array((int9 + 1));
    define_array[65536]((int9 + 1));
    define_array[131072]((int3 + 1));
    var int10 = varclient_7418;
    var int11 = -1 as dbrow;
    var int12 = -1;
    var int13 = 0;
    var int14 = -1;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = int6;
    var int19 = int6;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    while ((int21 < int4)) {
        int22 = 0;
        int20 = 0;
        if ((int0 != -1)) {
            CC_SETPARAM_STRING(int0, 1167392, 1, -1, 0);
        };
        int10 = (varclient_7418 + int21);
        var int6 = int18;
        while ((int22 <= int9)) {
            if ((int22 < int1)) {
                dbrow_findnext();
                int11 = stack();
                int12 = script18919(int11);
                if ((int12 == -1)) {
                    int15 = dbrow_getfield(int11, 1167392, 0);
                    int16 = dbrow_getfield(int11, 1167408, 0);
                    if (((int15 <= int10) && (int16 >= int10))) {
                        int17 = 1;
                    };
                };
            } else if (((int2 > 0) && (int22 >= int1))) {
                int11 = script18916((int22 - int1), int7);
                int13 = script18920(int11, -1);
                int14 = script18920(int11, 22);
                if (((int13 == 0) && ((int14 == 100) || (int14 == MAP_LANG())))) {
                    int15 = script18920(int11, 0);
                    int16 = script18920(int11, 1);
                    if (((int15 <= int10) && (int16 >= int10))) {
                        int17 = 1;
                    };
                };
            };
            if ((int17 == 1)) {
                int17 = 0;
                if (((push_array(int22) == 0) && (push_array[2](int20) < int15))) {
                    script18913(int11, int6, int15, int16, int4, int5, int7, int8);
                    pop_array(int22, 1);
                    pop_array[1](int22, int6);
                    if ((push_array[2](int20) < int16)) {
                        pop_array[2](int20, int16);
                    };
                };
                if (((push_array[1](int22) == int6) || (push_array(int22) == 0))) {
                    int6 = (int6 + (41 + 4));
                    int20 = (int20 + 1);
                    int23 = 1;
                };
            };
            if (((int23 == 1) && (int22 < int9))) {
                int23 = 0;
                int22 = 0;
                if ((int0 != -1)) {
                    CC_SETPARAM_STRING(int0, 1167392, 1, -1, 0);
                };
            } else {
                int22 = (int22 + 1);
            };
        };
        int19 = MAX(int6, int19);
        int21 = (int21 + 1);
    };
    return int19;
}