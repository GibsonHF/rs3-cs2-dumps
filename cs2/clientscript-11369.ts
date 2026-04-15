//
function script11369(int0: struct, int1: component, int2: int, int3: int, int4: graphic, string0: string): [int, int] {
    var int5 = script10495(3);
    var int6 = script10495(4);
    var int7 = script10495(9);
    var int8 = script10495(12);
    var int9 = 26 as fontmetrics;
    var int10 = enum_getvalue(25, 0, 8549 as cs2enum, int9);
    var int11 = 24;
    var int12 = 0;
    if ((int10 > int11)) {
        int12 = ((int10 / 2) - (int11 / 2));
    };
    var int13 = 2;
    var int14 = MAX(0, ((IF_GETWIDTH(int1) - (3 * int13)) - int11));
    CC_CREATE[1](int1, 5, int2);
    CC_SETPOSITION[1](int13, (int3 + int12), 0, 0);
    CC_SETSIZE[1](int11, int11, 0, 0);
    CC_SETGRAPHIC[1](int4);
    var int2 = (int2 + 1);
    CC_CREATE(int1, 4, int2);
    CC_SETTEXTFONT(int9);
    CC_SETPOSITION(((CC_GETX[1]() + CC_GETWIDTH[1]()) + int13), int3, 0, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        CC_SETTEXT(string0);
    } else {
        CC_SETTEXT(script11659(int0, 1));
    };
    CC_SETSIZE((CC_GETX() + int13), MAX(script7593(CC_GETTEXT(), int14, CC_GETFONTMETRICS(), 0), int11), 1, 0);
    if ((int12 == 0)) {
        CC_SETTEXTALIGN(0, 1, 0);
    } else {
        CC_SETTEXTALIGN(0, 0, 0);
    };
    if ((int0 == varplayer_5006)) {
        CC_SETCOLOUR(int6);
    } else {
        CC_SETCOLOUR(int5);
    };
    int2 = (int2 + 1);
    CC_CREATE[1](int1, 3, int2);
    CC_SETPOSITION[1](0, int3, 0, 0);
    CC_SETSIZE[1](0, CC_GETHEIGHT(), 1, 0);
    if ((MODULO(((CC_GETID[1]() / 3) + 1), 2) == 1)) {
        CC_SETCOLOUR[1](int7);
    } else {
        CC_SETCOLOUR[1](int8);
    };
    CC_SETFILL[1](1);
    CC_SENDTOBACK[1]();
    int2 = (int2 + 1);
    var int3 = ((int3 + CC_GETHEIGHT()) + int13);
    return [int2, int3];
}