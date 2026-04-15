//
function script17960(int0: struct, int1: obj, int2: cs2enum, int3: component, int4: component, int5: component, int6: component, int7: component, int8: dbrow): void {
    if ((((int0 == -1 as struct) && (int1 == -1 as obj)) && (int2 == -1 as cs2enum))) {
        return;
    };
    IF_SETHIDE(false, int3);
    IF_SETHIDE(false, int4);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    if ((int8 != -1 as dbrow)) {
        if ((DB_GETROWTABLE(int8) != 254)) {
            script12478("Invalid table in positional data.");
            return;
        };
        int9 = dbrow_getfield(int8, 1040384, 0);
        int10 = dbrow_getfield(int8, 1040400, 0);
        int11 = dbrow_getfield(int8, 1040416, 0);
        int12 = dbrow_getfield(int8, 1040432, 0);
        int13 = dbrow_getfield(int8, 1040448, 0);
        int14 = dbrow_getfield(int8, 1040464, 0);
        int15 = 1;
    };
    var int16 = struct_getparam(int0, 5406);
    if ((int16 == -1 as seq)) {
        int16 = 18019 as seq;
    };
    IF_SETMODELANIM(int16, int5);
    script18120(int0, int1, int2, int4, int5, int6, int7, int8);
    if ((int8 == -1 as dbrow)) {
        int9 = 0;
        int11 = 0;
        int13 = 0;
        if ((int0 != -1 as struct)) {
            int14 = struct_getparam(int0, 8668);
            int10 = struct_getparam(int0, 8670);
            int12 = struct_getparam(int0, 8669);
        };
    };
    if (((IF_GETLAYER(int5) == comp(1594, 81)) && (int15 == 0))) {
        int14 = 450;
    };
    IF_SETMODELANGLE(int9, int10, int11, int12, int13, int14, int5);
    return;
}