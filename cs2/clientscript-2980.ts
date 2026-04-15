//[proc,ecosystem_tutorial_cam_4]
function script2980(int0: component): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 19, 0, 28), 900, MOVECOORD(int1, 19, 0, 28), 900, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 27, 0, 29), 400, MOVECOORD(int1, 27, 0, 29), 400, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 19, 0, 28), 1000, MOVECOORD(int1, 19, 0, 28), 1000, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 25, 0, 29), 300, MOVECOORD(int1, 25, 0, 29), 300, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    return;
}