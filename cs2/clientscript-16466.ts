//
function script16466(int0: component): void {
    var int1 = 2;
    var int2 = 8;
    var int3 = (int2 / int1);
    if ((MODULO(int2, int1) != 0)) {
        int3 = (int3 + 1);
    };
    var int4 = 0;
    script7925(int0, 0, 0, 0, 1, 1, 10, 10, 1, 1, 0, int1, int3, 2);
    var int5 = CC_GRID_GETNUMROWS();
    var int6 = CC_GRID_GETNUMCOLUMNS();
    while ((int4 < int2)) {
        IF_CREATENESTED(0, (int4 + 1), 0, 0, 0, int0);
        CC_SETSIZE(0, 0, 1, 1);
        script16468(int4, int0);
        int4 = (int4 + 1);
    };
    return;
}