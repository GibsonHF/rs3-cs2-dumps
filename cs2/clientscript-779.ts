//
function script779(int0: component, int1: component, int2: unknown_int, int3: unknown_int, string0: string): void {
    CC_DELETEALL(int1);
    if (((strcmp(string0, "Call familiar") == 0) && (enum_getvalue(33, 33, 1283 as cs2enum, varplayer_1831) == 526 as obj))) {
        var string0 = "Call pet";
    };
    if (((strcmp(string0, "Dismiss familiar") == 0) && (enum_getvalue(33, 33, 1283 as cs2enum, varplayer_1831) == 526 as obj))) {
        string0 = "Dismiss pet";
    };
    var int4 = (2 + (13 * PARAHEIGHT(string0, 125, 67 as fontmetrics)));
    var int5 = ((((2 + int4) + 32) + 14) + 2);
    var int6 = 5;
    var int7 = 5;
    var int8 = 1;
    var int9 = 1;
    int5 = ((int5 - 32) - 14);
    int6 = IF_GETY(int0);
    if (((int6 == 225) && (IF_GETX(int0) == 83))) {
        int6 = 180;
    };
    int7 = (IF_GETX(int0) - 60);
    if ((int7 < 0)) {
        int7 = 5;
    };
    if ((int7 > 70)) {
        int7 = 65;
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
    CC_SETTEXT(string0);
    return;
}