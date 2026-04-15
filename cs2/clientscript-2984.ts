//[proc,ecosystem_tutorial_cam_8]
function script2984(int0: component): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 3);
    SPLINE_NEW(1, 3);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 26, 0, 3), 400, MOVECOORD(int1, 26, 0, 3), 400, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 12, 0, 23), 300, MOVECOORD(int1, 12, 0, 23), 300, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 28, 0, 16), 700, MOVECOORD(int1, 28, 0, 16), 700, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 13, 0, 22), 400, MOVECOORD(int1, 13, 0, 22), 400, 0);
    SPLINE_ADDPOINT(0, 2, MOVECOORD(int1, 36, 0, 16), 800, MOVECOORD(int1, 36, 0, 16), 800, 0);
    SPLINE_ADDPOINT(1, 2, MOVECOORD(int1, 36, 0, 22), 400, MOVECOORD(int1, 36, 0, 22), 400, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    IF_SETONCAMFINISHED(callback(script2985, int0), int0);
    return;
}