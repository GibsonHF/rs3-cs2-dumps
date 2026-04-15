//
function script4665(int0: unknown_int): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 7, 0, 30), 900, MOVECOORD(int1, 7, 0, 30), 900, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 8, 0, 22), 400, MOVECOORD(int1, 8, 0, 22), 400, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 7, 0, 30), 700, MOVECOORD(int1, 7, 0, 30), 700, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 8, 0, 22), 200, MOVECOORD(int1, 8, 0, 22), 200, 0);
    CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
    return;
}