//
function script561(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_2019) {
        case 1: {
            script4138(0, 50, int0);
            break;
        }
        case 2: {
            script4140(50, int0);
            break;
        }
        case 3: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script565(int1, 4, 6), 600, script565(int1, 5, 5), 600, 0);
            SPLINE_ADDPOINT(1, 0, script565(int1, 1, -8), 250, script565(int1, 0, -6), 250, 0);
            SPLINE_ADDPOINT(0, 1, script565(int1, 8, -1), 700, script565(int1, 8, -4), 700, 0);
            SPLINE_ADDPOINT(1, 1, script565(int1, 0, 0), 400, script565(int1, 0, 2), 400, 0);
            SPLINE_ADDPOINT(0, 2, script565(int1, 4, -7), 700, script565(int1, 3, -8), 700, 0);
            SPLINE_ADDPOINT(1, 2, script565(int1, 3, 6), 400, script565(int1, 4, 7), 400, 0);
            CAM_MOVEALONG(0, 0, 500, 500, 1, 0);
            IF_SETONCAMFINISHED(callback(script563, int0, 1, 500, 500), int0);
            break;
        }
        case 4: {
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script565(int1, 4, 6), 600, script565(int1, 4, 5), 600, 0);
            SPLINE_ADDPOINT(1, 0, script565(int1, 1, -8), 250, script565(int1, -1, -7), 250, 0);
            SPLINE_ADDPOINT(0, 1, script565(int1, 7, 1), 600, script565(int1, 8, -1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script565(int1, -1, -4), 300, script565(int1, -1, -3), 300, 0);
            SPLINE_ADDPOINT(0, 2, script565(int1, 6, -4), 600, script565(int1, 5, -6), 600, 0);
            SPLINE_ADDPOINT(1, 2, script565(int1, 1, 2), 300, script565(int1, 1, 2), 300, 0);
            SPLINE_ADDPOINT(0, 3, script565(int1, 2, -8), 600, script565(int1, 1, -8), 600, 0);
            SPLINE_ADDPOINT(1, 3, script565(int1, 4, 6), 250, script565(int1, 4, 7), 300, 0);
            CAM_MOVEALONG(0, 0, 800, 800, 1, 0);
            IF_SETONCAMFINISHED(callback(script563, int0, 1, 800, 800), int0);
            break;
        }
    };
    return;
}