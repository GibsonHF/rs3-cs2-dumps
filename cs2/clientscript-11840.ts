//
function script11840(int0: int, int1: int): void {
    if (((script10405(int1) == -1 as struct) || (script8699(int0) == 0))) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    [int2, int3, int11, int11, int4, int5, int6, int7, int8, int9, int10] = script8701(int0, int1);
    if ((int10 == 0)) {
        return;
    };
    var int12 = 0;
    if ((int8 == 1)) {
        int8 = 0;
        int12 = 1;
    };
    var int13 = -1;
    var int14 = -1;
    if ((script8137(int1) == 0)) {
        int13 = int6;
        int6 = -1;
        int14 = int7;
        int7 = -1;
    };
    script8709(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9);
    if ((int14 != -1)) {
        [int2, int3, int11, int11, int4, int5, int6, int7, int8, int9, int10] = script8701(int0, int14);
        if (((int10 == 1) && (int6 == int1))) {
            if ((int12 == 1)) {
                int8 = 1;
                int12 = 0;
            };
            int6 = int13;
            script8709(int0, int14, int2, int3, int4, int5, int6, int7, int8, int9);
        };
    };
    if ((int13 != -1)) {
        [int2, int3, int11, int11, int4, int5, int6, int7, int8, int9, int10] = script8701(int0, int13);
        if (((int10 == 1) && (int7 == int1))) {
            if ((int12 == 1)) {
                int8 = 1;
                int12 = 0;
            };
            int7 = int14;
            script8709(int0, int13, int2, int3, int4, int5, int6, int7, int8, int9);
        };
    };
    return;
}