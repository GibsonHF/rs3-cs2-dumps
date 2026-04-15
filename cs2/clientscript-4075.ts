//
function script4075(int0: component): void {
    switch (varclient_1433) {
        case 1: {
            script2766(0, 50, int0);
            break;
        }
        case 2: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script4077(16, 11), 500, script4077(16, 11), 500, 0);
            SPLINE_ADDPOINT(0, 1, script4077(14, 12), 400, script4077(14, 12), 400, 0);
            SPLINE_ADDPOINT(1, 0, script4077(15, 15), 400, script4077(15, 15), 400, 0);
            SPLINE_ADDPOINT(1, 1, script4077(15, 15), 300, script4077(15, 15), 300, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            break;
        }
        case 3: {
            script2766(0, 30, int0);
            break;
        }
        case 4: {
            CAM_RESET();
            script2768(50, int0);
            break;
        }
    };
    return;
}