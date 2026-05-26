//
function script14956(int0: number): void {
    var int1 = 31260692;
    var int2 = 31260690;
    var int3 = 31260691;
    CC_DELETEALL(int1);
    IF_SETHIDE(0, 31260676);
    IF_SETSIZE(0, 0, 1, 1, int2);
    IF_SETTEXT(OC_NAME(int0), 31260688);
    var string0 = script14957(int0);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(10, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTSHADOW(1);
    var int4 = script7593(string0, IF_GETWIDTH(int2), 26, 0);
    if ((int4 > IF_GETHEIGHT(int2))) {
        IF_SETSIZE((16 + 3), 0, 1, 1, int2);
        IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int2), int4), int2);
        IF_SETSCROLLPOS(0, 0, int2);
        script7791(int3, int2);
    } else {
        IF_SETSIZE(0, 0, 1, 1, int2);
        CC_DELETEALL(int3);
    };
    return;
}