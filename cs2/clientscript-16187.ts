//
function script16187(int0: int, int1: int, int2: int, int3: component, int4: component, int5: component, string0: string, string1: string): int {
    var int6 = 0;
    if ((IF_CREATENESTED(0, 1, int0, 0, 0, int3) == 1)) {
        int6 = (int6 + (37 + (55 * int1)));
        CC_SETSIZE(0, 30, 1, 0);
    };
    if ((IF_CREATENESTED(3, int2, 0, 1, int0, int3) == 1)) {
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 30, 1, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(3219480);
        CC_SETONOP(callback(script16191, int3, 1, int0, int2, 1, int2, 0, 30, int6, int3, int4, int5));
        CC_SETOP(1, "Expand");
    };
    script7863(int3, int2, 1, 1, int0, 5, 5, 0, 0, 20, 20, 0, 0, 17270 as dbrow, "+");
    CC_SETONSCROLLWHEEL(callback(script36, int4, int3, -2147483646));
    CC_SETONOP(callback(script16191, int3, 1, int0, int2, 1, int2, 0, 30, int6, int3, int4, int5));
    CC_SETOP(1, "Expand");
    CC_SETOPCURSOR(1, 46);
    if ((IF_CREATENESTED(4, int2, 2, 1, int0, int3) == 1)) {
        CC_SETPOSITION(37, 0, 0, 0);
        CC_SETSIZE(37, 30, 1, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(215 as fontmetrics);
        script11024(2);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT(string0);
    };
    if ((IF_CREATENESTED(4, int2, 3, 1, int0, int3) == 1)) {
        CC_SETPOSITION(25, 0, 2, 0);
        CC_SETSIZE(37, 30, 1, 0);
        CC_SETTEXTALIGN(2, 1, 0);
        CC_SETTEXTFONT(215 as fontmetrics);
        script11024(1);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT(string1);
    };
    return (30 + 5);
}