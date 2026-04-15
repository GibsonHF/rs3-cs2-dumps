//
function script6894(int0: component, int1: component, int2: component, string0: string): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int3 = (script7593(string0, IF_GETWIDTH(int0), 27 as fontmetrics, 10) + 2);
    var int4 = IF_GETHEIGHT(int0);
    CC_CREATE(int0, 4, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, MAX(int3, int4), 1, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(IF_GETCOLOUR(int2));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    if ((int3 > int4)) {
        IF_SETSCROLLSIZE(0, int3, int0);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
    };
    IF_SETSCROLLPOS(0, 0, int0);
    script7791(int1, int0);
    return;
}