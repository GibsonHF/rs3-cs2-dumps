//
function script7086(int0: component, int1: obj): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as obj))) {
        return;
    };
    var int2 = 0;
    if ((item_getparam(int1, 2993) != -1)) {
        int2 = (int2 + 1);
    };
    if ((item_getparam(int1, 2994) != -1)) {
        int2 = (int2 + 1);
    };
    if ((int2 == 0)) {
        return;
    };
    var int3 = (IF_GETWIDTH(int0) / (int2 + 1));
    var int4 = int3;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    while ((int6 < int2)) {
        if ((int6 == 0)) {
            int7 = item_getparam(int1, 2993);
        } else if ((int6 == 1)) {
            int7 = item_getparam(int1, 2994);
        };
        if ((int7 != -1)) {
            CC_CREATE(int0, 5, int5);
            CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, int7));
            CC_SETPOSITION((int3 - (32 / 2)), (8 - ((32 - 22) / 2)), 0, 0);
            CC_SETSIZE(32, 32, 0, 0);
            int5 = (int5 + 1);
            CC_CREATE[1](int0, 4, int5);
            CC_SETTEXTFONT[1](28 as fontmetrics);
            CC_SETTEXTALIGN[1](1, 1, 0);
            CC_SETCOLOUR[1](16777215);
            CC_SETTEXTSHADOW[1](true);
            CC_SETTEXT[1]("+XP");
            CC_SETSIZE[1]((2 * int4), 20, 0, 0);
            CC_SETPOSITION[1]((int3 - (CC_GETWIDTH[1]() / 2)), (CC_GETY() + CC_GETHEIGHT()), 0, 0);
            int5 = (int5 + 1);
            int3 = (int3 + int4);
        };
        int6 = (int6 + 1);
    };
    return;
}