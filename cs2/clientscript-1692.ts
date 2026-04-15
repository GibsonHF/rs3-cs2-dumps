//
function script1692(int0: component, int1: int, int2: int, int3: int): [int, int] {
    var int4 = enum_getvalue(0, 73, 845 as cs2enum, int2);
    if ((int2 == -1)) {
        int4 = 34782 as struct;
    };
    var string0 = struct_getparam(int4, 925);
    var int5 = struct_getparam(int4, 813);
    var string1 = struct_getparam(int4, 924);
    var int6 = ((PARAHEIGHT(string0, (IF_GETWIDTH(int0) - 22), 26 as fontmetrics) * 11) + 5);
    var int7 = ((32 + int6) + 10);
    CC_SETSIZE(0, int7, 1, 0);
    CC_SETPOSITION(0, int1, 1, 0);
    CC_SETFILL(1);
    if ((MODULO(int3, 2) == 0)) {
        CC_SETCOLOUR(464928);
    } else {
        CC_SETCOLOUR(1846324);
    };
    if ((INV_TOTAL(93 as inv, int5) == 0)) {
        CC_SETOP(1, "Take");
        CC_SETOPCURSOR(1, 45);
    } else {
        CC_SETOPCURSOR(1, -1);
    };
    CC_SETOP(10, "Examine");
    CC_SETOPBASE(`<col=ff9040>${OC_NAME(struct_getparam(int4, 813))}`);
    CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(0, int7, 1, 0);
    CC_SETPOSITION(0, int1, 1, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTRANS(255);
    CC_SETONMOUSEOVER(callback(script2140, -2147483645, -2147483643, 0));
    CC_SETONMOUSELEAVE(callback(script2140, -2147483645, -2147483643, 255));
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETPOSITION(4, (int1 + 6), 0, 0);
    CC_SETOBJECT_NONUM(struct_getparam(int4, 813), 1);
    var string2 = "You already have this book in your pack.";
    if ((INV_TOTAL(93, int5) == 0)) {
        CC_SETTRANS(0);
        CC_SETOUTLINE(2);
        CC_SETONMOUSEREPEAT(callback());
    } else {
        CC_SETTRANS(100);
        CC_SETOUTLINE(1);
        CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(2, (int1 + 4), 2, 0);
    CC_SETCOLOUR(16773260);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTSHADOW(false);
    CC_CREATE[1](int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE[1]((36 + 4), 12, 1, 0);
    CC_SETPOSITION[1](2, ((int1 + 4) + (32 - CC_GETHEIGHT[1]())), 2, 0);
    CC_SETTEXTFONT[1](28 as fontmetrics);
    CC_SETCOLOUR[1](16750623);
    CC_SETTEXTALIGN[1](0, 1, 0);
    CC_SETTEXTSHADOW[1](false);
    var int8 = struct_getparam(int4, 923);
    if ((int8 != -1 as quest)) {
        CC_SETSIZE((36 + 4), (32 - CC_GETHEIGHT[1]()), 1, 0);
        CC_SETTEXT[1](script2103(int8));
    } else {
        CC_SETSIZE((36 + 4), 32, 1, 0);
        CC_SETHIDE[1](true);
    };
    if ((PARAHEIGHT(string1, CC_GETWIDTH(), 28 as fontmetrics) <= 1)) {
        CC_SETTEXTFONT(28 as fontmetrics);
    } else {
        CC_SETTEXTFONT(26 as fontmetrics);
    };
    CC_SETTEXT(string1);
    CC_SETCOLOUR(15777401);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(22, int6, 1, 0);
    CC_SETPOSITION(5, ((int1 + 32) + 6), 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(11456736);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string0);
    return [(int1 + int7), CC_GETID()];
}