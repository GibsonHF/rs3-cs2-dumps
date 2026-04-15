//
function script584(int0: component, string0: string): void {
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETHEIGHT(int0);
    var int3 = (int1 - 32);
    var int4 = (int2 - 32);
    var int5 = (int1 - 64);
    var int6 = (int2 - 64);
    if ((int5 < 0)) {
        int5 = 0;
    };
    if ((int6 < 0)) {
        int6 = 0;
    };
    var int7 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 4, int7);
    CC_SETPOSITION(5, 5, 0, 0);
    CC_SETSIZE((int1 - 6), 15, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETCOLOUR(15777401);
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}