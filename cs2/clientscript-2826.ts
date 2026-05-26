//
function script2826(int0: number, int1: number): void {
    switch (varclient_1007) {
        case 301: {
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script2764(60248925, int1), 565, script2764(60232544, int1), 820, 0);
            SPLINE_ADDPOINT(1, 0, script2764(60248932, int1), 295, script2764(60281705, int1), 378, 0);
            SPLINE_ADDPOINT(0, 1, script2764(60330858, int1), 700, script2764(60363630, int1), 705, 0);
            SPLINE_ADDPOINT(1, 1, script2764(60478315, int1), 335, script2764(60527467, int1), 305, 0);
            SPLINE_ADDPOINT(0, 2, script2764(60281699, int1), 740, script2764(60183394, int1), 755, 0);
            SPLINE_ADDPOINT(1, 2, script2764(60281717, int1), 315, script2764(60265345, int1), 270, 0);
            SPLINE_ADDPOINT(0, 3, script2764(60281695, int1), 554, script2764(60298077, int1), 554, 0);
            SPLINE_ADDPOINT(1, 3, script2764(60085092, int1), 305, script2764(59806564, int1), 215, 0);
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