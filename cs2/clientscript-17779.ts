//
function script17779(int0: number, int1: number, int2: number, int3: number): number {
    var string0 = script17517(varplayer_11131);
    var int4 = 0;
    var int5 = 0;
    if ((STRING_LENGTH(string0) > 0)) {
        int4 = (int1 * PARAHEIGHT(string0, int2, 207 as fontmetrics));
        script2995(int3, IF_GETNEXTSUBID(int3), 0, (int0 + int5), 0, 0, int2, int4, 0, 0, 2100, string0);
        script2731(int3, CC_GETID(), 2);
        int5 = (int5 + CC_GETHEIGHT());
    };
    return int5;
}