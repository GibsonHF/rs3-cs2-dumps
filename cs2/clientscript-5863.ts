//
function script5863(int0: component): void {
    var int1 = comp(590, 10);
    if ((int0 == comp(1438, 13))) {
        int1 = comp(1438, 11);
    };
    var int2 = IF_GRID_GETNUMROWS(int0);
    var int3 = IF_GRID_GETNUMCOLUMNS(int0);
    var int4 = IF_GETCHILDSPACING(int0);
    var int5 = 1;
    if ((IF_FIND(int0) == 1)) {
        int5 = cc_getparam(8348);
    };
    var int6 = IF_GRID_GETCELLHEIGHT(int0);
    var int7 = (int5 / int6);
    if ((MODULO(int5, int6) != 0)) {
        int7 = (int7 + 1);
    };
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = CC_SETONHORIZONTALPINCH(int3, int2, int6, int7, int4);
    IF_SETSCROLLSIZE(0, int9, int0);
    script7791(int1, int0);
    return;
}