//
function script17796(int0: dbrow, int1: int, int2: component): int {
    var int3 = 0;
    var int4 = -1 as stat;
    var int5 = DB_GETFIELDCOUNT(int0, 962640);
    var int6 = 0;
    var int7 = 19716 as graphic;
    var int8 = -1;
    while ((++int8 < int5)) {
        [int4, int3] = script17506(int0, int8);
        int7 = 19716 as graphic;
        if ((STAT(int4) < int3)) {
            int7 = 19717 as graphic;
        };
        int6 = (int6 + script17812(int2, (int1 + int6), 2100 as dbrow, enum_getvalue(0, 23, 745 as cs2enum, script2180(int4)), -1 as obj, `${inttostring(int3, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int4)}`, 2, int7));
    };
    return int6;
}