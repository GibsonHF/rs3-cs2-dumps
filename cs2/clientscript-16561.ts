//
function script16561(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): number {
    var int5 = 22;
    var int6 = 26;
    if ((script6431() == 1)) {
        int5 = 28;
        int6 = 28;
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