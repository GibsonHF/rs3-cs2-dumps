//
function script16881(int0: component): void {
    var int1 = 0;
    var int2 = -1 as fontmetrics;
    var int3 = 0;
    var int4 = 18;
    while ((int1 < 3)) {
        if ((CC_FINDBYCATEGORY(int0, int1, 2) == 1)) {
            CC_SETSIZE(CC_GETHEIGHT(), 0, 1, 1);
            int2 = script15886(1, 217, 24, 18, 16356 as cs2enum, 11);
            int3 = enum_getreverseindex(25, 0, 16356 as cs2enum, int2, 0);
            int4 = MIN(int3, int4);
        };
        int1 = (int1 + 1);
    };
    int1 = 0;
    while ((int1 < 3)) {
        if ((CC_FINDBYCATEGORY(int0, int1, 2) == 1)) {
            CC_SETMAXLINES(1);
            CC_SETTEXTFONT(enum_getvalue(0, 25, 16356 as cs2enum, int4));
        };
        int1 = (int1 + 1);
    };
    return;
}