//
function script18869(int0: int, int1: int): void {
    var int2 = varclient_7418;
    var int3 = script18861(int0, int1);
    var int4 = 0;
    if ((int3 != -1)) {
        int4 = CC_SETPARAM_STRING(int3, 1167392, 1, -1, 0);
    };
    var int5 = script18917(int0, int1, -1);
    if (((int4 == 0) && (int5 == 0))) {
        script18870(int0, 0);
        return;
    };
    var int6 = -1 as dbrow;
    var int7 = -1;
    var int8 = 0;
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    while ((int14 < int1)) {
        int15 = 0;
        int16 = 0;
        if ((int3 != -1)) {
            CC_SETPARAM_STRING(int3, 1167392, 1, -1, 0);
        };
        int2 = (varclient_7418 + int14);
        while ((int15 < int4)) {
            dbrow_findnext();
            int6 = stack();
            int7 = script18919(int6);
            if ((int7 == -1)) {
                int10 = dbrow_getfield(int6, 1167392, 0);
                int11 = dbrow_getfield(int6, 1167408, 0);
                if (((int10 <= int2) && (int11 >= int2))) {
                    int12 = (int12 + 1);
                };
            };
            int15 = (int15 + 1);
        };
        while (((int5 > 0) && (int16 <= 19))) {
            int6 = script18916(int16, int0);
            int8 = script18920(int6, -1);
            int9 = script18920(int6, 22);
            if (((int8 == 0) && ((int9 == 100) || (int9 == MAP_LANG())))) {
                int10 = script18920(int6, 0);
                int11 = script18920(int6, 1);
                if (((int10 <= int2) && (int11 >= int2))) {
                    int12 = (int12 + 1);
                };
            };
            int16 = (int16 + 1);
        };
        int13 = MAX(int12, int13);
        int12 = 0;
        int14 = (int14 + 1);
    };
    int13 = MIN(8, int13);
    int13 = MAX(0, (int13 - 1));
    script18870(int0, int13);
    return;
}