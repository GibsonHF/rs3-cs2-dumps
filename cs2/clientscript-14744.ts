//
function script14744(): void {
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(4261);
    var int2 = script14591(int1);
    if ((int2 == -1 as dbrow)) {
        return;
    };
    if ((dbrow_getfield(int2, 352272, 0) != 1)) {
        return;
    };
    var string0 = script14592(int2);
    var string1 = script15985(int2);
    var string2 = script14593(int2);
    var int3 = dbrow_getfield(int2, 352320, 0);
    var int4 = dbrow_getfield(int2, 352384, 0);
    var int5 = script14589(dbrow_getfield(int2, 352368, 0));
    var int6 = dbrow_getfield(int2, 352464, 0);
    var int7 = 200;
    var int8 = 0;
    var int9 = 100;
    var int10 = 26 as fontmetrics;
    var int11 = 0;
    if ((script6431() == true)) {
        int7 = 300;
        int9 = 150;
        int10 = 28 as fontmetrics;
    };
    int11 = script14747(int0, 0, int11, int7, string0, -1, 0);
    int11 = script14748(int0, 0, int11);
    if ((int4 != -1 as graphic)) {
        script7924(int0, IF_GETNEXTSUBID(int0), int7, int9, 0, int11, int4, false, false, false, 0);
        int11 = (int11 + (int9 + 2));
    };
    var int12 = script7593(dbrow_getfield(int2, 352304, 0), (int7 - (2 * 4)), int10, enum_getvalue(25, 0, 8549 as cs2enum, int10));
    script152(int0, (int7 - (2 * 4)), int12, 4, int11, int10, dbrow_getfield(int2, 352304, 0), script10495(3));
    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549 as cs2enum, int10));
    int11 = (int11 + (int12 + (2 * 2)));
    if (((MAP_MEMBERS() == 0) && (int3 == true))) {
        int11 = script14754(int0, int11, ++int8);
    };
    if ((STRING_LENGTH(string2) > 0)) {
        int11 = script14753(int0, int11, ++int8, string1, string2);
    };
    int11 = script14753(int0, int11, ++int8, "Archaeology Level", inttostring(dbrow_getfield(int2, 352352, 0), 10));
    if ((int5 != -1 as dbrow)) {
        int11 = script14753(int0, int11, ++int8, "Qualification", dbrow_getfield(int5, 380944, 0));
    };
    if ((int6 != -1 as obj)) {
        int11 = script14753(int0, int11, ++int8, "Soil", OC_NAME(int6));
    };
    IF_SETSIZE(int7, (int11 - 2), 0, 0, int0);
    return;
}