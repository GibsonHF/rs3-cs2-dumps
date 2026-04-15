//
function script3466(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 101: {
            CC_DELETEALL(int0);
            script2766(0, 50, int0);
            break;
        }
        case 102: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3460(7, 54, int1), 1000, script3460(8, 54, int1), 1000, 0);
            SPLINE_ADDPOINT(1, 0, script3460(13, 50, int1), 450, script3460(13, 50, int1), 450, 0);
            SPLINE_ADDPOINT(0, 1, script3460(13, 51, int1), 800, script3460(13, 52, int1), 800, 0);
            SPLINE_ADDPOINT(1, 1, script3460(14, 44, int1), 550, script3460(14, 44, int1), 550, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            script2768(75, int0);
            break;
        }
        case 103: {
            CC_DELETEALL(int0);
            IF_SETONTIMER(callback(script3467, int0, CLIENTCLOCK(), 100), int0);
            break;
        }
        case 104: {
            IF_SETONTIMER(callback(), int0);
            if ((CC_FIND(int0, 0) == 1)) {
                CC_SETTRANS(0);
                CC_SETONTIMER(callback());
            } else {
                script2766(0, 0, int0);
            };
            break;
        }
        case 105: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3460(29, 33, int1), 1200, script3460(29, 34, int1), 1200, 0);
            SPLINE_ADDPOINT(1, 0, script3460(31, 25, int1), 500, script3460(31, 24, int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script3460(25, 19, int1), 1200, script3460(25, 18, int1), 1200, 0);
            SPLINE_ADDPOINT(1, 1, script3460(31, 13, int1), 500, script3460(30, 13, int1), 500, 0);
            CAM_MOVEALONG(0, 0, 500, 450, 1, 0);
            script2768(50, int0);
            break;
        }
        case 106: {
            CAM_MOVETO(script3460(37, 19, int1), 800, 1000, 100);
            CAM_LOOKAT(script3460(31, 13, int1), 100, 1000, 100);
            break;
        }
        case 107: {
            CAM_MOVETO(script3460(29, 14, int1), 800, 1000, 100);
            CAM_LOOKAT(script3460(31, 9, int1), 100, 1000, 100);
            break;
        }
        case 108: {
            CAM_MOVETO(script3460(25, 19, int1), 800, 1000, 100);
            CAM_LOOKAT(script3460(31, 13, int1), 100, 1000, 100);
            break;
        }
        case 109: {
            CAM_MOVETO(script3460(29, 14, int1), 800, 1000, 100);
            CAM_LOOKAT(script3460(31, 9, int1), 100, 1000, 100);
            break;
        }
        case 110: {
            CAM_MOVETO(script3460(37, 19, int1), 800, 1000, 100);
            CAM_LOOKAT(script3460(31, 13, int1), 100, 1000, 100);
            break;
        }
        case 111: {
            CAM_MOVETO(script3460(25, 19, int1), 800, 1000, 100);
            CAM_LOOKAT(script3460(31, 13, int1), 100, 1000, 100);
            break;
        }
        case 112: {
            script2766(0, 50, int0);
            break;
        }
        case 113: {
            SPLINE_NEW(0, 7);
            SPLINE_NEW(1, 7);
            SPLINE_ADDPOINT(0, 0, script3460(31, 82, int1), 600, script3460(31, 79, int1), 600, 0);
            SPLINE_ADDPOINT(1, 0, script3460(31, 58, int1), 400, script3460(31, 58, int1), 400, 0);
            SPLINE_ADDPOINT(0, 1, script3460(31, 59, int1), 1500, script3460(29, 55, int1), 1500, 0);
            SPLINE_ADDPOINT(1, 1, script3460(30, 46, int1), 600, script3460(30, 46, int1), 600, 0);
            SPLINE_ADDPOINT(0, 2, script3460(8, 57, int1), 1800, script3460(1, 47, int1), 1800, 0);
            SPLINE_ADDPOINT(1, 2, script3460(30, 36, int1), 600, script3460(31, 36, int1), 600, 0);
            SPLINE_ADDPOINT(0, 3, script3460(8, 13, int1), 2100, script3460(8, 3, int1), 2100, 0);
            SPLINE_ADDPOINT(1, 3, script3460(30, 35, int1), 600, script3460(30, 34, int1), 600, 0);
            SPLINE_ADDPOINT(0, 4, script3460(53, 13, int1), 2400, script3460(63, 23, int1), 2400, 0);
            SPLINE_ADDPOINT(1, 4, script3460(31, 35, int1), 500, script3460(32, 36, int1), 500, 0);
            SPLINE_ADDPOINT(0, 5, script3460(53, 58, int1), 1700, script3460(63, 68, int1), 1700, 0);
            SPLINE_ADDPOINT(1, 5, script3460(31, 36, int1), 400, script3460(31, 35, int1), 400, 0);
            SPLINE_ADDPOINT(0, 6, script3460(38, 69, int1), 600, script3460(35, 70, int1), 600, 0);
            SPLINE_ADDPOINT(1, 6, script3460(30, 42, int1), 325, script3460(30, 43, int1), 325, 0);
            IF_SETONCAMFINISHED(callback(script3468, int0, 1, 900, 1300, 1300, 1600, 1600, 1600, 1600, 1200, 1200, 200), int0);
            CAM_MOVEALONG(0, 0, 100, 900, 1, 0);
            script2768(50, int0);
            break;
        }
        case 114: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script3460(38, 66, int1), 800, script3460(38, 66, int1), 800, 0);
            SPLINE_ADDPOINT(1, 0, script3460(32, 44, int1), 10, script3460(32, 44, int1), 10, 0);
            SPLINE_ADDPOINT(0, 1, script3460(30, 66, int1), 800, script3460(30, 66, int1), 800, 0);
            SPLINE_ADDPOINT(1, 1, script3460(34, 45, int1), 10, script3460(34, 45, int1), 10, 0);
            SPLINE_ADDPOINT(0, 2, script3460(28, 67, int1), 1000, script3460(28, 67, int1), 1000, 0);
            SPLINE_ADDPOINT(1, 2, script3460(34, 45, int1), 10, script3460(34, 45, int1), 10, 0);
            IF_SETONCAMFINISHED(callback(script3468, int0, 1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0), int0);
            CAM_MOVEALONG(0, 0, 150, 100, 1, 0);
            break;
        }
        case 115: {
            IF_SETONCAMFINISHED(callback(), int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script3460(30, 56, int1), 800, script3460(31, 55, int1), 800, 0);
            SPLINE_ADDPOINT(1, 0, script3460(31, 71, int1), 200, script3460(31, 71, int1), 200, 0);
            SPLINE_ADDPOINT(0, 1, script3460(34, 53, int1), 800, script3460(34, 53, int1), 800, 0);
            SPLINE_ADDPOINT(1, 1, script3460(30, 71, int1), 200, script3460(30, 71, int1), 200, 0);
            CAM_MOVEALONG(0, 0, 150, 0, 1, 0);
            break;
        }
        case 116: {
            SPLINE_NEW(0, 15);
            SPLINE_NEW(1, 15);
            SPLINE_ADDPOINT(0, 0, script3460(30, 62, int1), 575, script3460(30, 62, int1), 575, 0);
            SPLINE_ADDPOINT(1, 0, script3460(34, 54, int1), 210, script3460(34, 54, int1), 210, 0);
            SPLINE_ADDPOINT(0, 1, script3460(31, 62, int1), 580, script3460(31, 62, int1), 580, 250);
            SPLINE_ADDPOINT(1, 1, script3460(34, 54, int1), 220, script3460(34, 54, int1), 220, 0);
            SPLINE_ADDPOINT(0, 2, script3460(30, 62, int1), 585, script3460(30, 62, int1), 585, -500);
            SPLINE_ADDPOINT(1, 2, script3460(34, 54, int1), 230, script3460(34, 54, int1), 230, 0);
            SPLINE_ADDPOINT(0, 3, script3460(31, 62, int1), 590, script3460(31, 62, int1), 590, 500);
            SPLINE_ADDPOINT(1, 3, script3460(34, 54, int1), 240, script3460(34, 54, int1), 240, 0);
            SPLINE_ADDPOINT(0, 4, script3460(30, 62, int1), 595, script3460(30, 62, int1), 595, -500);
            SPLINE_ADDPOINT(1, 4, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 5, script3460(31, 62, int1), 650, script3460(31, 62, int1), 650, 750);
            SPLINE_ADDPOINT(1, 5, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 6, script3460(29, 62, int1), 725, script3460(29, 62, int1), 725, -750);
            SPLINE_ADDPOINT(1, 6, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 7, script3460(31, 62, int1), 850, script3460(31, 62, int1), 850, 750);
            SPLINE_ADDPOINT(1, 7, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 8, script3460(30, 62, int1), 975, script3460(30, 62, int1), 975, -750);
            SPLINE_ADDPOINT(1, 8, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 9, script3460(32, 62, int1), 1150, script3460(32, 62, int1), 1150, 500);
            SPLINE_ADDPOINT(1, 9, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 10, script3460(30, 62, int1), 1300, script3460(30, 62, int1), 1300, -500);
            SPLINE_ADDPOINT(1, 10, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 11, script3460(31, 62, int1), 1450, script3460(31, 62, int1), 1450, 250);
            SPLINE_ADDPOINT(1, 11, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 12, script3460(30, 62, int1), 1600, script3460(30, 62, int1), 1600, -250);
            SPLINE_ADDPOINT(1, 12, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 13, script3460(32, 62, int1), 1650, script3460(31, 62, int1), 1650, 125);
            SPLINE_ADDPOINT(1, 13, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            SPLINE_ADDPOINT(0, 14, script3460(30, 62, int1), 1700, script3460(30, 62, int1), 1700, 0);
            SPLINE_ADDPOINT(1, 14, script3460(34, 54, int1), 250, script3460(34, 54, int1), 250, 0);
            IF_SETONCAMFINISHED(callback(script3469, int0, 1), int0);
            CAM_MOVEALONG(0, 0, 2500, 3200, 1, 0);
            break;
        }
        case 117: {
            IF_SETONCAMFINISHED(callback(), int0);
            script2766(0, 50, int0);
            break;
        }
        case 118: {
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