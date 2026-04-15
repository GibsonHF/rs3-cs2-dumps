//
function script8790(int0: int, int1: graphic, string0: string): int {
    var int2 = 590;
    var int3 = 60;
    var int4 = 0;
    var int5 = 0;
    var int6 = 28 as fontmetrics;
    if ((int1 != -1 as graphic)) {
        int4 = 50;
    };
    int5 = ((int2 - int4) - 20);
    var int7 = PARAHEIGHT(string0, int5, int6);
    if (((int7 > 3) && (script6431() == false))) {
        int6 = 26 as fontmetrics;
    };
    int3 = MAX((script7593(string0, int5, int6, 0) + 10), int3);
    script10764(comp(1218, 247), 21361 as struct, 0, int0, int2, int3, 16777215);
    if ((int1 != -1 as graphic)) {
        CC_CREATE(comp(1218, 247), 5, IF_GETNEXTSUBID(comp(1218, 247)));
        CC_SETSIZE(int4, int4, 0, 0);
        CC_SETPOSITION(5, (int0 + ((int3 - int4) / 2)), 0, 0);
        CC_SETGRAPHIC(int1);
    };
    CC_CREATE(comp(1218, 247), 4, IF_GETNEXTSUBID(comp(1218, 247)));
    CC_SETPOSITION((int4 + 10), int0, 0, 0);
    CC_SETTEXTFONT(int6);
    CC_SETTEXTSHADOW(false);
    CC_SETCOLOUR(15122040);
    CC_SETTEXTALIGN(0, 1, 15);
    CC_SETSIZE(int5, int3, 0, 0);
    CC_SETTEXT(string0);
    return ((int0 + int3) + 5);
}