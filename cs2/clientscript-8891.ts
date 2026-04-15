//
function script8891(int0: component, int1: int, int2: int, int3: unknown_int, string0: string): int {
    var int4 = 3;
    if ((int3 == 1)) {
        int4 = 6;
    };
    var int5 = (IF_GETWIDTH(int0) - int1);
    var int6 = script7593(string0, int5, 26 as fontmetrics, -1);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int1, int6, 1, 0);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETTEXT(string0);
    CC_SETMAXLINES(0);
    CC_SETCOLOUR(script10495(int4));
    if ((int3 == 1)) {
        CC_SETTEXTSHADOW(true);
    };
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    return ((int2 + int6) + 5);
}