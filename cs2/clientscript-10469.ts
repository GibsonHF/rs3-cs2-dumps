//
function script10469(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): [number, number] {
    if ((int4 < 20)) {
        return [int1, int3];
    };
    var string0 = "";
    var int9 = -1 as graphic;
    var int10 = MAX(0, ((int3 + int5) - 8));
    var int11 = MAX(0, MIN(100, SCALE(int6, int7, 100)));
    if ((int5 < 20)) {
        int10 = 0;
    };
    switch (int8) {
        case 16711680: {
            [int9, string0] = [18375 as graphic, "Life Points"];
            break;
        }
        case 16776960: {
            [int9, string0] = [18374 as graphic, "Adrenaline"];
            break;
        }
        case 65535: {
            [int9, string0] = [18376 as graphic, "Summoning Points"];
            break;
        }
        case 65280: {
            [int9, string0] = [14678 as graphic, "Familiar spell points"];
            break;
        }
        case 255: {
            [int9, string0] = [18377 as graphic, "Prayer Points"];
            break;
        }
        default: {
            return [int1, int3];
        }
    };
    if ((varbitplayer_22875 == 1)) {
        if (((int8 == 16711680) || (int8 == 255))) {
            var int6 = (int6 / 10);
            var int7 = (int7 / 10);
        };
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
    CC_SETGRAPHIC(18370 as graphic);
    CC_SETPOSITION(((int2 + int4) - 16), int10, 0, 0);
    CC_SETSIZE(16, 8, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(int9);
    CC_SETPOSITION((int2 + 2), (int10 + ((8 - 4) / 2)), 0, 0);
    CC_SETSIZE(MAX(0, SCALE(int11, 100, (int4 - 4))), 4, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18371 as graphic);
    CC_SETPOSITION(int2, int10, 0, 0);
    CC_SETSIZE(16, 8, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18372 as graphic);
    CC_SETPOSITION((int2 + 16), int10, 0, 0);
    CC_SETSIZE((int4 - (2 * 16)), 8, 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(18373 as graphic);
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