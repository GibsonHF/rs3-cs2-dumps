//
function script14747(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, string0: string): int {
    if ((int4 == -1)) {
        var int4 = script10495(0);
    };
    var int6 = MAX(int5, script7593(string0, (int3 - (2 * 4)), 58 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics)));
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION((4 + int1), int2, 0, 0);
    CC_SETSIZE(((2 * 4) + int1), int6, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETCOLOUR(int4);
    CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics));
    var int2 = (int2 + (CC_GETHEIGHT() + (2 * 2)));
    return int2;
}