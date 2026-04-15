//
function script16188(int0: int, int1: int, int2: int, int3: dbrow, int4: component, int5: struct): void {
    var int6 = -1;
    while ((++int6 < int1)) {
        if ((IF_CREATENESTED(3, int2, (int6 + 4), 1, int0, int4) == 1)) {
            CC_SETPOSITION(0, ((37 + (55 * int6)) + (5 / 2)), 0, 0);
            CC_SETSIZE(0, 50, 1, 0);
            CC_SETFILL(1);
            if ((MODULO(int6, 2) == 1)) {
                CC_SETCOLOUR(3024933);
            } else {
                CC_SETCOLOUR(2367774);
            };
            script16504(int3, int4, int0, int6);
        };
    };
    script7928(int4, int2, (int6 + 4), 1, int0, 0, 37, 0, 0, 0, 37, 1, 1, 0, 4, int1, 5);
    script16189(int3, int0, (int2 + 1), 0, int2, (int6 + 4), int4, int5, CC_GRID_GETNUMCOLUMNS());
    return;
}