//
function script923(int0: int, string0: string, string1: string, string2: string): void {
    var int1 = PARAHEIGHT(string0, int0, 66 as fontmetrics);
    var int2 = PARAHEIGHT(string1, int0, 66 as fontmetrics);
    if ((int2 > int1)) {
        int1 = int2;
    };
    int2 = PARAHEIGHT(string2, int0, 66 as fontmetrics);
    if ((int2 > int1)) {
        int1 = int2;
    };
    script924(string0, int1, 0, 0, 66 as fontmetrics);
    script924(string1, int1, 1, 0, 66 as fontmetrics);
    script924(string2, int1, 2, 1, 66 as fontmetrics);
    return;
}