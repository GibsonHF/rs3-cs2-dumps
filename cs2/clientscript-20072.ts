//
function script20072(int0: number): void {
    if ((int0 == -1 as dbrow)) {
        script12478("Marketplace floater setup called with null data - Returning.");
        return;
    };
    if ((script6431() == 0)) {
        IF_SETDRAGGABLE(comp(1359, 1), -1, comp(1359, 2));
        IF_SETONDRAGCOMPLETE(callback(script20073, -2147483647, -2147483646, 89063425, -2147483645), 89063426);
        script20074(varclient_8314, varclient_8315, 89063425, 89063426);
    };
    var int1 = dbrow_getfield(int0, 1314816, 0);
    IF_SETGRAPHIC(int1, comp(1359, 14));
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int2, int3, int4, int5] = dbrow_getfield(int0, 1314832, 0);
    IF_SETSIZE(int2, int3, 0, 0, comp(1359, 14));
    IF_SETPOSITION(int4, int5, 0, 0, comp(1359, 14));
    IF_SETSIZE(145, 31, 0, 0, comp(1359, 7));
    var string0 = dbrow_getfield(int0, 1314848, 0);
    var int6 = IF_GETWIDTH(comp(1359, 11));
    var int7 = PARAWIDTH(string0, 100, 167 as fontmetrics);
    if ((int7 > int6)) {
        IF_SETSIZE((145 + (int7 - 145)), 31, 0, 0, comp(1359, 7));
    };
    IF_SETTEXT(string0, comp(1359, 11));
    if ((DB_GETFIELDCOUNT(int0, 1314864) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script2674, dbrow_getfield(int0, 1314864, 0), 89063427, -1), 89063427);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(1359, 3));
    };
    script20075();
    return;
}