//
function script268(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_1007) {
        case 0: {
            script2766(0, 50, int0);
            break;
        }
        case 1: {
            script2768(50, int0);
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 25, 0, 17), 586, MOVECOORD(int1, 27, 0, 14), 586, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 26, 0, 24), 284, MOVECOORD(int1, 29, 0, 24), 284, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 25, 0, 17), 586, MOVECOORD(int1, 27, 0, 14), 586, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 26, 0, 24), 284, MOVECOORD(int1, 29, 0, 24), 284, 0);
            SPLINE_ADDPOINT(0, 2, MOVECOORD(int1, 35, 0, 16), 618, MOVECOORD(int1, 40, 0, 21), 618, 0);
            SPLINE_ADDPOINT(1, 2, MOVECOORD(int1, 28, 0, 20), 372, MOVECOORD(int1, 28, 0, 18), 372, 0);
            SPLINE_ADDPOINT(0, 3, MOVECOORD(int1, 27, 0, 24), 1500, MOVECOORD(int1, 24, 0, 23), 1025, 0);
            SPLINE_ADDPOINT(1, 3, MOVECOORD(int1, 32, 0, 13), 308, MOVECOORD(int1, 36, 0, 13), 308, 0);
            SPLINE_ADDPOINT(0, 4, MOVECOORD(int1, 25, 0, 22), 450, MOVECOORD(int1, 25, 0, 22), 450, 0);
            SPLINE_ADDPOINT(1, 4, MOVECOORD(int1, 32, 0, 13), 600, MOVECOORD(int1, 32, 0, 13), 600, 0);
            CAM_MOVEALONG(0, 0, 0, 0, 1, 0);
            break;
        }
        case 2: {
            script2768(50, int0);
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 36, 0, 17), 626, MOVECOORD(int1, 33, 0, 14), 626, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 37, 0, 25), 308, MOVECOORD(int1, 35, 0, 22), 308, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 36, 0, 17), 626, MOVECOORD(int1, 33, 0, 14), 626, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 37, 0, 25), 308, MOVECOORD(int1, 35, 0, 22), 308, 0);
            SPLINE_ADDPOINT(0, 2, MOVECOORD(int1, 30, 0, 17), 840, MOVECOORD(int1, 31, 0, 19), 1395, 0);
            SPLINE_ADDPOINT(1, 2, MOVECOORD(int1, 36, 0, 21), 388, MOVECOORD(int1, 37, 0, 20), 388, 0);
            SPLINE_ADDPOINT(0, 3, MOVECOORD(int1, 38, 0, 22), 1500, MOVECOORD(int1, 41, 0, 22), 1670, 0);
            SPLINE_ADDPOINT(1, 3, MOVECOORD(int1, 33, 0, 14), 300, MOVECOORD(int1, 26, 0, 11), 300, 0);
            SPLINE_ADDPOINT(0, 4, MOVECOORD(int1, 38, 0, 22), 450, MOVECOORD(int1, 38, 0, 22), 450, 0);
            SPLINE_ADDPOINT(1, 4, MOVECOORD(int1, 33, 0, 14), 600, MOVECOORD(int1, 33, 0, 14), 600, 0);
            CAM_MOVEALONG(0, 0, 0, 0, 1, 0);
            break;
        }
        case 3: {
            CAM_MOVEALONG(0, 1, 50, 1000, 1, 1);
            IF_SETONCAMFINISHED(callback(script270, 2, int0), int0);
            break;
        }
    };
    return;
}