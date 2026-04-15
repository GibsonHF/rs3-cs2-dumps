//[proc,ecosystem_tutorial_cam_2]
function script2978(int0: component): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 23, 0, 25), 700, MOVECOORD(int1, 23, 0, 25), 700, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 31, 0, 33), 400, MOVECOORD(int1, 31, 0, 22), 400, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 31, 0, 25), 800, MOVECOORD(int1, 31, 0, 25), 800, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 31, 0, 33), 300, MOVECOORD(int1, 31, 0, 33), 300, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    return;
}