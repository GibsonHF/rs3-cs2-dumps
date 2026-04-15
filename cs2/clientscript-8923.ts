//
function script8923(): void {
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, pos(0,49,50,44,25), 950, pos(0,49,50,56,31), 730, 0);
    SPLINE_ADDPOINT(1, 0, pos(0,49,50,56,34), 412, pos(0,50,51,20,10), 412, 0);
    SPLINE_ADDPOINT(0, 1, pos(0,49,51,44,8), 682, pos(0,49,51,16,12), 682, 0);
    SPLINE_ADDPOINT(1, 1, pos(0,49,51,16,9), 244, pos(0,49,51,56,9), 244, 0);
    CAM_MOVEALONG(0, 0, 150, 200, 1, 0);
    return;
}