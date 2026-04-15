//
function script3470(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 1: {
            CC_DELETEALL(int0);
            script2766(0, 75, int0);
            break;
        }
        case 2: {
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, script3459(pos(0,59,89,37,10), int1), 510, script3459(pos(0,59,89,41,6), int1), 715, 0);
            SPLINE_ADDPOINT(1, 0, script3459(pos(0,59,89,61,15), int1), 170, script3459(pos(0,59,89,45,16), int1), 170, 0);
            SPLINE_ADDPOINT(0, 1, script3459(pos(0,59,89,1,8), int1), 1035, script3459(pos(0,59,89,29,15), int1), 1430, 0);
            SPLINE_ADDPOINT(1, 1, script3459(pos(0,59,89,33,15), int1), 170, script3459(pos(0,59,89,45,21), int1), 170, 0);
            SPLINE_ADDPOINT(0, 2, script3459(pos(0,59,89,33,42), int1), 2095, script3459(pos(0,59,89,57,49), int1), 2095, 0);
            SPLINE_ADDPOINT(1, 2, script3459(pos(0,59,89,61,30), int1), 170, script3459(pos(0,59,89,33,32), int1), 170, 0);
            SPLINE_ADDPOINT(0, 3, script3459(pos(0,59,89,41,40), int1), 1565, script3459(pos(0,59,89,13,33), int1), 965, 0);
            SPLINE_ADDPOINT(1, 3, script3459(pos(0,59,89,13,30), int1), 170, script3459(pos(0,59,89,57,28), int1), 170, 0);
            SPLINE_ADDPOINT(0, 4, script3459(pos(0,59,89,37,10), int1), 470, script3459(pos(0,59,89,45,2), int1), 435, 0);
            SPLINE_ADDPOINT(1, 4, script3459(pos(0,59,89,61,15), int1), 170, script3459(pos(0,59,89,1,12), int1), 170, 0);
            script2768(150, int0);
            IF_SETONCAMFINISHED(callback(script3471, int0, 1), int0);
            CAM_MOVEALONG(0, 0, 100, 700, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}