//
function script17776(int0: int, int1: int, int2: int, int3: component): int {
    var int4 = -1 as stat;
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(varplayer_11131, 962784);
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    while ((++int9 < int6)) {
        [int4, int5] = script17514(varplayer_11131, int9);
        int7 = (int1 * PARAHEIGHT(` ${inttostring((int5 / 10), 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int4)} XP`, (int2 - 18), 207 as fontmetrics));
        script2994(int3, IF_GETNEXTSUBID(int3), 0, (int0 + int8), 0, 0, 18, 18, 0, 0, enum_getvalue(0, 23, 745 as cs2enum, script2180(int4)));
        script2995(int3, IF_GETNEXTSUBID(int3), 18, (int0 + int8), 0, 0, (int2 - 18), int7, 0, 0, 2100 as dbrow, ` ${inttostring((int5 / 10), 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int4)} XP`);
        script2731(int3, CC_GETID(), 2);
        int8 = (int8 + CC_GETHEIGHT());
    };
    return int8;
}