//
function script17777(int0: int, int1: int, int2: int, int3: component): int {
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(varplayer_11131, 962768);
    var int7 = script17501(varplayer_11131);
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    while (((++int10 < int6) && (int7 != 5))) {
        [int4, int5] = script17515(varplayer_11131, int10);
        int5 = script17832(int4, int5);
        int8 = (int1 * PARAHEIGHT(` ${inttostring(int5, 10)} ${OC_NAME(int4)}`, (int2 - 18), 207 as fontmetrics));
        script9731(int3, IF_GETNEXTSUBID(int3), 0, (int0 + int9), 0, 0, 18, 18, 0, 0, int4, int5);
        script2995(int3, IF_GETNEXTSUBID(int3), 18, (int0 + int9), 0, 0, (int2 - 18), int8, 0, 0, 2100 as dbrow, ` ${inttostring(int5, 10)} ${OC_NAME(int4)}`);
        script2731(int3, CC_GETID(), 2);
        int9 = (int9 + CC_GETHEIGHT());
    };
    return int9;
}