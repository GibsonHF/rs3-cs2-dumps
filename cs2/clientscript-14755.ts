//
function script14755(int0: component, int1: int, int2: int, int3: unknown_int, int4: int, int5: int, string0: string, string1: string): int {
    var int6 = -1;
    var [int6, int1] = script14749(int0, 0, int1, int2, 0);
    var int7 = IF_GETNEXTSUBID(int0);
    var int8 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int8 = 28 as fontmetrics;
    };
    CC_CREATE(int0, 4, int7++);
    CC_SETPOSITION(4, int1, 0, 0);
    CC_SETTEXT(`${string0}:`);
    CC_SETTEXTFONT(int8);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE((2 * 4), enum_getvalue(25, 0, 8549 as cs2enum, int8), 1, 0);
    CC_CREATE(int0, 4, int7++);
    CC_SETPOSITION(4, int1, 0, 0);
    CC_SETTEXT(string1);
    CC_SETTEXTFONT(int8);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(2, 1, 0);
    CC_SETSIZE((2 * 4), enum_getvalue(25, 0, 8549 as cs2enum, int8), 1, 0);
    var int9 = CC_GETHEIGHT();
    if ((int3 != -1)) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(int4, int5, 0, 0);
        CC_SETPOSITION(((4 + PARAWIDTH(string1, IF_GETWIDTH(int0), int8)) + 4), (int1 - ((int5 - int9) / 2)), 2, 0);
        CC_SETGRAPHIC(21354 as graphic);
    };
    int1 = (int1 + int9);
    int1 = script14750(int0, int6, int1, 0);
    return int1;
}