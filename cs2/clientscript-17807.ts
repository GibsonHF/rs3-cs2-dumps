//
function script17807(int0: dbrow, int1: int, int2: component): int {
    var int3 = -1 as stat;
    var int4 = 0;
    var int5 = DB_GETFIELDCOUNT(int0, 962784);
    var int6 = 0;
    var int7 = -1;
    while ((++int7 < int5)) {
        [int3, int4] = script17514(int0, int7);
        int6 = (int6 + script17812(int2, (int1 + int6), 2100 as dbrow, enum_getvalue(0, 23, 745 as cs2enum, script2180(int3)), -1 as obj, `${inttostring((int4 / 10), 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int3)} XP`, 2, 30593 as graphic));
    };
    return int6;
}