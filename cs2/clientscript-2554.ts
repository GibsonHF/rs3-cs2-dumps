//
function script2554(int0: component, int1: int, int2: graphic, int3: unknown_int, int4: unknown_int, string0: string, string1: string): void {
    var int5 = IF_GETNEXTSUBID(int0);
    var int6 = ((IF_GETWIDTH(int0) / 5) * (int1 - 2));
    CC_CREATE(int0, 5, int5);
    CC_SETPOSITION(int6, 19, 1, 0);
    CC_SETSIZE(24, 24, 0, 0);
    if ((varbitplayer_22875 == 0)) {
        if ((int3 == 0)) {
            CC_SETGRAPHIC(18566 as graphic);
        } else {
            CC_SETGRAPHIC(18570 as graphic);
        };
    } else if ((int3 == 0)) {
        CC_SETGRAPHIC(31661 as graphic);
    } else {
        CC_SETGRAPHIC(31665 as graphic);
    };
    int5 = (int5 + 1);
    CC_CREATE(int0, 5, int5);
    CC_SETPOSITION(int6, 19, 1, 0);
    CC_SETSIZE(25, 25, 0, 0);
    if ((int2 != -1 as graphic)) {
        CC_SETGRAPHIC(int2);
    };
    int5 = (int5 + 1);
    if (((int1 != 2) || ((int1 == 2) && (int3 == 0)))) {
        CC_CREATE(int0, 4, int5);
        CC_SETPOSITION(int6, 42, 1, 0);
        CC_SETSIZE(42, 15, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(13683842);
        CC_SETTEXT(string0);
    } else {
        CC_CREATE(int0, 5, int5);
        CC_SETPOSITION(int6, 42, 1, 0);
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETCOLOUR(13683842);
        if ((int4 == 1)) {
            CC_SETGRAPHIC(20368 as graphic);
        } else {
            CC_SETGRAPHIC(20367 as graphic);
        };
    };
    if ((STRING_LENGTH(string1) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    };
    return;
}