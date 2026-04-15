//
function script5726(int0: component): void {
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
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 34, 0, 52), 300, MOVECOORD(int1, 34, 0, 52), 300, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 34, 0, 52), 300, MOVECOORD(int1, 34, 0, 52), 300, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 30, 0, 51), 150, MOVECOORD(int1, 30, 0, 51), 150, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 30, 0, 51), 150, MOVECOORD(int1, 30, 0, 51), 150, 0);
            CAM_MOVEALONG(0, 0, 50, 0, 1, 0);
            break;
        }
        case 5: {
            script2768(50, int0);
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 32, 0, 47), 350, MOVECOORD(int1, 32, 0, 47), 400, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 32, 0, 47), 350, MOVECOORD(int1, 32, 0, 47), 400, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 32, 0, 52), 200, MOVECOORD(int1, 32, 0, 52), 200, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 32, 0, 52), 200, MOVECOORD(int1, 32, 0, 52), 200, 0);
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