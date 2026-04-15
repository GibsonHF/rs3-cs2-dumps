//
function script6320(int0: component, int1: coordgrid): void {
    IF_SETONCAMFINISHED(callback(), int0);
    IF_SETONTIMER(callback(), int0);
    switch (varclient_1007) {
        case 201: {
            CC_DELETEALL(int0);
            script2766(0, 50, int0);
            break;
        }
        case 202: {
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, script6318(11, 3, int1), 900, script6318(16, 3, int1), 900, 0);
            SPLINE_ADDPOINT(1, 0, script6318(7, 3, int1), 700, script6318(12, 3, int1), 700, 0);
            SPLINE_ADDPOINT(0, 1, script6318(33, 6, int1), 1000, script6318(39, 7, int1), 1000, 0);
            SPLINE_ADDPOINT(1, 1, script6318(17, 5, int1), 700, script6318(20, 8, int1), 700, 0);
            SPLINE_ADDPOINT(0, 2, script6318(39, 15, int1), 1700, script6318(39, 17, int1), 1700, 0);
            SPLINE_ADDPOINT(1, 2, script6318(20, 21, int1), 1000, script6318(22, 26, int1), 1000, 0);
            SPLINE_ADDPOINT(0, 3, script6318(39, 19, int1), 1800, script6318(39, 21, int1), 1800, 0);
            SPLINE_ADDPOINT(1, 3, script6318(30, 30, int1), 900, script6318(33, 33, int1), 900, 0);
            SPLINE_ADDPOINT(0, 4, script6318(37, 32, int1), 1600, script6318(37, 34, int1), 1600, 0);
            SPLINE_ADDPOINT(1, 4, script6318(34, 44, int1), 800, script6318(34, 47, int1), 800, 0);
            CAM_MOVEALONG(0, 0, 100, 400, 1, 0);
            script2768(50, int0);
            IF_SETONCAMFINISHED(callback(script3468, int0, 1, 400, 400, 400, 300, 300, 0, 0, 0, 0, 0), int0);
            break;
        }
        case 203: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6318(29, 6, int1), 550, script6318(29, 6, int1), 550, 0);
            SPLINE_ADDPOINT(1, 0, script6318(20, 5, int1), 550, script6318(20, 5, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script6318(31, 6, int1), 600, script6318(31, 6, int1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6318(21, 5, int1), 600, script6318(21, 5, int1), 600, 0);
            CAM_MOVEALONG(0, 0, 100, 0, 1, 0);
            break;
        }
        case 204: {
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script6318(15, 15, int1), 1500, script6318(15, 15, int1), 1500, 0);
            SPLINE_ADDPOINT(1, 0, script6318(19, 21, int1), 600, script6318(19, 21, int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script6318(14, 14, int1), 1600, script6318(14, 14, int1), 1600, 0);
            SPLINE_ADDPOINT(1, 1, script6318(18, 21, int1), 500, script6318(18, 21, int1), 500, 0);
            SPLINE_ADDPOINT(0, 2, script6318(16, 27, int1), 900, script6318(16, 27, int1), 900, 0);
            SPLINE_ADDPOINT(1, 2, script6318(27, 29, int1), 600, script6318(27, 29, int1), 600, 0);
            SPLINE_ADDPOINT(0, 3, script6318(16, 28, int1), 900, script6318(16, 28, int1), 900, 0);
            SPLINE_ADDPOINT(1, 3, script6318(30, 28, int1), 600, script6318(30, 28, int1), 600, 0);
            CAM_MOVEALONG(0, 0, 400, 400, 1, 0);
            break;
        }
        case 205: {
            if ((SPLINE_LENGTH(0) == 4)) {
                CAM_MOVEALONG(0, 1, 500, 400, 1, 1);
            };
            break;
        }
        case 206: {
            if ((SPLINE_LENGTH(0) == 4)) {
                CAM_MOVEALONG(0, 2, 500, 400, 1, 2);
            };
            break;
        }
        case 207: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6318(16, 24, int1), 1200, script6318(17, 24, int1), 1200, 0);
            SPLINE_ADDPOINT(1, 0, script6318(52, 19, int1), 250, script6318(52, 19, int1), 250, 0);
            SPLINE_ADDPOINT(0, 1, script6318(40, 23, int1), 900, script6318(40, 23, int1), 900, 0);
            SPLINE_ADDPOINT(1, 1, script6318(56, 18, int1), 200, script6318(56, 18, int1), 200, 0);
            CAM_MOVEALONG(0, 0, 500, 0, 1, 0);
            break;
        }
        case 208: {
            script2766(0, 25, int0);
            break;
        }
        case 209: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(34, 38, int1), 1200, script6319(34, 38, int1), 1200, 0);
            SPLINE_ADDPOINT(1, 0, script6319(31, 46, int1), 550, script6319(31, 46, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script6319(37, 36, int1), 1250, script6319(37, 36, int1), 1250, 0);
            SPLINE_ADDPOINT(1, 1, script6319(32, 46, int1), 650, script6319(32, 46, int1), 650, 0);
            CAM_MOVEALONG(0, 0, 300, 0, 1, 0);
            break;
        }
        case 210: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6319(26, 50, int1), 1200, script6319(26, 50, int1), 1200, 0);
            SPLINE_ADDPOINT(1, 0, script6319(33, 67, int1), 550, script6319(33, 67, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script6319(25, 49, int1), 1600, script6319(25, 49, int1), 1600, 0);
            SPLINE_ADDPOINT(1, 1, script6319(32, 66, int1), 550, script6319(32, 66, int1), 550, 0);
            SPLINE_ADDPOINT(0, 2, script6319(20, 19, int1), 1200, script6319(20, 19, int1), 1200, 0);
            SPLINE_ADDPOINT(1, 2, script6319(27, 36, int1), 700, script6319(27, 36, int1), 700, 0);
            CAM_MOVEALONG(0, 0, 300, 200, 1, 0);
            break;
        }
        case 211: {
            if ((SPLINE_LENGTH(0) == 3)) {
                CAM_MOVEALONG(0, 1, 300, 400, 1, 1);
            };
            IF_SETONTIMER(callback(script3467, int0, CLIENTCLOCK(), 100), int0);
            break;
        }
        case 212: {
            if ((CC_FIND(int0, 0) == 1)) {
                CC_SETTRANS(0);
                CC_SETONTIMER(callback());
            } else {
                script2766(0, 0, int0);
            };
            break;
        }
        case 213: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(34, 67, int1), 600, script6319(34, 67, int1), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6319(33, 64, int1), 550, script6319(33, 64, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script6319(29, 70, int1), 700, script6319(29, 70, int1), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6319(34, 65, int1), 600, script6319(34, 65, int1), 600, 0);
            CAM_MOVEALONG(0, 0, 0, 0, 1, 0);
            script2768(25, int0);
            break;
        }
        case 214: {
            if ((SPLINE_LENGTH(0) == 2)) {
                CAM_MOVEALONG(0, 0, 600, 600, 1, 0);
            };
            break;
        }
        case 215: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(31, 62, int1), 600, script6319(31, 62, int1), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6319(34, 65, int1), 550, script6319(34, 65, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script6319(35, 59, int1), 600, script6319(35, 59, int1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6319(33, 65, int1), 550, script6319(33, 65, int1), 550, 0);
            CAM_MOVEALONG(0, 0, 75, 0, 1, 0);
            break;
        }
        case 216: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(35, 68, int1), 600, script6319(35, 68, int1), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6319(33, 65, int1), 450, script6319(33, 65, int1), 450, 0);
            SPLINE_ADDPOINT(0, 1, script6319(35, 67, int1), 550, script6319(35, 67, int1), 550, 0);
            SPLINE_ADDPOINT(1, 1, script6319(33, 65, int1), 425, script6319(33, 65, int1), 425, 0);
            CAM_MOVEALONG(0, 0, 100, 0, 1, 0);
            break;
        }
        case 217: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(35, 59, int1), 700, script6319(35, 59, int1), 700, 0);
            SPLINE_ADDPOINT(1, 0, script6319(33, 65, int1), 550, script6319(33, 65, int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script6319(43, 31, int1), 600, script6319(43, 31, int1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6319(36, 65, int1), 550, script6319(36, 65, int1), 550, 0);
            CAM_MOVEALONG(0, 0, 100, 300, 1, 0);
            IF_SETONTIMER(callback(script3467, int0, CLIENTCLOCK(), 200), int0);
            break;
        }
        case 218: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6318(47, 35, int1), 1300, script6318(49, 25, int1), 1300, 0);
            SPLINE_ADDPOINT(1, 0, script6318(54, 1, int1), 300, script6318(54, 1, int1), 300, 0);
            SPLINE_ADDPOINT(0, 1, script6318(54, 8, int1), 500, script6318(54, 8, int1), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6318(54, 0, int1), 100, script6318(54, 0, int1), 100, 0);
            CAM_MOVEALONG(0, 0, 400, 100, 1, 0);
            break;
        }
        case 219: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6318(36, 67, int1), 550, script6318(36, 67, int1), 550, 0);
            SPLINE_ADDPOINT(1, 0, script6318(33, 65, int1), 500, script6318(33, 65, int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script6318(36, 67, int1), 600, script6318(36, 67, int1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6318(33, 65, int1), 550, script6318(33, 65, int1), 550, 0);
            CAM_MOVEALONG(0, 0, 10, 0, 1, 0);
            break;
        }
        case 220: {
            CC_CREATE(int0, 3, 0);
            CC_SETTRANS(0);
            CC_SETFILL(1);
            CC_SETCOLOUR(0);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETONTIMER(callback(script2769, (CLIENTCLOCK() + 15), -2147483645));
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6318(54, 4, int1), 230, script6318(54, 4, int1), 230, 0);
            SPLINE_ADDPOINT(1, 0, script6318(55, 7, int1), 240, script6318(55, 7, int1), 240, 0);
            SPLINE_ADDPOINT(0, 1, script6318(57, 11, int1), 280, script6318(57, 11, int1), 280, 0);
            SPLINE_ADDPOINT(1, 1, script6318(57, 15, int1), 250, script6318(57, 15, int1), 250, 0);
            CAM_MOVEALONG(0, 0, 300, 800, 1, 0);
            break;
        }
        case 221: {
            SPLINE_NEW(0, 7);
            SPLINE_NEW(1, 7);
            SPLINE_ADDPOINT(0, 0, script6318(52, 21, int1), 500, script6318(52, 21, int1), 500, 250);
            SPLINE_ADDPOINT(1, 0, script6318(50, 27, int1), 450, script6318(50, 27, int1), 450, 0);
            SPLINE_ADDPOINT(0, 1, script6318(51, 24, int1), 550, script6318(51, 24, int1), 550, 0);
            SPLINE_ADDPOINT(1, 1, script6318(51, 30, int1), 500, script6318(51, 30, int1), 500, 0);
            SPLINE_ADDPOINT(0, 2, script6318(50, 27, int1), 600, script6318(50, 27, int1), 600, -250);
            SPLINE_ADDPOINT(1, 2, script6318(52, 33, int1), 550, script6318(52, 33, int1), 550, 0);
            SPLINE_ADDPOINT(0, 3, script6318(51, 30, int1), 650, script6318(51, 30, int1), 650, 0);
            SPLINE_ADDPOINT(1, 3, script6318(50, 36, int1), 600, script6318(50, 36, int1), 600, 0);
            SPLINE_ADDPOINT(0, 4, script6318(52, 33, int1), 700, script6318(52, 33, int1), 700, 100);
            SPLINE_ADDPOINT(1, 4, script6318(47, 37, int1), 600, script6318(47, 37, int1), 600, 0);
            SPLINE_ADDPOINT(0, 5, script6318(49, 35, int1), 700, script6318(49, 35, int1), 700, 0);
            SPLINE_ADDPOINT(1, 5, script6318(44, 39, int1), 600, script6318(44, 39, int1), 600, 0);
            SPLINE_ADDPOINT(0, 6, script6318(45, 38, int1), 700, script6318(45, 38, int1), 700, 0);
            SPLINE_ADDPOINT(1, 6, script6318(43, 45, int1), 600, script6318(43, 45, int1), 600, 0);
            IF_SETONCAMFINISHED(callback(script3468, int0, 1, 2500, 2000, 2500, 2000, 2500, 2000, 2500, 2000, 2500, 2000), int0);
            CAM_MOVEALONG(0, 0, 2500, 2000, 1, 0);
            break;
        }
        case 222: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(35, 65, int1), 600, script6319(35, 65, int1), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6319(33, 65, int1), 500, script6319(33, 65, int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script6319(34, 65, int1), 700, script6319(34, 65, int1), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6319(33, 65, int1), 550, script6319(33, 65, int1), 550, 0);
            CAM_MOVEALONG(0, 0, 100, 0, 1, 0);
            break;
        }
        case 223: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(32, 55, int1), 600, script6319(32, 55, int1), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6319(32, 48, int1), 600, script6319(32, 48, int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script6319(32, 75, int1), 800, script6319(32, 75, int1), 800, 0);
            SPLINE_ADDPOINT(1, 1, script6319(32, 55, int1), 600, script6319(32, 55, int1), 600, 0);
            CAM_MOVEALONG(0, 0, 200, 0, 1, 0);
            break;
        }
        case 224: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6319(31, 67, int1), 500, script6319(31, 67, int1), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6319(32, 70, int1), 500, script6319(32, 70, int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script6319(31, 68, int1), 500, script6319(31, 68, int1), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6319(32, 71, int1), 500, script6319(32, 71, int1), 500, 0);
            CAM_MOVEALONG(0, 0, 100, 0, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}