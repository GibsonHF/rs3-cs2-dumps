//
function script2513(int0: dbrow): int {
    var int1 = script20382();
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int1);
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as dbrow;
    while ((int2 < int3)) {
        int6 = enum_getvalue(0, 74, int1, int2);
        int4 = 0;
        int5 = DB_GETFIELDCOUNT(int6, 127024);
        while ((int4 < int5)) {
            if ((dbrow_getfield(int6, 127024, int4) == int0)) {
                return enum_getreverseindex(74, 0, 14569 as cs2enum, int6, 0);
            };
            int4 = (int4 + 1);
        };
        int2 = (int2 + 1);
    };
    return 1023;
}