//
function script14016(int0: component, int1: int, int2: unknown_int): void {
    CC_DELETEALL(int0);
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = 0;
    var int5 = 0;
    if ((int2 == 0)) {
        int4 = (IF_GETWIDTH(int0) / int1);
        int5 = IF_GETHEIGHT(int0);
    } else if ((int2 == 1)) {
        int4 = IF_GETWIDTH(int0);
        int5 = (IF_GETHEIGHT(int0) / int1);
    };
    while ((int3 < int1)) {
        CC_CREATE(int0, 4, int3);
        CC_SETSIZE(int4, int5, 0, 0);
        if ((int2 == 0)) {
            CC_SETPOSITION((int3 * int4), 0, 0, 0);
        } else {
            CC_SETPOSITION(0, (int3 * int5), 0, 0);
        };
        CC_SETTEXT(inttostring(int3, 10));
        CC_SETCOLOUR(16764170);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETOP(1, "Mark off");
        CC_SETONOP(callback(script14026, -2147483645, -2147483643));
        int3 = (int3 + 1);
    };
    return;
}