//
function script7709(string0: string): void {
    var int0 = IF_GETNEXTSUBID(92471296);
    var int1 = 15;
    var int2 = 50;
    var int3 = 300;
    var int4 = 5;
    CC_CREATE(92471303, 4, int0);
    CC_SETSIZE(int3, int1, 0, 0);
    CC_SETPOSITION(5, (int4 + (int0 * (int4 + int1))), 0, 0);
    CC_SETTEXTFONT(67);
    CC_SETCOLOUR(16777215);
    CC_SETTEXT(string0);
    CC_CREATE(92471297, 3, int0);
    CC_SETSIZE(int2, int1, 0, 0);
    CC_SETPOSITION(int4, (int4 + (int0 * (int4 + int1))), 2, 0);
    CC_SETCOLOUR(16777215);
    CC_CREATE(92471296, 4, int0);
    CC_SETSIZE(int2, int1, 0, 0);
    CC_SETPOSITION(int4, (int4 + (int0 * (int4 + int1))), 2, 0);
    CC_SETTEXTFONT(67);
    CC_SETCOLOUR(16777215);
    CC_SETONCLICK(callback(script7712, 92471358, 92471352, -2147483645, -2147483643));
    CC_SETOP(1, "Enter");
    return;
}