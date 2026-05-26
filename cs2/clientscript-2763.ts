//
function script2763(int0: number, int1: number): void {
    switch (varclient_1007) {
        case 201: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60314467, int1), 600, script2764(60330851, int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60363619, int1), 550, script2764(60363619, int1), 600, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60068707, int1), 200, script2764(60068707, int1), 200, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60068707, int1), 200, script2764(60068707, int1), 200, 0);
            CAM_MOVEALONG(0, 0, 200, 75, 1, 0);
            break;
        }
        case 202: {
            script2766(0, 10, int0);
            break;
        }
        case 203: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60363619, int1), 550, script2764(60363619, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60347235, int1), 750, script2764(60347235, int1), 750, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60068707, int1), 200, script2764(60068707, int1), 200, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60068707, int1), 200, script2764(60068707, int1), 200, 0);
            CAM_MOVEALONG(0, 0, 50, 25, 1, 0);
            script2768(75, int0);
            break;
        }
        case 204: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60281702, int1), 550, script2764(60298086, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60330855, int1), 550, script2764(60314471, int1), 550, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60379998, int1), 400, script2764(60363614, int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60183394, int1), 400, script2764(60199777, int1), 400, 0);
            CAM_MOVEALONG(0, 0, 150, 220, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}