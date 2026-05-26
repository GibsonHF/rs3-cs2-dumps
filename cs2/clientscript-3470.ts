//
function script3470(int0: number, int1: number): void {
    switch (varclient_1007) {
        case 1: {
            CC_DELETEALL(int0);
            script2766(0, 75, int0);
            break;
        }
        case 2: {
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, script3459(62019146, int1), 510, script3459(62035526, int1), 715, 0);
            SPLINE_ADDPOINT(1, 0, script3459(62117455, int1), 170, script3459(62051920, int1), 170, 0);
            SPLINE_ADDPOINT(0, 1, script3459(62658120, int1), 1035, script3459(62772815, int1), 1430, 0);
            SPLINE_ADDPOINT(1, 1, script3459(62527055, int1), 170, script3459(62576213, int1), 170, 0);
            SPLINE_ADDPOINT(0, 2, script3459(62527082, int1), 2095, script3459(62363249, int1), 2095, 0);
            SPLINE_ADDPOINT(1, 2, script3459(62379614, int1), 170, script3459(62264928, int1), 170, 0);
            SPLINE_ADDPOINT(0, 3, script3459(62035560, int1), 1565, script3459(61920865, int1), 965, 0);
            SPLINE_ADDPOINT(1, 3, script3459(62183006, int1), 170, script3459(62101084, int1), 170, 0);
            SPLINE_ADDPOINT(0, 4, script3459(62019146, int1), 470, script3459(62051906, int1), 435, 0);
            SPLINE_ADDPOINT(1, 4, script3459(62117455, int1), 170, script3459(62133836, int1), 170, 0);
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