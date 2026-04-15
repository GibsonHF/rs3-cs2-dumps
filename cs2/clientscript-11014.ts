//
function script11014(int0: component, int1: int, int2: int, int3: int, int4: int, int5: dbrow, string0: string): void {
    var int6 = 22;
    var int7 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int6 = 44;
        int7 = 28 as fontmetrics;
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int4, int6, 0, 0);
    CC_SETPOSITION(int2, int3, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(int7);
    CC_SETTEXTALIGN(0, 1, 0);
    script11024(int1);
    CC_SETMAXLINES(1);
    return;
}