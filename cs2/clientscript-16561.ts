//
function script16561(int0: component, int1: int, int2: int, int3: int, int4: boolean, string0: string): int {
    var int5 = 22;
    var int6 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int5 = 28;
        int6 = 28 as fontmetrics;
    };
    var int7 = (int5 + STRINGWIDTH(string0, int6));
    if ((CC_FINDBYCATEGORY(int0, int1, 0) == 1)) {
        CC_SETSIZE(int7, CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION(int3, CC_GETY(), 0, 0);
        CC_SETHIDE(int4);
    };
    if ((CC_FINDBYCATEGORY(int0, int1, 2) == 1)) {
        CC_SETTEXT(string0);
        CC_SETCOLOUR(int2);
    };
    return int7;
}