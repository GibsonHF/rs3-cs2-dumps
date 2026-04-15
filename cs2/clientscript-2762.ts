//
function script2762(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 101: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,13,13), int1), 450, script2764(pos(0,57,77,13,13), int1), 500, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,17,13), int1), 600, script2764(pos(0,57,77,17,13), int1), 550, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,53,19), int1), 350, script2764(pos(0,57,77,53,19), int1), 375, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,17), int1), 350, script2764(pos(0,57,77,1,17), int1), 375, 0);
            CAM_MOVEALONG(0, 0, 300, 400, 1, 0);
            break;
        }
        case 102: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,53,25), int1), 600, script2764(pos(0,57,77,53,26), int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,57,30), int1), 700, script2764(pos(0,57,77,57,29), int1), 700, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,57,15), int1), 400, script2764(pos(0,57,77,57,13), int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,57,18), int1), 400, script2764(pos(0,57,77,57,18), int1), 400, 0);
            CAM_MOVEALONG(0, 0, 250, 200, 1, 0);
            break;
        }
        case 103: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,61,21), int1), 700, script2764(pos(0,57,77,1,22), int1), 650, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,1,26), int1), 650, script2764(pos(0,57,77,1,26), int1), 650, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,35), int1), 5, script2764(pos(0,57,77,1,35), int1), 5, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,40), int1), 5, script2764(pos(0,57,77,1,40), int1), 5, 0);
            CAM_MOVEALONG(0, 0, 200, 200, 1, 0);
            break;
        }
        case 104: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,21,37), int1), 300, script2764(pos(0,57,77,21,36), int1), 300, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,29,34), int1), 300, script2764(pos(0,57,77,25,34), int1), 300, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,1,29), int1), 250, script2764(pos(0,57,77,1,29), int1), 250, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,1,29), int1), 250, script2764(pos(0,57,77,1,29), int1), 250, 0);
            CAM_MOVEALONG(0, 0, 100, 50, 1, 0);
            break;
        }
        case 105: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,1,31), int1), 700, script2764(pos(0,57,77,1,35), int1), 700, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,45,35), int1), 700, script2764(pos(0,57,77,49,35), int1), 700, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,9,35), int1), 5, script2764(pos(0,57,77,9,35), int1), 5, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,9,35), int1), 5, script2764(pos(0,57,77,9,35), int1), 5, 0);
            CAM_MOVEALONG(0, 0, 80, 50, 1, 0);
            break;
        }
        case 106: {
            script2766(0, 40, int0);
            break;
        }
        case 107: {
            script2768(25, int0);
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,61,30), int1), 350, script2764(pos(0,57,77,61,31), int1), 350, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,45,37), int1), 550, script2764(pos(0,57,77,49,37), int1), 550, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,45,30), int1), 300, script2764(pos(0,57,77,45,30), int1), 300, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,17,30), int1), 350, script2764(pos(0,57,77,17,30), int1), 350, 0);
            CAM_MOVEALONG(0, 0, 120, 40, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}