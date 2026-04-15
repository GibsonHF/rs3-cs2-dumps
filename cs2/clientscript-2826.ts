//
function script2826(int0: component, int1: coordgrid): void {
    switch (varclient_1007) {
        case 301: {
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script2764(pos(0,57,77,53,29), int1), 565, script2764(pos(0,57,77,49,32), int1), 820, 0);
            SPLINE_ADDPOINT(1, 0, script2764(pos(0,57,77,53,36), int1), 295, script2764(pos(0,57,77,61,41), int1), 378, 0);
            SPLINE_ADDPOINT(0, 1, script2764(pos(0,57,77,9,42), int1), 700, script2764(pos(0,57,77,17,46), int1), 705, 0);
            SPLINE_ADDPOINT(1, 1, script2764(pos(0,57,77,45,43), int1), 335, script2764(pos(0,57,77,57,43), int1), 305, 0);
            SPLINE_ADDPOINT(0, 2, script2764(pos(0,57,77,61,35), int1), 740, script2764(pos(0,57,77,37,34), int1), 755, 0);
            SPLINE_ADDPOINT(1, 2, script2764(pos(0,57,77,61,53), int1), 315, script2764(pos(0,57,78,57,1), int1), 270, 0);
            SPLINE_ADDPOINT(0, 3, script2764(pos(0,57,77,61,31), int1), 554, script2764(pos(0,57,77,1,29), int1), 554, 0);
            SPLINE_ADDPOINT(1, 3, script2764(pos(0,57,77,13,36), int1), 305, script2764(pos(0,57,77,9,36), int1), 215, 0);
            CAM_MOVEALONG(0, 0, 500, 300, 1, 0);
            break;
        }
        case 302: {
            CAM_MOVEALONG(0, 1, 600, 300, 1, 1);
            break;
        }
        case 303: {
            CAM_MOVEALONG(0, 2, 600, 300, 1, 2);
            break;
        }
        default: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}