//
function script14752(int0: number, int1: number, int2: number, string0: string): number {
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = 16;
    var int5 = ((4 + int4) + 4);
    var int6 = 26 as fontmetrics;
    if ((script6431() == 1)) {
        int6 = 28 as fontmetrics;
    };
    stack(int0);
    stack(5);
    stack(int3);
    int3 = (int3 + 1);
    CC_CREATE();
    CC_SETPOSITION(4, int1, 0, 0);
    CC_SETSIZE(int4, int4, 0, 0);
    CC_SETGRAPHIC(21342 as graphic);
    stack(int0);
    stack(4);
    stack(int3);
    int3 = (int3 + 1);
    CC_CREATE();
    CC_SETPOSITION(int5, int1, 0, 0);
    var int7 = script7593(string0, ((int2 - int5) - 4), int6, 0);
    if ((int7 < int4)) {
        int7 = int4;
        CC_SETTEXTALIGN(0, 1, 0);
    } else {
        CC_SETTEXTALIGN(0, 0, 0);
    };
    CC_SETSIZE((int5 + 4), int7, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(int6);
    CC_SETCOLOUR(16777215);
    var int1 = (int1 + (CC_GETHEIGHT() + 2));
    return int1;
}