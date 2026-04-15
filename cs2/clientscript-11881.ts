//
function script11881(int0: int, int1: unknown_int, int2: unknown_int): void {
    var int3 = comp(1687, 24);
    var int4 = comp(1687, 16);
    var int5 = IF_GETWIDTH(comp(1687, 54));
    var int6 = (int5 / 10);
    var int7 = MAX(1, (SCALE(varbitplayer_29651, 500, int5) + 1));
    IF_SETONTIMER(callback(script11884, int7, int6, 110559284, 110559286), 110559286);
    var int8 = MAX(1, (SCALE(int0, 1000, int5) + 1));
    IF_SETONTIMER(callback(script11884, int8, int6, 110559310, 110559309), 110559309);
    IF_SETTEXT(struct_getparam(int1, 5346), 110559259);
    var int9 = MIN((int2 - script766(32550)), 5);
    var int10 = -1;
    var int11 = -1;
    [int10, int11] = script11875(int9);
    var string0 = enum_getvalue(17, 36, 680, int10);
    var string1 = enum_getvalue(17, 36, 680, int11);
    if ((int9 >= 5)) {
        string0 = "-";
        string1 = "";
    };
    IF_SETTEXT(`<br>Day ${inttostring(MIN((int9 + 1), 5), 10)}/5<br><br>Today's Skills:<br><col=ffffff>${string0}<br><col=ffffff>${string1}`, comp(1687, 28));
    IF_SETTEXT(`Personal<br>Progress<br>${inttostring(SCALE(varbitplayer_29651, 500, 100), 10)}.${inttostring(MODULO(varbitplayer_29651, 10), 10)}%`, comp(1687, 23));
    IF_SETTEXT(`Community<br>Progress:<br>${inttostring((int0 / 10), 10)}.${inttostring(MODULO(int0, 10), 10)}%`, comp(1687, 22));
    var string2 = "";
    var int12 = 0;
    CC_DELETEALL(int3);
    int12 = 0;
    var int13 = 1;
    var int14 = 104;
    var int15 = 0;
    var int16 = -1 as obj;
    var int17 = -1 as struct;
    var int18 = MIN(SCALE(varbitplayer_29651, 500, 100), SCALE(int0, 1000, 100));
    while ((int13 <= 10)) {
        int15 = (int14 + (60 * int13));
        int12 = IF_GETNEXTSUBID(int4);
        if ((int18 >= (int13 * 10))) {
            int17 = 28303 as struct;
        } else {
            int17 = 21363 as struct;
        };
        script10764(int4, int17, (int15 - 18), 131, 36, 36, -1);
        int16 = enum_getvalue(0, 33, 10440 as cs2enum, (int13 - 1));
        CC_CREATE(int4, 6, IF_GETNEXTSUBID(int4));
        CC_SETOBJECT(int16, 1);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int15 - 18), 133, 0, 0);
        string2 = `${OC_NAME(int16)}<br>${item_getparam(int16, 4085)}`;
        CC_SETONMOUSEREPEAT(callback(script8799, string2, int4, (IF_GETNEXTSUBID(int4) - 1)));
        if ((int18 < (int13 * 10))) {
            CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
            CC_SETGRAPHIC(14794 as graphic);
            CC_SETSIZE(36, 36, 0, 0);
            CC_SETPOSITION((int15 - 18), 131, 0, 0);
        };
        if ((MODULO(int13, 2) == 1)) {
            CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
            CC_SETGRAPHIC(18390 as graphic);
            CC_SETPOSITION((int15 - 55), 178, 0, 0);
            CC_SETSIZE(110, 70, 0, 0);
            CC_CREATE(int4, 4, IF_GETNEXTSUBID(int4));
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(item_getparam(int16, 4085));
            CC_SETPOSITION((int15 - 48), 183, 0, 0);
            CC_SETSIZE(95, 60, 0, 0);
            CC_SETTEXTALIGN(1, 1, 12);
        };
        int13 = (int13 + 1);
    };
    return;
}