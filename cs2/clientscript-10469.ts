//
function script10469(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: unknown_int): [int, int] {
    if ((int4 < 20)) {
        return [int1, int3];
    };
    var string0 = "";
    var int9 = -1;
    var int10 = MAX(0, ((int3 + int5) - 8));
    var int11 = MAX(0, MIN(100, SCALE(int6, int7, 100)));
    if ((int5 < 20)) {
        int10 = 0;
    };
    switch (int8) {
        case 16711680: {
            stack(18375);
            stack("Life Points");
            [int9, string0] = stack();
            break;
        }
        case 16776960: {
            stack(18374);
            stack("Adrenaline");
            [int9, string0] = stack();
            break;
        }
        case 65535: {
            stack(18376);
            stack("Summoning Points");
            [int9, string0] = stack();
            break;
        }
        case 65280: {
            stack(14678);
            stack("Familiar spell points");
            [int9, string0] = stack();
            break;
        }
        case 255: {
            stack(18377);
            stack("Prayer Points");
            [int9, string0] = stack();
            break;
        }
        default: {
            return [int1, int3];
        }
    };
    if (((varbitplayer_22875 == 1) && ((int8 == 16711680) || (int8 == 255)))) {
        var int6 = (int6 / 10);
        var int7 = (int7 / 10);
    };
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18368 as graphic);
    CC_SETPOSITION(int2, int10, 0, 0);
    CC_SETSIZE(16, 8, 0, 0);
    var int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18369 as graphic);
    CC_SETPOSITION((int2 + 16), int10, 0, 0);
    CC_SETSIZE((int4 - (2 * 16)), 8, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    CC_SETONMOUSELEAVE(callback(script8805));
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18370);
    CC_SETPOSITION(((int2 + int4) - 16), int10, 0, 0);
    CC_SETSIZE(16, 8, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(int9);
    CC_SETPOSITION((int2 + 2), (int10 + ((8 - 4) / 2)), 0, 0);
    CC_SETSIZE(MAX(0, SCALE(int11, 100, (int4 - 4))), 4, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18371);
    CC_SETPOSITION(int2, int10, 0, 0);
    CC_SETSIZE(16, 8, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18372);
    CC_SETPOSITION((int2 + 16), int10, 0, 0);
    CC_SETSIZE((int4 - (2 * 16)), 8, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18373);
    CC_SETPOSITION(((int2 + int4) - 16), int10, 0, 0);
    CC_SETSIZE(16, 8, 0, 0);
    int1 = (int1 + 1);
    if ((int5 >= 20)) {
        int10 = ((int3 + int5) - 20);
        CC_CREATE(int0, 4, int1);
        CC_SETPOSITION((int2 + 5), int10, 0, 0);
        CC_SETSIZE((int4 - 5), 12, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(`${inttostring(int6, 10)}/${inttostring(int7, 10)}`);
        CC_SETMAXLINES(1);
        int1 = (int1 + 1);
    };
    return [int1, int3];
}