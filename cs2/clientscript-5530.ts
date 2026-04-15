//
function script5530(int0: int, int1: int, int2: obj, int3: component, int4: component, int5: component, int6: component): void {
    var int7 = 0;
    var int8 = 8755;
    var int9 = 8754;
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int6);
    IF_SETSIZE(int1, IF_GETHEIGHT(int3), 0, 0, int3);
    IF_SETPOSITION(int0, 0, 0, 1, int3);
    CC_CREATE(int4, 3, int7);
    int7 = (int7 + 1);
    CC_CREATE(int4, 5, int7);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETPOSITION(0, 40, 1, 0);
    CC_SETOUTLINE(1);
    CC_SETOBJECT_NONUM(int2, 1);
    int7 = (int7 + 1);
    IF_SETSIZE(IF_GETWIDTH(int3), IF_GETHEIGHT(int5), 0, 0, int5);
    IF_SETTEXTFONT(26 as fontmetrics, int5);
    IF_SETTEXTALIGN(1, 1, 0, int5);
    IF_SETCOLOUR(16777215, int5);
    IF_SETTEXTSHADOW(1, int5);
    IF_SETTEXT(OC_NAME(int2), int5);
    script7086(int6, int2);
    return;
}