//
function script4131(int0: component, int1: coordgrid): void {
    switch (varclient_1452) {
        case 101: {
            CC_DELETEALL(int0);
            script4138(0, 50, int0);
            break;
        }
        case 102: {
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script4129(pos(0,55,70,33,33), int1), 610, script4129(pos(0,55,70,33,33), int1), 610, 0);
            SPLINE_ADDPOINT(1, 0, script4129(pos(0,55,70,45,31), int1), 475, script4129(pos(0,55,70,45,31), int1), 475, 0);
            SPLINE_ADDPOINT(0, 1, script4129(pos(0,55,70,49,33), int1), 610, script4129(pos(0,55,70,57,32), int1), 610, 0);
            SPLINE_ADDPOINT(1, 1, script4129(pos(0,55,70,53,30), int1), 475, script4129(pos(0,55,70,57,29), int1), 475, 0);
            SPLINE_ADDPOINT(0, 2, script4129(pos(0,55,70,57,31), int1), 550, script4129(pos(0,55,70,57,31), int1), 550, 0);
            SPLINE_ADDPOINT(1, 2, script4129(pos(0,55,70,57,28), int1), 475, script4129(pos(0,55,70,57,28), int1), 475, 0);
            SPLINE_ADDPOINT(0, 3, script4129(pos(0,55,70,61,34), int1), 545, script4129(pos(0,55,70,61,35), int1), 545, 0);
            SPLINE_ADDPOINT(1, 3, script4129(pos(0,55,70,53,42), int1), 475, script4129(pos(0,55,70,53,42), int1), 475, 0);
            CAM_MOVEALONG(0, 0, 1000, 1000, 1, 0);
            script4140(30, int0);
            break;
        }
        case 103: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script4129(pos(0,55,70,57,31), int1), 550, script4129(pos(0,55,70,57,31), int1), 550, 0);
            SPLINE_ADDPOINT(1, 0, script4129(pos(0,55,70,57,28), int1), 475, script4129(pos(0,55,70,57,28), int1), 475, 0);
            SPLINE_ADDPOINT(0, 1, script4129(pos(0,55,70,61,34), int1), 545, script4129(pos(0,55,70,61,35), int1), 545, 0);
            SPLINE_ADDPOINT(1, 1, script4129(pos(0,55,70,53,42), int1), 475, script4129(pos(0,55,70,53,42), int1), 475, 0);
            SPLINE_ADDPOINT(0, 2, script4129(pos(0,55,70,57,37), int1), 520, script4129(pos(0,55,70,57,37), int1), 520, 0);
            SPLINE_ADDPOINT(1, 2, script4129(pos(0,55,70,53,42), int1), 475, script4129(pos(0,55,70,53,42), int1), 475, 0);
            CAM_MOVEALONG(0, 0, 1000, 1000, 1, 0);
            break;
        }
        case 104: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script4129(pos(0,55,70,57,37), int1), 520, script4129(pos(0,55,70,57,37), int1), 520, 0);
            SPLINE_ADDPOINT(1, 0, script4129(pos(0,55,70,53,42), int1), 475, script4129(pos(0,55,70,53,42), int1), 475, 0);
            SPLINE_ADDPOINT(0, 1, script4129(pos(0,55,70,41,36), int1), 510, script4129(pos(0,55,70,25,31), int1), 510, 0);
            SPLINE_ADDPOINT(1, 1, script4129(pos(0,55,70,17,32), int1), 475, script4129(pos(0,55,70,17,32), int1), 475, 0);
            CAM_MOVEALONG(0, 0, 1000, 1000, 1, 0);
            break;
        }
        case 105: {
            script4138(0, 50, int0);
            break;
        }
        case 106: {
            script4140(50, int0);
            break;
        }
        case 107: {
            CC_DELETEALL(int0);
            break;
        }
    };
    return;
}