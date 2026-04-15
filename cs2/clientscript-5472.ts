//
function script5472(int0: coordgrid): void {
    SPLINE_NEW(0, 4);
    SPLINE_NEW(1, 4);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int0, -7, 2, -7), 1800, MOVECOORD(int0, -6, 2, -9), 1800, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int0, -2, 2, -2), 1200, MOVECOORD(int0, -1, 2, -3), 1200, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int0, 5, 2, -7), 1800, MOVECOORD(int0, 9, 2, -3), 1800, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int0, 1, 2, -2), 1200, MOVECOORD(int0, 2, 2, -1), 1200, 0);
    SPLINE_ADDPOINT(0, 2, MOVECOORD(int0, 5, 2, 6), 1800, MOVECOORD(int0, 2, 2, 8), 1800, 0);
    SPLINE_ADDPOINT(1, 2, MOVECOORD(int0, 1, 2, 1), 1200, MOVECOORD(int0, 0, 2, 2), 1200, 0);
    SPLINE_ADDPOINT(0, 3, MOVECOORD(int0, -7, 2, 5), 1800, MOVECOORD(int0, -11, 2, 1), 1800, 0);
    SPLINE_ADDPOINT(1, 3, MOVECOORD(int0, -2, 2, 1), 1200, MOVECOORD(int0, -3, 2, 0), 1200, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    IF_SETONCAMFINISHED(callback(script5474, 0, 450), comp(1172, 9));
    return;
}