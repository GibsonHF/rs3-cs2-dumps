//
function script2740(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_1007) {
        case 1: {
            script2766(0, 50, int0);
            break;
        }
        case 2: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 31, 0, 37), 900, MOVECOORD(int1, 31, 0, 37), 900, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 31, 0, 39), 750, MOVECOORD(int1, 31, 0, 39), 750, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 31, 0, 43), 700, MOVECOORD(int1, 31, 0, 43), 700, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 31, 0, 43), 700, MOVECOORD(int1, 31, 0, 43), 700, 0);
            CAM_MOVEALONG(0, 0, 50, 0, 1, 0);
            break;
        }
        case 3: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 31, 0, 27), 900, MOVECOORD(int1, 31, 0, 27), 900, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 31, 0, 27), 1000, MOVECOORD(int1, 31, 0, 27), 1000, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 31, 0, 33), 750, MOVECOORD(int1, 31, 0, 33), 750, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 31, 0, 33), 750, MOVECOORD(int1, 31, 0, 33), 750, 0);
            CAM_MOVEALONG(0, 0, 50, 0, 1, 0);
            break;
        }
        case 40: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 36, 0, 29), 850, MOVECOORD(int1, 36, 0, 29), 850, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 36, 0, 29), 800, MOVECOORD(int1, 36, 0, 29), 800, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 33, 0, 36), 700, MOVECOORD(int1, 33, 0, 36), 700, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 33, 0, 36), 600, MOVECOORD(int1, 33, 0, 36), 600, 0);
            CAM_MOVEALONG(0, 0, 50, 0, 1, 0);
            break;
        }
        case 50: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 39, 0, 23), 1000, MOVECOORD(int1, 39, 0, 23), 1000, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 39, 0, 23), 950, MOVECOORD(int1, 39, 0, 23), 950, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 36, 0, 28), 750, MOVECOORD(int1, 36, 0, 28), 750, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 36, 0, 28), 650, MOVECOORD(int1, 36, 0, 28), 650, 0);
            CAM_MOVEALONG(0, 0, 50, 0, 1, 0);
            break;
        }
        case 99: {
            script2766(0, 50, int0);
            break;
        }
        case 100: {
            CAM_SMOOTHRESET();
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