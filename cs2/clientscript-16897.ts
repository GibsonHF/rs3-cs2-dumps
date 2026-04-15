//
function script16897(int0: component, int1: int, int2: int, int3: int, int4: graphic, string0: string): int {
    var int5 = 12;
    var int6 = 20;
    var int7 = script15891(string0, ((int3 - int5) - int6), 208 as fontmetrics, 0);
    if (((int2 + int7) >= IF_GETHEIGHT(int0))) {
        if ((CC_FINDBYCATEGORY(int0, int1, 0) == 1)) {
            CC_SETHIDE(true);
        };
        return int2;
    };
    script15938(int0, int1, 0, 0, int2, 0, 0, 0, int7, 1, 0);
    script7920(int0, int1, 1, int1, 0, 0, 0, 0, 1, int5, int5, 0, 0, int4);
    script10507(int0, int1, 2, int1, 0, 0, 0, 2, 0, (int5 + int6), 0, 1, 1, 2100 as dbrow, string0);
    CC_SETCOLOUR(script10495(16777215));
    return ((int2 + int7) + int6);
}