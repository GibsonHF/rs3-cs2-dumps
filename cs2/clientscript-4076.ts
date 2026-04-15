//
function script4076(int0: component): void {
    switch (varclient_1434) {
        case 1: {
            script2766(0, 50, int0);
            break;
        }
        case 2: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script4077(14, 6), 1200, script4077(14, 6), 1200, 0);
            SPLINE_ADDPOINT(0, 1, script4077(14, 4), 1100, script4077(14, 4), 1100, 0);
            SPLINE_ADDPOINT(1, 0, script4077(15, 15), 500, script4077(15, 15), 500, 0);
            SPLINE_ADDPOINT(1, 1, script4077(15, 14), 400, script4077(15, 14), 400, 0);
            CAM_MOVEALONG(0, 0, 260, 260, 1, 0);
            break;
        }
        case 3: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script4077(14, 4), 1100, script4077(14, 4), 1100, 0);
            SPLINE_ADDPOINT(0, 1, script4077(14, 0), 900, script4077(14, 0), 900, 0);
            SPLINE_ADDPOINT(1, 0, script4077(15, 14), 400, script4077(15, 14), 400, 0);
            SPLINE_ADDPOINT(1, 1, script4077(15, 14), 300, script4077(15, 14), 300, 0);
            CAM_MOVEALONG(0, 0, 250, 250, 1, 0);
            break;
        }
        case 4: {
            script2766(0, 30, int0);
            break;
        }
        case 5: {
            CAM_RESET();
            script2768(50, int0);
            break;
        }
    };
    return;
}