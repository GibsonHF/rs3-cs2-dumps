//
function script14782(int0: unknown_int): void {
    if ((varplayer_9215 == -1 as cs2enum)) {
        return;
    };
    CC_DELETEALL(comp(657, 12));
    CC_DELETEALL(comp(657, 13));
    CC_DELETEALL(comp(657, 9));
    var int1 = ENUM_GETOUTPUTCOUNT(varplayer_9215);
    var int2 = -1 as dbrow;
    var string0 = "";
    var int3 = 0;
    var int4 = -1;
    var int5 = 25;
    if ((script6431() == true)) {
        int5 = 38;
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    while ((++int8 < int1)) {
        int2 = enum_getvalue(0, 74, varplayer_9215, int8);
        if ((script14575(int2) == 1)) {
            string0 = dbrow_getfield(int2, 335888, 0);
            int6 = MAX(int5, (2 * script7593(string0, (IF_GETWIDTH(comp(657, 8)) - (2 * 1)), 26 as fontmetrics, 0)));
            script13998(comp(657, 12), comp(657, 13), 28556 as struct, 1, (int7 + 1), (IF_GETWIDTH(comp(657, 8)) - (2 * 1)), int6, int8, false, string0, script9670(int8, varplayer_9218));
            if ((CC_FIND(comp(657, 13), int8) == 1)) {
                CC_SETONOP(callback(script14781, int8));
            };
            int7 = (int7 + int6);
        } else {
            CC_CREATE(comp(657, 13), 4, int8);
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(657, 8)), (int7 + 1)), comp(657, 8));
    script7791(comp(657, 9), comp(657, 8));
    script10428(comp(657, 26), comp(657, 27), varplayer_9216, (ENUM_GETOUTPUTCOUNT(varplayer_9216) - 1), "Select a filter", varplayer_9217, 1);
    script14783(varplayer_9218);
    script14784(varplayer_9218);
    if ((int0 == 1)) {
        IF_SETSCROLLPOS(0, 0, comp(657, 19));
    };
    script7791(comp(657, 21), comp(657, 19));
    return;
}