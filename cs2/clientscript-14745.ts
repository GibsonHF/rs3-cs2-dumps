//
function script14745(): void {
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(4261);
    var int2 = script14591(int1);
    if ((int2 == -1 as dbrow)) {
        return;
    };
    if ((dbrow_getfield(int2, 352272, 0) != 2)) {
        return;
    };
    var string0 = script14592(int2);
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = "Excavation Site";
    };
    var int3 = 200;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    if ((script6431() == true)) {
        int3 = 300;
    };
    var int8 = DB_GETFIELDCOUNT(int2, 352528);
    var int9 = -1 as dbrow;
    var int10 = 0;
    if ((int8 > 3)) {
        int3 = (int3 * 2);
        int10 = 1;
    };
    int6 = script14747(int0, 0, int6, int3, string0, -1, 0);
    int6 = script14748(int0, 0, int6);
    int7 = -1;
    var int11 = 0;
    var int12 = int6;
    var int13 = 0;
    while ((++int7 < int8)) {
        int9 = dbrow_getfield(int2, 352528, int7);
        if ((int9 != -1 as dbrow)) {
            [int6, int11] = script14746(int0, int6, ++int4, int3, int9, int10, int13, int12);
            if ((MODULO(int4, 2) == 1)) {
                int12 = int6;
                int13 = int11;
            };
        };
    };
    IF_SETSIZE(int3, (int6 - 2), 0, 0, int0);
    return;
}