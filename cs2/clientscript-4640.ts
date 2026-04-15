//
function script4640(int0: int): void {
    if ((int0 == -1)) {
        return;
    };
    var int1 = enum_getvalue(0, 26, 14628 as cs2enum, int0);
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    var int2 = comp(93, 9);
    CC_DELETEALL(int2);
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    script2733(int2, CC_GETID(), 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 13, 1, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(enum_getvalue(0, 36, 14627 as cs2enum, int0));
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    var int5 = 20;
    var int6 = IF_GETWIDTH(int2);
    var string0 = "";
    while ((++int3 < int4)) {
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        script2733(int2, CC_GETID(), 3);
        CC_SETPOSITION(((int6 / 2) * MODULO(int3, 2)), int5, 0, 0);
        CC_SETSIZE(150, 16, 0, 0);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETMAXLINES(1);
        CC_SETTEXTALIGN(0, 0, 0);
        string0 = enum_getvalue(0, 36, int1, int3);
        CC_SETTEXT(script3930(string0, 150, 1, 27 as fontmetrics));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        int5 = (int5 + (16 * MODULO(int3, 2)));
    };
    IF_SETSCROLLPOS(0, 0, comp(93, 8));
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(93, 4)), (int5 + 16)), comp(93, 8));
    script7791(comp(93, 10), comp(93, 8));
    return;
}