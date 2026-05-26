//
function script2762(int0: number, int1: number): void {
    switch (varclient_1007) {
        case 101: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60347213, int1), 450, script2764(60347213, int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60363597, int1), 600, script2764(60363597, int1), 550, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60248915, int1), 350, script2764(60248915, int1), 375, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60298065, int1), 350, script2764(60298065, int1), 375, 0);
            CAM_MOVEALONG(0, 0, 300, 400, 1, 0);
            break;
        }
        case 102: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60248921, int1), 600, script2764(60248922, int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60265310, int1), 700, script2764(60265309, int1), 700, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60265295, int1), 400, script2764(60265293, int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60265298, int1), 400, script2764(60265298, int1), 400, 0);
            CAM_MOVEALONG(0, 0, 250, 200, 1, 0);
            break;
        }
        case 103: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60281685, int1), 700, script2764(60298070, int1), 650, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60298074, int1), 650, script2764(60298074, int1), 650, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60298083, int1), 5, script2764(60298083, int1), 5, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60298088, int1), 5, script2764(60298088, int1), 5, 0);
            CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
            break;
        }
        case 104: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60117861, int1), 300, script2764(60117860, int1), 300, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60150626, int1), 300, script2764(60134242, int1), 300, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60298077, int1), 250, script2764(60298077, int1), 250, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60298077, int1), 250, script2764(60298077, int1), 250, 0);
            CAM_MOVEALONG(0, 0, 100, 50, 1, 0);
            break;
        }
        case 105: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60298079, int1), 700, script2764(60298083, int1), 700, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60216163, int1), 700, script2764(60232547, int1), 700, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60068707, int1), 5, script2764(60068707, int1), 5, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60068707, int1), 5, script2764(60068707, int1), 5, 0);
            CAM_MOVEALONG(0, 0, 80, 50, 1, 0);
            break;
        }
        case 106: {
            script2766(0, 40, int0);
            break;
        }
        case 107: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60281694, int1), 350, script2764(60281695, int1), 350, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60216165, int1), 550, script2764(60232549, int1), 550, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60216158, int1), 300, script2764(60216158, int1), 300, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60101470, int1), 350, script2764(60101470, int1), 350, 0);
            CAM_MOVEALONG(0, 0, 120, 40, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}