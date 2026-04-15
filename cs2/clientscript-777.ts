//
function script777(int0: component, int1: component, int2: unknown_int, int3: unknown_int): void {
    CC_DELETEALL(int1);
    var int4 = (2 + (13 * PARAHEIGHT(`${inttostring(varplayer_1787, 10)}/60 special move points remaining`, 125, 67 as fontmetrics)));
    var int5 = ((((2 + int4) + 32) + 14) + 2);
    var int6 = 5;
    var int7 = 5;
    var int8 = 1;
    var int9 = 1;
    int5 = ((int5 - 32) - 14);
    int6 = IF_GETY(int0);
    if ((int6 == 224)) {
        int6 = 180;
    };
    int7 = (IF_GETX(int0) - 60);
    if ((int7 < 0)) {
        int7 = 5;
    };
    CC_CREATE(int1, 3, 0);
    CC_SETPOSITION(int7, int6, 0, 0);
    CC_SETSIZE(128, int5, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(921102);
    CC_CREATE(int1, 3, 1);
    CC_SETPOSITION((int7 + 1), (int6 + 1), 0, 0);
    CC_SETSIZE(127, (int5 - 1), 0, 0);
    CC_SETFILL(0);
    CC_SETCOLOUR(15461606);
    CC_CREATE(int1, 3, 2);
    CC_SETPOSITION(int7, int6, 0, 0);
    CC_SETSIZE(127, (int5 - 1), 0, 0);
    CC_SETFILL(0);
    CC_SETCOLOUR(15461606);
    CC_CREATE(int1, 4, 3);
    CC_SETPOSITION((int7 + 2), (int6 + 2), 0, 0);
    CC_SETSIZE(125, int4, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(67 as fontmetrics);
    CC_SETCOLOUR(16101953);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(`${inttostring(varplayer_1787, 10)}/60 special move points remaining`);
    return;
}