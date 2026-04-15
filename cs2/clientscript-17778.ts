//
function script17778(int0: int, int1: int, int2: int, int3: component): int {
    var int4 = script17542(script17497(varplayer_11130));
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = 0;
    var int8 = DB_GETFIELDCOUNT(varplayer_11131, 962800);
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    while ((++int11 < int8)) {
        [int5, int6, int7] = script17516(varplayer_11131, int11);
        int7 = script17832(int6, int7);
        if ((int5 == int4)) {
            int9 = (int1 * PARAHEIGHT(` ${inttostring(int7, 10)} ${OC_NAME(int6)}`, (int2 - 18), 207 as fontmetrics));
            script9731(int3, IF_GETNEXTSUBID(int3), 0, (int0 + int10), 0, 0, 18, 18, 0, 0, int6, int7);
            script2995(int3, IF_GETNEXTSUBID(int3), 18, (int0 + int10), 0, 0, (int2 - 18), int9, 0, 0, 2100 as dbrow, ` ${inttostring(int7, 10)} ${OC_NAME(int6)}`);
            script2731(int3, CC_GETID(), 2);
            int10 = (int10 + CC_GETHEIGHT());
        };
    };
    return int10;
}