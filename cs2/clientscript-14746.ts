//
function script14746(int0: component, int1: int, int2: int, int3: int, int4: dbrow, int5: unknown_int, int6: int, int7: int): [int, int] {
    var int8 = 0;
    if ((int5 == 1)) {
        var int3 = (int3 / 2);
        if ((MODULO(int2, 2) == 1)) {
            int8 = int3;
            var int1 = int7;
        };
    };
    var int9 = -1;
    [int9, int1] = script14749(int0, 0, int1, int2, int5);
    var int10 = int1;
    var int11 = ((((int8 + 4) + 4) + (35 + 2)) + (2 * 4));
    var int12 = ((((int3 - (2 * 4)) - 4) - (35 + 2)) - (2 * 4));
    var int13 = 16777215;
    if ((STAT_BASE(script2179(28)) < dbrow_getfield(int4, 360512, 0))) {
        int13 = script10495(6);
    };
    int1 = script14757(int0, int11, int1, int12, script14578(int4), int13);
    var int14 = DB_GETFIELDCOUNT(int4, 360688);
    var int15 = DB_GETFIELDCOUNT(int4, 360720);
    var int16 = MIN(int14, 4);
    define_array[33](4);
    var int17 = -1 as dbrow;
    var int18 = -1 as obj;
    var int19 = -1;
    var int20 = -1;
    while ((++int20 < 4)) {
        if ((int20 < int16)) {
            [int18, int19] = dbrow_getfield(int4, 360688, int20);
            pop_array(int20, int18);
        } else {
            pop_array(int20, -1);
        };
    };
    if ((int16 > 0)) {
        int1 = script14760(int0, int11, int1, int12, "Materials", int14, push_array(0), OC_NAME(push_array(0)), push_array(1), OC_NAME(push_array(1)), push_array(2), OC_NAME(push_array(2)), push_array(3), OC_NAME(push_array(3)), int13);
    };
    int16 = MIN(int15, 4);
    int20 = -1;
    while ((++int20 < 4)) {
        if ((int20 < int16)) {
            [int17, int19] = dbrow_getfield(int4, 360720, int20);
            if ((DB_GETROWTABLE(int17) == 89)) {
                pop_array(int20, dbrow_getfield(int17, 364640, 0));
            } else {
                pop_array(int20, -1);
            };
        } else {
            pop_array(int20, -1);
        };
    };
    if ((int16 > 0)) {
        int1 = script14760(int0, int11, int1, int12, "Artefacts", int15, push_array(0), OC_NAME(push_array(0)), push_array(1), OC_NAME(push_array(1)), push_array(2), OC_NAME(push_array(2)), push_array(3), OC_NAME(push_array(3)), int13);
    };
    var int21 = (int1 - int10);
    int11 = ((int8 + 4) + 4);
    var int22 = 35;
    var int23 = (((35 + 2) + 2) + enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics));
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int4, 360496, 0) == true))) {
        int21 = MAX(int21, ((int22 + int23) + (2 * 2)));
        int1 = (int10 + ((((int21 - int22) - int23) - (2 * 2)) / 2));
        script7924(int0, IF_GETNEXTSUBID(int0), 35, 32, int11, int1, 21354 as graphic, false, false, false, 0);
        int1 = (int1 + (35 + (2 * 2)));
    } else {
        int21 = MAX(int21, int23);
        int1 = (int10 + ((((int21 - (35 + 2)) - enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)) - (2 * 2)) / 2));
    };
    script14761(int0, int11, int1, 35, 28, dbrow_getfield(int4, 360512, 0), int13);
    if ((int6 > int21)) {
        int21 = int6;
    };
    int1 = script14750(int0, int9, (int10 + int21), int5);
    return [int1, int21];
}