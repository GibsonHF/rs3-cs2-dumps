//
function script11580(int0: int, int1: int, int2: unknown_int, int3: unknown_int, string0: string): void {
    var int4 = script10495(3);
    var string1 = "";
    if ((int2 == 1)) {
        int4 = 16777215;
    };
    if ((int0 > 0)) {
        CC_CREATE(comp(1634, 23), 4, (int1 - 1));
        CC_SETSIZE(0, 24, 1, 0);
        CC_SETPOSITION(0, (24 * (int1 - 1)), 1, 0);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(int4);
        if ((int3 == 0)) {
            CC_SETTEXT(inttostring(int1, 10));
        } else {
            CC_SETTEXT("-");
        };
        CC_CREATE(comp(1634, 25), 4, (int1 - 1));
        CC_SETSIZE(0, 24, 1, 0);
        CC_SETPOSITION(0, (24 * (int1 - 1)), 1, 0);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(int4);
        CC_SETTEXT(string0);
        CC_CREATE(comp(1634, 24), 4, (int1 - 1));
        CC_SETSIZE(0, 24, 1, 0);
        CC_SETPOSITION(0, (24 * (int1 - 1)), 1, 0);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(int4);
        CC_SETTEXT(TOSTRING_LOCALISED(int0, 1));
    };
    return;
}