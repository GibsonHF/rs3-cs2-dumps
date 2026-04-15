//[proc,ecosystem_tutorial_cam_5]
function script2981(int0: component): void {
    var int1 = script284(COORD());
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 22, 0, 20), 700, MOVECOORD(int1, 22, 0, 20), 700, 0);
    SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 20, 0, 31), 500, MOVECOORD(int1, 20, 0, 31), 500, 0);
    SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 22, 0, 25), 700, MOVECOORD(int1, 22, 0, 25), 700, 0);
    SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 20, 0, 31), 400, MOVECOORD(int1, 20, 0, 31), 400, 0);
    CAM_MOVEALONG(0, 0, 450, 450, 1, 0);
    return;
}