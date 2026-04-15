//
function script7579(int0: component): void {
    switch (varclient_2711) {
        case 0: {
            script2766(0, 50, int0);
            break;
        }
        case 1: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script7580(31, 5), 475, script7580(31, 5), 475, 0);
            SPLINE_ADDPOINT(0, 1, script7580(31, 20), 1325, script7580(31, 20), 1325, 0);
            SPLINE_ADDPOINT(1, 0, script7580(30, 8), 275, script7580(30, 8), 275, 0);
            SPLINE_ADDPOINT(1, 1, script7580(26, 21), 1150, script7580(26, 21), 1150, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            break;
        }
        case 2: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script7580(31, 20), 1325, script7580(31, 20), 1325, 0);
            SPLINE_ADDPOINT(0, 1, script7580(25, 13), 350, script7580(25, 13), 350, 0);
            SPLINE_ADDPOINT(1, 0, script7580(26, 21), 1150, script7580(26, 21), 1150, 0);
            SPLINE_ADDPOINT(1, 1, script7580(21, 17), 250, script7580(21, 17), 250, 0);
            CAM_MOVEALONG(0, 0, 180, 180, 1, 0);
            break;
        }
        case 3: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script7580(14, 17), 2425, script7580(14, 17), 2425, 0);
            SPLINE_ADDPOINT(1, 0, script7580(20, 16), 2225, script7580(20, 16), 2225, 0);
            SPLINE_ADDPOINT(0, 1, script7580(17, 7), 2425, script7580(17, 7), 2425, 0);
            SPLINE_ADDPOINT(1, 1, script7580(16, 18), 2200, script7580(16, 18), 2200, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            break;
        }
        case 4: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script7580(17, 7), 2425, script7580(17, 7), 2425, 0);
            SPLINE_ADDPOINT(1, 0, script7580(16, 18), 2225, script7580(16, 18), 2225, 0);
            SPLINE_ADDPOINT(0, 1, script7580(14, 24), 2325, script7580(14, 24), 2325, 0);
            SPLINE_ADDPOINT(1, 1, script7580(16, 20), 2200, script7580(16, 20), 2200, 0);
            CAM_MOVEALONG(0, 0, 350, 350, 1, 0);
            break;
        }
        case 5: {
            script2768(50, int0);
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script7580(30, 11), 1150, script7580(30, 11), 1150, 0);
            SPLINE_ADDPOINT(1, 0, script7580(20, 22), 800, script7580(20, 22), 800, 0);
            SPLINE_ADDPOINT(0, 1, script7580(30, 19), 900, script7580(30, 19), 900, 0);
            SPLINE_ADDPOINT(1, 1, script7580(25, 20), 775, script7580(25, 20), 775, 0);
            SPLINE_ADDPOINT(0, 2, script7580(26, 33), 800, script7580(26, 43), 800, 0);
            SPLINE_ADDPOINT(1, 2, script7580(27, 11), 775, script7580(27, 11), 775, 0);
            CAM_MOVEALONG(0, 0, 160, 160, 1, 0);
            IF_SETONCAMFINISHED(callback(script7570, int0, 160, 1), int0);
            break;
        }
        case 6: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script7580(26, 33), 800, script7580(26, 33), 800, 0);
            SPLINE_ADDPOINT(1, 0, script7580(27, 11), 775, script7580(27, 11), 775, 0);
            SPLINE_ADDPOINT(0, 1, script7580(29, 19), 1225, script7580(29, 19), 1225, 0);
            SPLINE_ADDPOINT(1, 1, script7580(23, 21), 775, script7580(23, 21), 775, 0);
            SPLINE_ADDPOINT(0, 2, script7580(18, 9), 1300, script7580(18, 9), 1300, 0);
            SPLINE_ADDPOINT(1, 2, script7580(19, 18), 775, script7580(19, 18), 775, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            IF_SETONCAMFINISHED(callback(script7570, int0, 150, 1), int0);
            break;
        }
    };
    return;
}