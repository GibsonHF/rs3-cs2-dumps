//
function script267(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_1007) {
        case 0: {
            script2766(0, 0, int0);
            break;
        }
        case 1: {
            script2768(50, int0);
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, MOVECOORD(int1, 33, 0, 18), 326, MOVECOORD(int1, 31, 0, 20), 326, 0);
            SPLINE_ADDPOINT(1, 0, MOVECOORD(int1, 32, 0, 15), 300, MOVECOORD(int1, 32, 0, 15), 300, 0);
            SPLINE_ADDPOINT(0, 1, MOVECOORD(int1, 33, 0, 18), 326, MOVECOORD(int1, 31, 0, 20), 326, 0);
            SPLINE_ADDPOINT(1, 1, MOVECOORD(int1, 32, 0, 15), 300, MOVECOORD(int1, 32, 0, 15), 300, 0);
            SPLINE_ADDPOINT(0, 2, MOVECOORD(int1, 25, 0, 19), 970, MOVECOORD(int1, 23, 0, 18), 1035, 0);
            SPLINE_ADDPOINT(1, 2, MOVECOORD(int1, 32, 0, 15), 300, MOVECOORD(int1, 32, 0, 15), 300, 0);
            SPLINE_ADDPOINT(0, 3, MOVECOORD(int1, 23, 0, 11), 1055, MOVECOORD(int1, 24, 0, 9), 1055, 0);
            SPLINE_ADDPOINT(1, 3, MOVECOORD(int1, 32, 0, 15), 300, MOVECOORD(int1, 32, 0, 15), 300, 0);
            CAM_MOVEALONG(0, 0, 0, 0, 1, 0);
            break;
        }
        case 2: {
            CAM_MOVEALONG(0, 1, 1500, 1500, 1, 0);
            IF_SETONCAMFINISHED(callback(script269, 2, int0), int0);
            break;
        }
    };
    return;
}