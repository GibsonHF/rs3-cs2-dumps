//
function script13497(int0: component): void {
    var int1 = 15;
    if ((script16112() == 1)) {
        script14093(int0, -1, 28, 1, 4, 0, int1, 2);
        IF_SETOP(1, "View information", comp(662, 50));
        return;
    };
    var int2 = script16113();
    if ((int2 == -1 as dbrow)) {
        script15829(0);
        return;
    };
    var string0 = script4010(int2);
    if ((strcmp(string0, "") == 0)) {
        return;
    };
    var int3 = 4;
    var int4 = (script7593(string0, (IF_GETWIDTH(int0) - (2 * int3)), 28 as fontmetrics, 0) + (4 * int3));
    IF_SETSIZE(28, int4, 1, 0, int0);
    script7795(comp(662, 47), 21361 as struct, 0);
    CC_CREATE(comp(662, 48), 4, 0);
    CC_SETSIZE((2 * int3), (2 * int3), 1, 1);
    CC_SETPOSITION(int3, (2 * int3), 0, 2);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(1, 2, 0);
    CC_SETCOLOUR(16777215);
    IF_SETSIZE(28, 4, 1, 0, int0);
    script14093(int0, -1, 28, 1, int4, 0, int1, 2);
    IF_SETOP(1, "Close information", comp(662, 50));
    return;
}