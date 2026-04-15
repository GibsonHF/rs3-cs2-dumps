//
function script2957(int0: int, int1: int, int2: unknown_int): void {
    CC_DELETEALL(comp(365, 12));
    CC_DELETEALL(comp(365, 13));
    CC_DELETEALL(comp(365, 17));
    CC_DELETEALL(comp(365, 18));
    CC_DELETEALL(comp(365, 19));
    CC_DELETEALL(comp(365, 20));
    CC_DELETEALL(comp(365, 10));
    IF_SETHIDE(true, comp(365, 21));
    IF_SETHIDE(true, comp(365, 22));
    IF_SETHIDE(true, comp(365, 23));
    IF_SETHIDE(true, comp(365, 7));
    var int3 = script20382();
    var int4 = 0;
    var int5 = comp(365, 2);
    var int6 = STRING_LENGTH(IF_GETTEXT(int5));
    var [int0, int1] = script2510(int0, int1);
    var int7 = 0;
    var int8 = ENUM_GETOUTPUTCOUNT(int3);
    var int9 = 0;
    var int10 = IF_GETWIDTH(comp(365, 14));
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as dbrow;
    var int15 = -1 as dbrow;
    var int16 = enum_getvalue(0, 74, 14569 as cs2enum, int1);
    var int17 = enum_getvalue(0, 74, 14569 as cs2enum, int0);
    while ((int7 < int8)) {
        int14 = enum_getvalue(0, 74, int3, int7);
        int13 = DB_GETFIELDCOUNT(int14, 127024);
        if ((int6 >= 2)) {
            int11 = script2971(int14, 0, int11, int10, -3);
        } else if ((int13 == 0)) {
            int11 = script2971(int14, 0, int11, int10, int1);
        } else if ((((int17 != int14) || (varclient_6501 == 1)) || (script2972(int14, int13, int16) == 0))) {
            int11 = script2971(int14, 0, int11, int10, -1);
        } else {
            int11 = script2971(int14, 0, int11, int10, -2);
            int12 = 0;
            while ((int12 < int13)) {
                int15 = dbrow_getfield(int14, 127024, int12);
                int11 = script2971(int15, 10, int11, (int10 - 10), int1);
                int12 = (int12 + 1);
            };
        };
        int7 = (int7 + 1);
    };
    IF_SETSCROLLSIZE(0, int11, comp(365, 14));
    script7791(comp(365, 15), comp(365, 14));
    if ((int6 >= 2)) {
        script9394(int5, int2, int3);
        return;
    };
    int14 = enum_getvalue(0, 74, 14569 as cs2enum, int1);
    if ((int14 == -1 as dbrow)) {
        return;
    };
    int10 = IF_GETWIDTH(comp(365, 16));
    var string0 = dbrow_getfield(int14, 126976, 0);
    var string1 = dbrow_getfield(int14, 126992, 0);
    var int18 = script20478(string0, int10, 2195 as dbrow, 0);
    var int19 = script20478(string1, int10, 17514 as dbrow, 0);
    script2995(comp(365, 18), IF_GETNEXTSUBID(comp(365, 18)), 0, 0, 0, 0, int10, int18, 0, 0, 2195 as dbrow, string0);
    CC_SETTEXTALIGN(1, 1, 0);
    script2995(comp(365, 18), IF_GETNEXTSUBID(comp(365, 18)), 4, (int18 + 4), 0, 0, (int10 - (2 * 4)), int19, 0, 0, 17514 as dbrow, string1);
    int11 = (int18 + 4);
    if ((STRING_LENGTH(string1) > 0)) {
        int11 = ((int11 + int19) + 4);
    };
    int11 = script2970(comp(365, 18), comp(365, 19), comp(365, 20), int14, int1, int11, int10);
    script5713(int2, int11);
    return;
}