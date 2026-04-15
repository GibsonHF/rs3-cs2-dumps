//
function script3465(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 11: {
            CC_DELETEALL(int0);
            script2766(0, 75, int0);
            break;
        }
        case 12: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3460(30, 27, int1), 800, script3460(30, 30, int1), 850, 0);
            SPLINE_ADDPOINT(1, 0, script3460(35, 30, int1), 300, script3460(35, 40, int1), 300, 0);
            SPLINE_ADDPOINT(0, 1, script3460(40, 40, int1), 1000, script3460(40, 40, int1), 950, 0);
            SPLINE_ADDPOINT(1, 1, script3460(28, 52, int1), 200, script3460(28, 46, int1), 200, 0);
            CAM_MOVEALONG(0, 0, 100, 200, 1, 0);
            script2768(25, int0);
            break;
        }
        case 13: {
            CAM_SMOOTHRESET();
            CAM_FORCEANGLE(268, 644);
            break;
        }
        case 14: {
            script2766(0, 25, int0);
            break;
        }
        case 15: {
            script2768(25, int0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}