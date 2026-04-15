//[proc,ecosystem_tutorial_cam_6]
function script2982(int0: component): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 22, 0, 25), 1000, MOVECOORD(int1, 22, 0, 25), 1000, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 20, 0, 31), 300, MOVECOORD(int1, 20, 0, 31), 300, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 30, 0, 23), 1000, MOVECOORD(int1, 30, 0, 23), 1000, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 12, 0, 30), 300, MOVECOORD(int1, 12, 0, 30), 300, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    return;
}