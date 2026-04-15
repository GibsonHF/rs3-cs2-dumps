//
function script10812(int0: component, int1: component, int2: graphic, int3: graphic, int4: int, int5: unknown_int, int6: int, int7: int, int8: unknown_int, string0: string): void {
    var int9 = IF_GETNEXTSUBID(int0);
    var int10 = IF_GETY(int1);
    var int11 = IF_GETHEIGHT(int1);
    var int12 = int10;
    var int13 = 26 as fontmetrics;
    var int14 = script10495(3);
    var int15 = 16777215;
    var int16 = script10495(6);
    CC_CREATE(int0, 5, int9);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(int2);
    CC_SETSIZE(int4, int4, 0, 0);
    int9 = (int9 + 1);
    var int17 = ((CC_GETX() + CC_GETWIDTH()) + int10);
    if ((int3 != -1 as graphic)) {
        CC_CREATE(int0, 5, int9);
        CC_SETPOSITION(int17, 0, 0, 0);
        CC_SETGRAPHIC(int3);
        CC_SETSIZE(int4, int4, 0, 0);
        int9 = (int9 + 1);
        int17 = ((CC_GETX() + CC_GETWIDTH()) + int10);
    };
    CC_CREATE(int0, 4, int9);
    CC_SETTEXTFONT(int13);
    CC_SETPOSITION(int17, int12, 0, 0);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(int14);
    var int18 = ((IF_GETX(int1) - (2 * int10)) - CC_GETX());
    CC_SETSIZE(int18, int11, 0, 0);
    CC_SETTEXTALIGN(2, 0, 0);
    int9 = (int9 + 1);
    CC_CREATE[1](int0, 4, int9);
    CC_SETTEXTFONT[1](int13);
    CC_SETPOSITION[1](int17, int12, 0, 0);
    if ((int8 == 0)) {
        CC_SETTEXT[1](script16764(int6));
    } else {
        CC_SETTEXT[1](TOSTRING_LOCALISED(int6, 1));
    };
    CC_SETCOLOUR[1](int15);
    CC_SETSIZE[1](int18, int11, 0, 0);
    CC_SETTEXTALIGN[1](2, 2, 0);
    int9 = (int9 + 1);
    int12 = ((int12 + CC_GETHEIGHT[1]()) + int10);
    CC_CREATE(int0, 4, int9);
    CC_SETTEXTFONT(int13);
    CC_SETPOSITION(int10, int12, 0, 0);
    CC_SETTEXT("Your balance");
    CC_SETCOLOUR(int14);
    int18 = ((IF_GETX(int1) - (2 * int10)) - CC_GETX());
    CC_SETSIZE(int18, int11, 0, 0);
    CC_SETTEXTALIGN(2, 0, 0);
    int9 = (int9 + 1);
    CC_CREATE(int0, 4, int9);
    CC_SETTEXTFONT(int13);
    CC_SETPOSITION(int10, int12, 0, 0);
    CC_SETTEXT(TOSTRING_LOCALISED(MAX(0, int7), 1));
    if ((int7 < int6)) {
        CC_SETCOLOUR(int16);
    } else {
        CC_SETCOLOUR(int15);
    };
    CC_SETSIZE(int18, int11, 0, 0);
    CC_SETTEXTALIGN(2, 2, 0);
    int9 = (int9 + 1);
    return;
}