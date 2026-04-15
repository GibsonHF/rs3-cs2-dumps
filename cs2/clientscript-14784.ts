//
function script14784(int0: int): void {
    CC_DELETEALL(comp(657, 20));
    CC_DELETEALL(comp(657, 24));
    CC_DELETEALL(comp(657, 25));
    CC_DELETEALL(comp(657, 21));
    var int1 = enum_getvalue(0, 74, varplayer_9215, int0);
    var int2 = dbrow_getfield(int1, 335984, 0);
    var int3 = DB_GETFIELDCOUNT(int2, 340080);
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = 20;
    if ((script6431() == true)) {
        int6 = 14;
    };
    var int7 = -1;
    while ((++int7 < int3)) {
        int4 = dbrow_getfield(int2, 340080, int7);
        int5 = script14765(comp(657, 20), comp(657, 24), 43057177, comp(-1, 65535), int4, int6, int5, (IF_GETWIDTH(comp(657, 19)) - (2 * int6)), IF_GETNEXTSUBID(comp(657, 25)), -1);
        int5 = (int5 + 8);
    };
    int7 = -1;
    var int8 = IF_GETNEXTSUBID(comp(657, 25));
    while ((++int7 < int8)) {
        if ((CC_FIND(comp(657, 25), int7) == 1)) {
            CC_SETOP(10, "Examine");
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(657, 19)), int5), comp(657, 19));
    return;
}