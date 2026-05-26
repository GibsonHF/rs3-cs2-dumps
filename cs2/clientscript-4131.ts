//
function script4131(int0: number, int1: number): void {
    switch (varclient_1452) {
        case 101: {
            CC_DELETEALL(int0);
            script4138(0, 50, int0);
            break;
        }
        case 102: {
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script4129(58069409, int1), 610, script4129(58069409, int1), 610, 0);
            SPLINE_ADDPOINT(1, 0, script4129(58118559, int1), 475, script4129(58118559, int1), 475, 0);
            SPLINE_ADDPOINT(0, 1, script4129(58134945, int1), 610, script4129(58167712, int1), 610, 0);
            SPLINE_ADDPOINT(1, 1, script4129(58151326, int1), 475, script4129(58167709, int1), 475, 0);
            SPLINE_ADDPOINT(0, 2, script4129(58167711, int1), 550, script4129(58167711, int1), 550, 0);
            SPLINE_ADDPOINT(1, 2, script4129(58167708, int1), 475, script4129(58167708, int1), 475, 0);
            SPLINE_ADDPOINT(0, 3, script4129(58184098, int1), 545, script4129(58184099, int1), 545, 0);
            SPLINE_ADDPOINT(1, 3, script4129(58151338, int1), 475, script4129(58151338, int1), 475, 0);
            CAM_MOVEALONG(0, 0, 1000, 1000, 1, 0);
            script4140(30, int0);
            break;
        }
        case 103: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script4129(58167711, int1), 550, script4129(58167711, int1), 550, 0);
            SPLINE_ADDPOINT(1, 0, script4129(58167708, int1), 475, script4129(58167708, int1), 475, 0);
            SPLINE_ADDPOINT(0, 1, script4129(58184098, int1), 545, script4129(58184099, int1), 545, 0);
            SPLINE_ADDPOINT(1, 1, script4129(58151338, int1), 475, script4129(58151338, int1), 475, 0);
            SPLINE_ADDPOINT(0, 2, script4129(58167717, int1), 520, script4129(58167717, int1), 520, 0);
            SPLINE_ADDPOINT(1, 2, script4129(58151338, int1), 475, script4129(58151338, int1), 475, 0);
            CAM_MOVEALONG(0, 0, 1000, 1000, 1, 0);
            break;
        }
        case 104: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script4129(58167717, int1), 520, script4129(58167717, int1), 520, 0);
            SPLINE_ADDPOINT(1, 0, script4129(58151338, int1), 475, script4129(58151338, int1), 475, 0);
            SPLINE_ADDPOINT(0, 1, script4129(58102180, int1), 510, script4129(58036639, int1), 510, 0);
            SPLINE_ADDPOINT(1, 1, script4129(58003872, int1), 475, script4129(58003872, int1), 475, 0);
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