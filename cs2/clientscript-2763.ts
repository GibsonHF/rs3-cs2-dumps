//
function script2763(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 201: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,5,35), int1), 600, script2764(pos(0,57,77,9,35), int1), 600, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,17,35), int1), 550, script2764(pos(0,57,77,17,35), int1), 600, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,9,35), int1), 200, script2764(pos(0,57,77,9,35), int1), 200, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,9,35), int1), 200, script2764(pos(0,57,77,9,35), int1), 200, 0);
            CAM_MOVEALONG(0, 0, 200, 75, 1, 0);
            break;
        }
        case 202: {
            script2766(0, 10, int0);
            break;
        }
        case 203: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,17,35), int1), 550, script2764(pos(0,57,77,17,35), int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,13,35), int1), 750, script2764(pos(0,57,77,13,35), int1), 750, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,9,35), int1), 200, script2764(pos(0,57,77,9,35), int1), 200, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,9,35), int1), 200, script2764(pos(0,57,77,9,35), int1), 200, 0);
            CAM_MOVEALONG(0, 0, 50, 25, 1, 0);
            script2768(75, int0);
            break;
        }
        case 204: {
            SPLINE_NEW(0, 2);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,61,38), int1), 550, script2764(pos(0,57,77,1,38), int1), 550, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,9,39), int1), 550, script2764(pos(0,57,77,5,39), int1), 550, 0);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,21,30), int1), 400, script2764(pos(0,57,77,17,30), int1), 400, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,37,34), int1), 400, script2764(pos(0,57,77,41,33), int1), 400, 0);
            CAM_MOVEALONG(0, 0, 150, 220, 1, 0);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}