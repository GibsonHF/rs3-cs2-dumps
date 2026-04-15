//
function script3472(int0: component, int1: component): void {
    switch (varclient_1007) {
        case 51: {
            CC_DELETEALL(int0);
            script2766(0, 100, int0);
            break;
        }
        case 52: {
            if ((((varclient_1065 == -1 as coordgrid) || ((COORDX(COORD()) - COORDX(varclient_1065)) > 128)) || ((COORDZ(COORD()) - COORDZ(varclient_1065)) > 128))) {
                varclient_1065 = script284(COORD());
            };
            script2768(75, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(0, 30, 26), 500, script3474(0, 29, 26), 500, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 33, 26), 250, script3474(0, 33, 26), 250, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 20, 30), 600, script3474(0, 20, 30), 500, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 23, 26), 250, script3474(0, 23, 26), 250, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            break;
        }
        case 53: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script3474(0, 7, 26), 425, script3474(0, 6, 26), 425, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 13, 25), 275, script3474(0, 13, 25), 275, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 5, 28), 425, script3474(0, 6, 26), 425, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 11, 27), 275, script3474(0, 11, 27), 275, 0);
            SPLINE_ADDPOINT(0, 2, script3474(0, 3, 26), 425, script3474(0, 3, 27), 425, 0);
            SPLINE_ADDPOINT(1, 2, script3474(0, 11, 26), 275, script3474(0, 11, 26), 275, 0);
            IF_SETONCAMFINISHED(callback(script3473, int0, 1, 50, 0, 0, 0), int0);
            CAM_MOVEALONG(0, 0, 150, 50, 1, 0);
            break;
        }
        case 54: {
            IF_SETONCAMFINISHED(callback(), int0);
            script2766(0, 25, int0);
            break;
        }
        case 55: {
            script2768(25, int0);
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script3474(0, 79, 16), 800, script3474(0, 79, 16), 800, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 73, 18), 325, script3474(0, 73, 18), 325, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 81, 17), 900, script3474(0, 81, 17), 900, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 73, 17), 275, script3474(0, 73, 17), 275, 0);
            SPLINE_ADDPOINT(0, 2, script3474(0, 82, 19), 1000, script3474(0, 82, 19), 1000, 0);
            SPLINE_ADDPOINT(1, 2, script3474(0, 73, 16), 225, script3474(0, 73, 16), 225, 0);
            SPLINE_ADDPOINT(0, 3, script3474(0, 82, 16), 1100, script3474(0, 82, 16), 1100, 0);
            SPLINE_ADDPOINT(1, 3, script3474(0, 73, 17), 175, script3474(0, 73, 17), 175, 0);
            IF_SETONCAMFINISHED(callback(script3473, int0, 1, 175, 125, 125, 0), int0);
            CAM_MOVEALONG(0, 0, 150, 175, 1, 0);
            break;
        }
        case 56: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(0, 3, 28), 425, script3474(0, 3, 27), 425, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 11, 26), 275, script3474(0, 11, 26), 275, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 0, 25), 425, script3474(0, 0, 26), 425, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 11, 26), 275, script3474(0, 11, 26), 275, 0);
            CAM_MOVEALONG(0, 0, 75, 0, 1, 0);
            break;
        }
        case 57: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(0, 123, 15), 800, script3474(0, 123, 15), 800, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 114, 11), 175, script3474(0, 114, 11), 175, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 120, 10), 600, script3474(0, 120, 10), 600, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 114, 12), 275, script3474(0, 114, 12), 275, 0);
            CAM_MOVEALONG(0, 0, 100, 0, 1, 0);
            break;
        }
        case 58: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(0, 7, 26), 400, script3474(0, 7, 26), 400, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 11, 27), 275, script3474(0, 11, 27), 275, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 8, 29), 400, script3474(0, 8, 29), 400, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 11, 28), 275, script3474(0, 11, 28), 275, 0);
            CAM_MOVEALONG(0, 0, 50, 0, 1, 0);
            break;
        }
        case 59: {
            IF_SETONCAMFINISHED(callback(), int0);
            script2766(0, 75, int0);
            break;
        }
        case 60: {
            script2768(75, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(0, 43, 28), 700, script3474(0, 42, 28), 700, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 31, 24), 200, script3474(0, 31, 24), 200, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 36, 25), 425, script3474(0, 36, 25), 425, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 32, 27), 275, script3474(0, 32, 27), 275, 0);
            CAM_MOVEALONG(0, 0, 125, 0, 1, 0);
            break;
        }
        case 61: {
            script2768(50, int0);
            break;
        }
        case 62: {
            IF_SETONCAMFINISHED(callback(), int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(0, 34, 120), 750, script3474(0, 29, 120), 750, 0);
            SPLINE_ADDPOINT(1, 0, script3474(0, 30, 112), 425, script3474(0, 30, 112), 425, 0);
            SPLINE_ADDPOINT(0, 1, script3474(0, 33, 117), 750, script3474(0, 33, 117), 750, 0);
            SPLINE_ADDPOINT(1, 1, script3474(0, 30, 111), 425, script3474(0, 30, 111), 425, 0);
            CAM_MOVEALONG(0, 0, 50, 100, 1, 0);
            break;
        }
        case 63: {
            script2768(50, int0);
            script2784(1, int1, comp(990, 5), comp(990, 6), comp(990, 7), comp(990, 8), comp(-1, 65535), 1);
            IF_SETHIDE(false, int1);
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script3474(1, 64, 98), 500, script3474(1, 66, 96), 500, 0);
            SPLINE_ADDPOINT(1, 0, script3474(1, 90, 98), 500, script3474(1, 90, 98), 500, 0);
            SPLINE_ADDPOINT(0, 1, script3474(1, 90, 80), 1000, script3474(1, 88, 80), 950, 0);
            SPLINE_ADDPOINT(1, 1, script3474(1, 91, 98), 500, script3474(1, 91, 98), 500, 0);
            SPLINE_ADDPOINT(0, 2, script3474(1, 91, 87), 1000, script3474(1, 91, 87), 1000, 0);
            SPLINE_ADDPOINT(1, 2, script3474(1, 90, 98), 500, script3474(1, 90, 98), 500, 0);
            IF_SETONCAMFINISHED(callback(script3473, int0, 1, 200, 0, 0, 0), int0);
            CAM_MOVEALONG(0, 0, 700, 700, 1, 0);
            break;
        }
        case 64: {
            IF_SETONCAMFINISHED(callback(), int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3474(1, 91, 91), 800, script3474(1, 91, 91), 800, 0);
            SPLINE_ADDPOINT(1, 0, script3474(1, 91, 98), 450, script3474(1, 91, 98), 450, 0);
            SPLINE_ADDPOINT(0, 1, script3474(1, 91, 94), 750, script3474(1, 91, 94), 750, 0);
            SPLINE_ADDPOINT(1, 1, script3474(1, 91, 98), 425, script3474(1, 91, 98), 425, 0);
            CAM_MOVEALONG(0, 0, 75, 0, 1, 0);
            break;
        }
        case 65: {
            IF_SETHIDE(true, int1);
            script2768(75, int0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}