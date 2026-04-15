//
function script18911(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: dbrow, int8: unknown_int): int {
    var int9 = -1 as dbrow;
    var int10 = -1;
    var int11 = 0;
    var int12 = -1;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    if ((int0 != -1)) {
        CC_SETPARAM_STRING(int0, 1167392, 1, -1, 0);
    };
    while ((int15 < int1)) {
        dbrow_findnext();
        int9 = stack();
        int10 = script18919(int9);
        if ((int10 == -1)) {
            int13 = dbrow_getfield(int9, 1167392, 0);
            int14 = dbrow_getfield(int9, 1167408, 0);
            script18913(int9, int5, int13, int14, int3, int4, int6, int7);
            if ((int8 == 0)) {
                var int5 = (int5 + (41 + 4));
            };
        };
        int15 = (int15 + 1);
    };
    while (((int2 > 0) && (int16 <= 19))) {
        int9 = script18916(int16, int6);
        int11 = script18920(int9, -1);
        int12 = script18920(int9, 22);
        if (((int11 == 0) && ((int12 == 100) || (int12 == MAP_LANG())))) {
            int13 = script18920(int9, 0);
            int14 = script18920(int9, 1);
            if ((((int13 < varclient_7418) && (int14 < varclient_7418)) || ((int13 > int4) && (int14 > int4)))) {
            } else {
                script18913(int9, int5, int13, int14, int3, int4, int6, int7);
                if ((int8 == 0)) {
                    int5 = (int5 + (41 + 4));
                };
            };
        };
        int16 = (int16 + 1);
    };
    if ((int8 == 1)) {
        int5 = (int5 + (41 + 4));
    };
    return int5;
}