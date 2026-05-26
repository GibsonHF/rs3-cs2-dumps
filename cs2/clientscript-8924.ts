//
function script8924(): void {
    SPLINE_NEW(0, 2);
    SPLINE_NEW(1, 2);
    SPLINE_ADDPOINT(0, 0, pos(0,49,50,40,42), 965, pos(0,50,50,8,38), 335, 0);
    SPLINE_ADDPOINT(1, 0, pos(0,49,50,56,34), 540, pos(0,50,50,12,30), 402, 0);
    SPLINE_ADDPOINT(0, 1, pos(0,50,50,0,1), 725, pos(0,49,49,36,57), 920, 0);
    SPLINE_ADDPOINT(1, 1, pos(0,49,49,40,62), 405, pos(0,49,49,44,56), 425, 0);
    CAM_MOVEALONG(0, 0, 150, 200, 1, 0);
    return;
}