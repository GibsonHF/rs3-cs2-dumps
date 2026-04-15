//
function script9885(int0: component, int1: int, int2: int, int3: int, int4: int, string0: string): unknown_int {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETTEXT(string0);
    var int5 = 0;
    if ((script6431() == true)) {
        int5 = PARAWIDTH(string0, 1000, 209 as fontmetrics);
        if ((int5 >= 170)) {
            CC_SETTEXTFONT(207 as fontmetrics);
        } else {
            CC_SETTEXTFONT(209 as fontmetrics);
        };
    } else {
        CC_SETTEXTFONT(207 as fontmetrics);
    };
    CC_SETSIZE(int3, int4, 0, 0);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    return 0;
}