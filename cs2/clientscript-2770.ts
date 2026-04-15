//
function script2770(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 1: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,1,13), int1), 600, script2764(pos(0,57,77,1,13), int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,1,13), int1), 450, script2764(pos(0,57,77,1,13), int1), 450, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,20), int1), 100, script2764(pos(0,57,77,1,20), int1), 100, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,25), int1), 100, script2764(pos(0,57,77,1,25), int1), 100, 0);
            CAM_MOVEALONG(0, 0, 100, 140, 1, 0);
            IF_SETONTIMER(callback(script2771, int0, CLIENTCLOCK()), int0);
            break;
        }
        case 2: {
            IF_SETONTIMER(callback(), int0);
            SPLINE_NEW(0, 10);
            SPLINE_NEW(1, 10);
            SPLINE_ADDPOINT(0, 0, script2764(60183397, int1), 400, script2764(60183397, int1), 420, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60199780, int1), 400, script2764(60199780, int1), 420, 128);
            SPLINE_ADDPOINT(0, 2, script2764(60216163, int1), 400, script2764(60216163, int1), 420, 0);
            SPLINE_ADDPOINT(0, 3, script2764(60232546, int1), 400, script2764(60232546, int1), 420, -128);
            SPLINE_ADDPOINT(0, 4, script2764(60248929, int1), 400, script2764(60248929, int1), 420, 0);
            SPLINE_ADDPOINT(0, 5, script2764(60265312, int1), 400, script2764(60265312, int1), 420, 128);
            SPLINE_ADDPOINT(0, 6, script2764(60281695, int1), 400, script2764(60281695, int1), 420, 0);
            SPLINE_ADDPOINT(0, 7, script2764(60298078, int1), 400, script2764(60298078, int1), 420, -128);
            SPLINE_ADDPOINT(0, 8, script2764(60298077, int1), 400, script2764(60298077, int1), 420, 0);
            SPLINE_ADDPOINT(0, 9, script2764(60298076, int1), 400, script2764(60298076, int1), 420, 128);
            SPLINE_ADDPOINT(0, 10, script2764(60298075, int1), 400, script2764(60298075, int1), 420, 0);
            SPLINE_ADDPOINT(1, 0, script2764(60298074, int1), 400, script2764(60298074, int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60298073, int1), 395, script2764(60298073, int1), 395, 0);
            SPLINE_ADDPOINT(1, 2, script2764(60298072, int1), 390, script2764(60298072, int1), 390, 0);
            SPLINE_ADDPOINT(1, 3, script2764(60298071, int1), 385, script2764(60298071, int1), 385, 0);
            SPLINE_ADDPOINT(1, 4, script2764(60298070, int1), 380, script2764(60298070, int1), 380, 0);
            SPLINE_ADDPOINT(1, 5, script2764(60298069, int1), 375, script2764(60298069, int1), 375, 0);
            SPLINE_ADDPOINT(1, 6, script2764(60298068, int1), 370, script2764(60298068, int1), 370, 0);
            SPLINE_ADDPOINT(1, 7, script2764(60298067, int1), 365, script2764(60298067, int1), 365, 0);
            SPLINE_ADDPOINT(1, 8, script2764(60298066, int1), 360, script2764(60298066, int1), 360, 0);
            SPLINE_ADDPOINT(1, 9, script2764(60298065, int1), 355, script2764(60298065, int1), 355, 0);
            SPLINE_ADDPOINT(1, 10, script2764(60298065, int1), 350, script2764(60298065, int1), 350, 0);
            IF_SETONCAMFINISHED(callback(script2772, int0, 1), int0);
            CAM_MOVEALONG(0, 0, 3000, 2500, 1, 0);
            SOUND_SYNTH(34529, 1, 0);
            break;
        }
        case 3: {
            IF_SETONCAMFINISHED(callback(), int0);
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(60298070, int1), 350, script2764(60298070, int1), 350, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60298070, int1), 300, script2764(60298070, int1), 300, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(60298078, int1), 300, script2764(60298078, int1), 300, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60298078, int1), 350, script2764(60298078, int1), 350, 0);
            CAM_MOVEALONG(0, 0, 60, 50, 1, 0);
            break;
        }
        case 4: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,17,18), int1), 450, script2764(pos(0,57,77,17,17), int1), 450, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,9,12), int1), 600, script2764(pos(0,57,77,9,13), int1), 600, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,17), int1), 400, script2764(pos(0,57,77,1,18), int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,19), int1), 350, script2764(pos(0,57,77,1,18), int1), 350, 0);
            CAM_MOVEALONG(0, 0, 250, 200, 1, 0);
            break;
        }
        case 5: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,17,17), int1), 700, script2764(pos(0,57,77,17,17), int1), 700, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,17,17), int1), 700, script2764(pos(0,57,77,17,17), int1), 700, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,14), int1), 350, script2764(pos(0,57,77,1,13), int1), 350, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,13), int1), 150, script2764(pos(0,57,77,1,13), int1), 350, 0);
            CAM_MOVEALONG(0, 0, 100, 100, 1, 0);
            break;
        }
        case 6: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,13,13), int1), 450, script2764(pos(0,57,77,13,14), int1), 450, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,5,14), int1), 450, script2764(pos(0,57,77,5,14), int1), 450, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,17), int1), 400, script2764(pos(0,57,77,1,18), int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,19), int1), 400, script2764(pos(0,57,77,1,18), int1), 400, 0);
            CAM_MOVEALONG(0, 0, 60, 60, 1, 0);
            break;
        }
        case 7: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,5,14), int1), 400, script2764(pos(0,57,77,5,13), int1), 400, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,5,12), int1), 400, script2764(pos(0,57,77,5,13), int1), 400, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,53,13), int1), 350, script2764(pos(0,57,77,53,13), int1), 350, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,53,13), int1), 350, script2764(pos(0,57,77,53,13), int1), 350, 0);
            CAM_MOVEALONG(0, 0, 30, 30, 1, 0);
            break;
        }
        case 8: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,17,21), int1), 450, script2764(pos(0,57,77,17,20), int1), 450, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,13,19), int1), 450, script2764(pos(0,57,77,17,20), int1), 450, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,9,20), int1), 400, script2764(pos(0,57,77,5,21), int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,21), int1), 400, script2764(pos(0,57,77,5,21), int1), 400, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            break;
        }
        case 9: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,17,17), int1), 500, script2764(pos(0,57,77,9,17), int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,53,16), int1), 700, script2764(pos(0,57,77,53,17), int1), 700, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,9,12), int1), 250, script2764(pos(0,57,77,9,12), int1), 250, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,13,12), int1), 250, script2764(pos(0,57,77,13,12), int1), 250, 0);
            CAM_MOVEALONG(0, 0, 30, 30, 1, 0);
            break;
        }
        case 10: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,17,9), int1), 800, script2764(pos(0,57,77,17,9), int1), 800, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,17,7), int1), 600, script2764(pos(0,57,77,17,7), int1), 600, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,16), int1), 500, script2764(pos(0,57,77,1,16), int1), 500, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,57,18), int1), 400, script2764(pos(0,57,77,57,18), int1), 400, 0);
            CAM_MOVEALONG(0, 0, 400, 80, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}