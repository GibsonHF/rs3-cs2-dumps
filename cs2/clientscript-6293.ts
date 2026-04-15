//
function script6293(): void {
    SPLINE_NEW(0, 5);
    SPLINE_NEW(1, 5);
    SPLINE_ADDPOINT(0, 0, pos(0,52,95,53,0), 500, pos(0,52,95,53,1), 500, 0);
    SPLINE_ADDPOINT(1, 0, pos(0,52,95,1,33), 25, pos(0,52,95,1,33), 25, 0);
    SPLINE_ADDPOINT(0, 1, pos(0,52,95,53,11), 800, pos(0,52,95,53,14), 800, 0);
    SPLINE_ADDPOINT(1, 1, pos(0,52,95,61,34), 25, pos(0,52,95,61,34), 25, 0);
    SPLINE_ADDPOINT(0, 2, pos(0,52,95,53,20), 1000, pos(0,52,95,53,25), 1000, 0);
    SPLINE_ADDPOINT(1, 2, pos(0,52,95,57,35), 25, pos(0,52,95,57,35), 25, 0);
    SPLINE_ADDPOINT(0, 3, pos(0,52,95,9,28), 800, pos(0,52,95,9,31), 800, 0);
    SPLINE_ADDPOINT(1, 3, pos(0,52,95,49,36), 25, pos(0,52,95,49,36), 25, 0);
    SPLINE_ADDPOINT(0, 4, pos(0,52,95,5,38), 500, pos(0,52,95,1,40), 500, 0);
    SPLINE_ADDPOINT(1, 4, pos(0,52,95,45,36), 25, pos(0,52,95,45,36), 25, 0);
    CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
    IF_SETONCAMFINISHED(callback(script5469, 0), comp(1161, 0));
    return;
}