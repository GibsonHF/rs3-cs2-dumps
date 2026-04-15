//
function script4670(int0: unknown_int): void {
    var int1 = script284(MOVECOORD(COORD(), -16, 0, 0));
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 52, 0, 58), 700, MOVECOORD(int1, 52, 0, 58), 700, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 55, 0, 62), 500, MOVECOORD(int1, 55, 0, 62), 500, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 52, 0, 55), 900, MOVECOORD(int1, 52, 0, 55), 900, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 55, 0, 63), 400, MOVECOORD(int1, 55, 0, 63), 400, 0);
    CAM_MOVEALONG(0, 0, 100, 300, 1, 0);
    return;
}