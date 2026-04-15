//
function script6809(int0: unknown_int): void {
    switch (varclient_1007) {
        case 201: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(2, 45), 400, script6810(2, 45), 400, 0);
            SPLINE_ADDPOINT(1, 0, script6810(-6, 45), 400, script6810(-6, 45), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(0, 46), 400, script6810(0, 46), 400, 0);
            SPLINE_ADDPOINT(1, 1, script6810(-6, 44), 400, script6810(-6, 44), 400, 0);
            CAM_MOVEALONG(0, 0, 400, 400, 1, 0);
            break;
        }
        case 202: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(63, 46), 400, script6810(63, 46), 400, 0);
            SPLINE_ADDPOINT(1, 0, script6810(58, 44), 400, script6810(58, 44), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(59, 44), 400, script6810(59, 44), 400, 0);
            SPLINE_ADDPOINT(1, 1, script6810(64, 45), 400, script6810(64, 45), 400, 0);
            CAM_MOVEALONG(0, 0, 750, 750, 1, 0);
            break;
        }
        case 203: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(59, 44), 400, script6810(59, 44), 400, 0);
            SPLINE_ADDPOINT(1, 0, script6810(64, 45), 400, script6810(64, 45), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(60, 45), 400, script6810(60, 45), 400, 0);
            SPLINE_ADDPOINT(1, 1, script6810(64, 45), 400, script6810(64, 45), 400, 0);
            CAM_MOVEALONG(0, 0, 500, 1500, 1, 0);
            break;
        }
        case 204: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(5, 31), 2200, script6810(5, 31), 2200, 0);
            SPLINE_ADDPOINT(1, 0, script6810(10, 28), 1400, script6810(10, 28), 1400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(8, 27), 1500, script6810(8, 27), 1500, 0);
            SPLINE_ADDPOINT(1, 1, script6810(10, 27), 1475, script6810(10, 27), 1475, 0);
            CAM_MOVEALONG(0, 0, 500, 1500, 1, 0);
            break;
        }
        case 205: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(8, 27), 1500, script6810(8, 27), 1500, 0);
            SPLINE_ADDPOINT(1, 0, script6810(10, 27), 1475, script6810(10, 27), 1475, 0);
            SPLINE_ADDPOINT(0, 1, script6810(13, 26), 1500, script6810(13, 26), 1500, 0);
            SPLINE_ADDPOINT(1, 1, script6810(16, 25), 1400, script6810(16, 25), 1400, 0);
            CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
            break;
        }
        case 206: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(13, 26), 1500, script6810(13, 26), 1500, 0);
            SPLINE_ADDPOINT(1, 0, script6810(16, 25), 1400, script6810(16, 25), 1400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(17, 26), 1500, script6810(17, 26), 1500, 0);
            SPLINE_ADDPOINT(1, 1, script6810(21, 24), 1400, script6810(21, 24), 1400, 0);
            CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
            break;
        }
        case 207: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6810(17, 26), 1500, script6810(17, 26), 1500, 0);
            SPLINE_ADDPOINT(1, 0, script6810(21, 24), 1400, script6810(21, 24), 1400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(8, 27), 1500, script6810(8, 27), 1500, 0);
            SPLINE_ADDPOINT(1, 1, script6810(10, 27), 1475, script6810(10, 27), 1475, 0);
            SPLINE_ADDPOINT(0, 2, script6810(5, 31), 2200, script6810(5, 31), 2200, 0);
            SPLINE_ADDPOINT(1, 2, script6810(10, 28), 1400, script6810(10, 28), 1400, 0);
            IF_SETONCAMFINISHED(callback(script6811, 1, 50, 50, int0, SPLINE_LENGTH(0)), int0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
        case 208: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(21, 24), 1500, script6810(21, 24), 1500, 0);
            SPLINE_ADDPOINT(1, 0, script6810(23, 24), 400, script6810(23, 24), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(20, 24), 2000, script6810(20, 24), 2100, 0);
            SPLINE_ADDPOINT(1, 1, script6810(23, 24), 400, script6810(23, 24), 400, 0);
            CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
            break;
        }
        case 209: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6810(20, 27), 1450, script6810(20, 27), 1450, 0);
            SPLINE_ADDPOINT(1, 0, script6810(20, 13), 1400, script6810(20, 13), 1400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(21, 22), 1450, script6810(21, 22), 1450, 0);
            SPLINE_ADDPOINT(1, 1, script6810(20, 13), 1400, script6810(20, 13), 1400, 0);
            SPLINE_ADDPOINT(0, 2, script6810(24, 18), 1450, script6810(24, 18), 1450, 0);
            SPLINE_ADDPOINT(1, 2, script6810(20, 13), 1400, script6810(20, 13), 1400, 0);
            IF_SETONCAMFINISHED(callback(script6811, 1, 100, 100, int0, SPLINE_LENGTH(0)), int0);
            CAM_MOVEALONG(0, 0, 300, 300, 1, 0);
            break;
        }
        case 210: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(41, 63), 450, script6810(41, 63), 450, 0);
            SPLINE_ADDPOINT(1, 0, script6810(40, 43), 400, script6810(40, 43), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(41, 49), 450, script6810(41, 49), 450, 0);
            SPLINE_ADDPOINT(1, 1, script6810(41, 43), 400, script6810(41, 43), 400, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            break;
        }
        case 211: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(41, 49), 450, script6810(41, 49), 450, 0);
            SPLINE_ADDPOINT(1, 0, script6810(41, 43), 400, script6810(41, 43), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6810(41, 25), 650, script6810(41, 25), 650, 0);
            SPLINE_ADDPOINT(1, 1, script6810(41, 20), 600, script6810(41, 20), 600, 0);
            CAM_MOVEALONG(0, 0, 300, 500, 1, 0);
            break;
        }
        case 212: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(29, 26), 1000, script6810(29, 26), 1000, 0);
            SPLINE_ADDPOINT(1, 0, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            SPLINE_ADDPOINT(0, 1, script6810(29, 26), 900, script6810(29, 26), 900, 0);
            SPLINE_ADDPOINT(1, 1, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
        case 213: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(29, 26), 900, script6810(29, 26), 900, 0);
            SPLINE_ADDPOINT(1, 0, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            SPLINE_ADDPOINT(0, 1, script6810(29, 26), 800, script6810(29, 26), 800, 0);
            SPLINE_ADDPOINT(1, 1, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
        case 214: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(29, 26), 800, script6810(29, 26), 800, 0);
            SPLINE_ADDPOINT(1, 0, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            SPLINE_ADDPOINT(0, 1, script6810(29, 26), 700, script6810(29, 26), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
        case 215: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(29, 26), 700, script6810(29, 26), 700, 0);
            SPLINE_ADDPOINT(1, 0, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            SPLINE_ADDPOINT(0, 1, script6810(29, 26), 600, script6810(29, 26), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
        case 216: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(29, 26), 600, script6810(29, 26), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            SPLINE_ADDPOINT(0, 1, script6810(29, 26), 500, script6810(29, 26), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
        case 217: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6810(29, 26), 500, script6810(29, 26), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            SPLINE_ADDPOINT(0, 1, script6810(29, 26), 400, script6810(29, 26), 400, 0);
            SPLINE_ADDPOINT(1, 1, script6810(31, 28), 100, script6810(31, 28), 100, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            break;
        }
    };
    return;
}