//
function script4666(int0: unknown_int): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 4);
    SPLINE_NEW(1, 4);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 7, 0, 30), 700, MOVECOORD(int1, 7, 0, 30), 700, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 8, 0, 22), 200, MOVECOORD(int1, 8, 0, 22), 200, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 0, 0, 15), 800, MOVECOORD(int1, 0, 0, 15), 800, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 8, 0, 22), 300, MOVECOORD(int1, 8, 0, 22), 300, 0);
    SPLINE_ADDPOINT(0, 2, MOVECOORD(int1, 7, 0, 15), 600, MOVECOORD(int1, 7, 0, 15), 600, 0);
    SPLINE_ADDPOINT(1, 2, MOVECOORD(int1, 8, 0, 22), 100, MOVECOORD(int1, 8, 0, 22), 100, 0);
    SPLINE_ADDPOINT(0, 3, MOVECOORD(int1, 15, 0, 15), 800, MOVECOORD(int1, 15, 0, 15), 800, 0);
    SPLINE_ADDPOINT(1, 3, MOVECOORD(int1, 8, 0, 22), 300, MOVECOORD(int1, 8, 0, 22), 300, 0);
    CAM_MOVEALONG(0, 0, 100, 400, 1, 0);
    return;
}