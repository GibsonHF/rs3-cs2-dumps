//
function script14784(int0: number): void {
    CC_DELETEALL(43057172);
    CC_DELETEALL(43057176);
    CC_DELETEALL(43057177);
    CC_DELETEALL(43057173);
    var int1 = enum_getvalue(0, 74, varplayer_9215, int0);
    var int2 = dbrow_getfield(int1, 335984, 0);
    var int3 = DB_GETFIELDCOUNT(int2, 340080);
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = 20;
    if ((script6431() == 1)) {
        int6 = 14;
    };
    var int7 = -1;
    while ((++int7 < int3)) {
        int4 = dbrow_getfield(int2, 340080, int7);
        int5 = script14765(43057172, 43057176, 43057177, -1, int4, int6, int5, (IF_GETWIDTH(43057171) - (2 * int6)), IF_GETNEXTSUBID(43057177), -1);
        int5 = (int5 + 8);
    };
    int7 = -1;
    var int8 = IF_GETNEXTSUBID(43057177);
    while ((++int7 < int8)) {
        if ((CC_FIND(43057177, int7) == 1)) {
            CC_SETOP(10, "Examine");
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(43057171), int5), 43057171);
    return;
}