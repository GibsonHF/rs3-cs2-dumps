//
function script5042(int0: unknown_int, int1: int): void {
    var int2 = (GET_MOUSEX() - script3365(comp(1111, 12)));
    var int3 = (GET_MOUSEY() - script3366(comp(1111, 12)));
    var int4 = IF_GETWIDTH(comp(1111, 12));
    var int5 = IF_GETHEIGHT(comp(1111, 12));
    if (((((int2 > int4) || (int2 < 0)) || (int3 > int5)) || (int3 < 0))) {
        [int2, int3] = [(int4 / 2), (int5 / 2)];
    };
    int2 = (int2 + IF_GETSCROLLX(comp(1111, 12)));
    int3 = (int3 + IF_GETSCROLLY(comp(1111, 12)));
    var int6 = (varclient_1396 * ((112 + 2) + 2));
    varclient_1396 = MAX(MIN((varclient_1396 - int1), 21), 3);
    var int7 = (varclient_1396 * ((112 + 2) + 2));
    var int8 = (SCALE(int7, int6, int2) - int2);
    var int9 = (SCALE(int7, int6, int3) - int3);
    script5044(int0, int8, int9);
    return;
}