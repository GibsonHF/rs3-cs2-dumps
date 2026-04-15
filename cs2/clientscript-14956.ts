//
function script14956(int0: obj): void {
    var int1 = comp(477, 20);
    var int2 = comp(477, 18);
    var int3 = comp(477, 19);
    CC_DELETEALL(int1);
    IF_SETHIDE(false, comp(477, 4));
    IF_SETSIZE(0, 0, 1, 1, int2);
    IF_SETTEXT(OC_NAME(int0), comp(477, 16));
    var string0 = script14957(int0);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(10, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTSHADOW(true);
    var int4 = script7593(string0, IF_GETWIDTH(int2), 26 as fontmetrics, 0);
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