//
function script7709(string0: string): void {
    var int0 = IF_GETNEXTSUBID(comp(1411, 0));
    var int1 = 15;
    var int2 = 50;
    var int3 = 300;
    var int4 = 5;
    CC_CREATE(comp(1411, 7), 4, int0);
    CC_SETSIZE(int3, int1, 0, 0);
    CC_SETPOSITION(5, (int4 + (int0 * (int4 + int1))), 0, 0);
    CC_SETTEXTFONT(67 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXT(string0);
    CC_CREATE(comp(1411, 1), 3, int0);
    CC_SETSIZE(int2, int1, 0, 0);
    CC_SETPOSITION(int4, (int4 + (int0 * (int4 + int1))), 2, 0);
    CC_SETCOLOUR(16777215);
    CC_CREATE(comp(1411, 0), 4, int0);
    CC_SETSIZE(int2, int1, 0, 0);
    CC_SETPOSITION(int4, (int4 + (int0 * (int4 + int1))), 2, 0);
    CC_SETTEXTFONT(67 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETONCLICK(callback(script7712, 92471358, 92471352, -2147483645, -2147483643));
    CC_SETOP(1, "Enter");
    return;
}