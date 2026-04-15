//
function script13755(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, string0: string, string1: unknown_string, string2: unknown_string): void {
    CC_CREATE(comp(1029, 68), 5, IF_GETNEXTSUBID(comp(1029, 68)));
    CC_SETSIZE(18, 18, 0, 0);
    if ((int5 == 0)) {
        if ((int3 == int1)) {
            CC_SETGRAPHIC(18525 as graphic);
        } else {
            CC_SETGRAPHIC(18526 as graphic);
        };
    } else if ((int3 == 1)) {
        if ((varbitplayer_22875 == 1)) {
            CC_SETGRAPHIC(32062 as graphic);
        } else {
            CC_SETGRAPHIC(18544 as graphic);
        };
    } else if ((varbitplayer_22875 == 1)) {
        CC_SETGRAPHIC(32060 as graphic);
    } else {
        CC_SETGRAPHIC(18542 as graphic);
    };
    CC_SETPOSITION(12, (int0 + 2), 0, 0);
    CC_CREATE(comp(1029, 67), 4, IF_GETNEXTSUBID(comp(1029, 67)));
    CC_SETTEXT(string0);
    CC_SETSIZE(640, 20, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETPOSITION(40, int0, 0, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    if ((int5 == 0)) {
        if ((int3 == int1)) {
            CC_SETCOLOUR(15777401);
        } else if ((int4 == int1)) {
            CC_SETCOLOUR(7705248);
        } else {
            CC_SETCOLOUR(16777215);
        };
    } else if ((int3 == 1)) {
        CC_SETCOLOUR(15777401);
    } else {
        CC_SETCOLOUR(16777215);
    };
    CC_CREATE(comp(1029, 66), 3, IF_GETNEXTSUBID(comp(1029, 66)));
    CC_SETSIZE(640, 20, 0, 0);
    CC_SETPOSITION(0, int0, 0, 0);
    CC_SETTRANS(255);
    CC_SETOP(1, "Select");
    var int9 = 2;
    if ((IF_GETHIDE(comp(1029, 64)) == false)) {
        int9 = 1;
    };
    CC_SETONMOUSEREPEAT(callback(script13761, int2, (IF_GETNEXTSUBID(comp(1029, 67)) - 1), 67436611));
    CC_SETONMOUSELEAVE(callback(script13762, (IF_GETNEXTSUBID(67436611) - 1), 67436611));
    CC_SETONCLICK(callback(script13759, -2147483643, string0, string1, string2, int2, -1, int9, int5, int6, int7, int8));
    return;
}