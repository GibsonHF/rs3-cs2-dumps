//
function script10198(int0: component, int1: component, int2: component, int3: component, int4: int, int5: graphic, int6: unknown_int, string0: string, string1: string): void {
    IF_SETSIZE(10, 39, 1, 0, int0);
    IF_SETPOSITION(5, (5 + (int4 * 40)), 0, 0, int0);
    IF_SETHIDE(false, int0);
    IF_SETSIZE(0, 0, 1, 1, int1);
    IF_SETPOSITION(0, 0, 0, 0, int1);
    IF_SETHIDE(false, int1);
    CC_DELETEALL(int1);
    var int7 = 0;
    CC_CREATE(int1, 3, int7);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETFILL(1);
    if ((MODULO(int4, 2) == 1)) {
        script10010(28680 as struct);
    } else {
        script10010(28679 as struct);
    };
    int7 = (int7 + 1);
    var int8 = 0;
    var int9 = 0;
    if ((int5 != -1 as graphic)) {
        CC_CREATE(int1, 5, int7);
        CC_SETGRAPHIC(int5);
        [int8, int9] = CC_GETGRAPHICDIMENSIONS();
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETPOSITION(5, 0, 0, 1);
        int7 = (int7 + 1);
        int8 = (int8 + 10);
    };
    if ((int6 == 0)) {
        IF_SETHIDE(false, int3);
    } else {
        IF_SETHIDE(true, int3);
    };
    CC_CREATE(int1, 4, int7);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 13);
    CC_SETSIZE(((IF_GETWIDTH(int2) + int8) + 25), 0, 1, 1);
    CC_SETPOSITION((int8 + 5), 0, 0, 1);
    int7 = (int7 + 1);
    IF_SETTEXT(string1, int2);
    return;
}