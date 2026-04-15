//[proc,ecosystem_tutorial_cam_3]
function script2979(int0: component): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 31, 0, 25), 800, MOVECOORD(int1, 31, 0, 25), 800, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 31, 0, 33), 300, MOVECOORD(int1, 31, 0, 33), 300, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 30, 0, 25), 900, MOVECOORD(int1, 30, 0, 25), 900, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 30, 0, 33), 500, MOVECOORD(int1, 30, 0, 33), 500, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    return;
}