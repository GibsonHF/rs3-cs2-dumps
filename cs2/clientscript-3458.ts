//
function script3458(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 31: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script3459(pos(0,59,89,57,30), int1), 500, script3459(pos(0,59,89,57,30), int1), 500, 0);
            SPLINE_ADDPOINT(1, 0, script3459(pos(0,59,89,41,26), int1), 350, script3459(pos(0,59,89,41,26), int1), 350, 0);
            SPLINE_ADDPOINT(0, 1, script3459(pos(0,59,89,57,29), int1), 450, script3459(pos(0,59,89,57,29), int1), 450, 0);
            SPLINE_ADDPOINT(1, 1, script3459(pos(0,59,89,45,27), int1), 350, script3459(pos(0,59,89,45,27), int1), 350, 0);
            SPLINE_ADDPOINT(0, 2, script3459(pos(0,59,89,49,27), int1), 550, script3459(pos(0,59,89,49,27), int1), 550, 0);
            SPLINE_ADDPOINT(1, 2, script3459(pos(0,59,89,49,32), int1), 350, script3459(pos(0,59,89,37,30), int1), 350, 0);
            CAM_MOVEALONG(0, 0, 50, 10, 1, 0);
            break;
        }
        case 32: {
            CAM_MOVEALONG(0, 1, 500, 500, 1, 1);
            break;
        }
        case 33: {
            script2766(0, 50, int0);
            break;
        }
        case 34: {
            script2768(25, int0);
            break;
        }
        case 35: {
            script2766(0, 25, int0);
            break;
        }
        case 36: {
            script2768(50, int0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}