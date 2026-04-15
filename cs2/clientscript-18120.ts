//
function script18120(int0: struct, int1: obj, int2: cs2enum, int3: component, int4: component, int5: component, int6: component, int7: dbrow): void {
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int13, int9, int11, int8] = script16789(int0);
    if ((int7 != -1 as dbrow)) {
        if ((DB_GETROWTABLE(int7) != 254)) {
            script12478("Invalid table in positional data.");
            return;
        };
        int8 = dbrow_getfield(int7, 1040384, 0);
        int9 = dbrow_getfield(int7, 1040400, 0);
        int10 = dbrow_getfield(int7, 1040416, 0);
        int11 = dbrow_getfield(int7, 1040432, 0);
        int12 = dbrow_getfield(int7, 1040448, 0);
        int13 = dbrow_getfield(int7, 1040464, 0);
        int14 = 1;
    };
    IF_SETONTIMER(callback(script11621, int0, 2, 50, -1, int5, int4, int6, int7), int5);
    if ((int7 == -1)) {
        int8 = 1000;
        int9 = 115;
        int10 = 0;
        int11 = 200;
        int12 = 0;
        int13 = 380;
    };
    if (((IF_GETLAYER(int4) == comp(1594, 81)) && (int14 == 0))) {
        int13 = 450;
    };
    IF_SETMODELANIM(struct_getparam(int0, 9359), int4);
    IF_SETMODELANGLE(int8, int9, int10, int11, int12, int13, int4);
    script11618(int1, int2, int4);
    script11619(int3, int4);
    return;
}