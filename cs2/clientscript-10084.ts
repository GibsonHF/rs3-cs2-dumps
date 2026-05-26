//
function script10084(int0: number, int1: number, int2: number, int3: number, string0: string): number {
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETSIZE((((IF_GETWIDTH(int2) - 4) / 2) - 4), int3, 0, 0);
    var int4 = 0;
    var int5 = 4;
    if ((int0 == 1)) {
        int4 = 2;
        int5 = 0;
    };
    CC_SETPOSITION(int5, int1, int4, 0);
    CC_SETTEXTFONT(206 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 12);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(string0);
    return CC_GETID();
}