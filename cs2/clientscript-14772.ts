//
function script14772(int0: number): void {
    if ((varplayer_9212 == -1 as dbrow)) {
        return;
    };
    script9554(42991620, 42991642, 42991621, dbrow_getfield(varplayer_9212, 340000, 0), 21218);
    CC_DELETEALL(comp(656, 30));
    CC_DELETEALL(comp(656, 31));
    CC_DELETEALL(comp(656, 29));
    var int1 = DB_GETFIELDCOUNT(varplayer_9212, 340080);
    var int2 = -1 as dbrow;
    var string0 = "";
    var int3 = 25;
    if ((script6431() == 1)) {
        int3 = 38;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    while ((++int6 < int1)) {
        int2 = dbrow_getfield(varplayer_9212, 340080, int6);
        if ((script14505(int2) == 1)) {
            string0 = dbrow_getfield(int2, 344128, 0);
            int4 = MAX(int3, (2 * script7593(string0, (IF_GETWIDTH(comp(656, 30)) - (2 * 1)), 26, 0)));
            script13998(42991646, 42991647, 28556, 1, (int5 + 1), (IF_GETWIDTH(comp(656, 30)) - (2 * 1)), int4, int6, 0, string0, script9670(int6, varplayer_9213));
            if ((CC_FIND(comp(656, 31), int6) == 1)) {
                CC_SETONOP(callback(script14771, int6));
            };
            int5 = (int5 + int4);
        } else {
            CC_CREATE(comp(656, 31), 4, int6);
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(656, 28)), (int5 + 1)), comp(656, 28));
    script7791(42991645, 42991644);
    script14773(int0);
    return;
}