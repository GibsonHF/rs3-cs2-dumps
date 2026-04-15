//
function script1135(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_1007) {
        case 1: {
            script2766(16777215, 50, int0);
            SOUND_SYNTH(35224, 1, 0);
            break;
        }
        case 2: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script1145(25, 25, int1), 750, script1145(25, 25, int1), 750, 0);
            SPLINE_ADDPOINT(0, 1, script1145(25, 26, int1), 750, script1145(25, 26, int1), 750, 0);
            SPLINE_ADDPOINT(1, 0, script1145(25, 29, int1), 600, script1145(25, 29, int1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script1145(25, 30, int1), 600, script1145(25, 30, int1), 600, 0);
            CAM_MOVEALONG(0, 0, 100, 0, 1, 0);
            script2768(45, int0);
            SOUND_SYNTH(35224, 1, 0);
            break;
        }
        case 3: {
            SPLINE_NEW(0, 7);
            SPLINE_NEW(1, 7);
            SPLINE_ADDPOINT(0, 0, script1145(25, 26, int1), 750, script1145(25, 26, int1), 1200, 0);
            SPLINE_ADDPOINT(0, 1, script1145(16, 9, int1), 2175, script1145(18, 11, int1), 2175, 0);
            SPLINE_ADDPOINT(0, 2, script1145(31, 9, int1), 2275, script1145(31, 9, int1), 2450, 0);
            SPLINE_ADDPOINT(0, 3, script1145(39, 20, int1), 1950, script1145(39, 20, int1), 1950, 0);
            SPLINE_ADDPOINT(0, 4, script1145(40, 34, int1), 1550, script1145(40, 34, int1), 1550, 0);
            SPLINE_ADDPOINT(0, 5, script1145(31, 40, int1), 1125, script1145(31, 40, int1), 1125, 0);
            SPLINE_ADDPOINT(0, 6, script1145(24, 38, int1), 900, script1145(24, 38, int1), 900, 0);
            SPLINE_ADDPOINT(1, 0, script1145(25, 30, int1), 600, script1145(25, 30, int1), 600, 0);
            SPLINE_ADDPOINT(1, 1, script1145(25, 23, int1), 1150, script1145(25, 23, int1), 1150, 0);
            SPLINE_ADDPOINT(1, 2, script1145(25, 23, int1), 1150, script1145(25, 23, int1), 1150, 0);
            SPLINE_ADDPOINT(1, 3, script1145(25, 23, int1), 950, script1145(25, 23, int1), 950, 0);
            SPLINE_ADDPOINT(1, 4, script1145(25, 23, int1), 950, script1145(25, 23, int1), 950, 0);
            SPLINE_ADDPOINT(1, 5, script1145(25, 23, int1), 850, script1145(25, 23, int1), 850, 0);
            SPLINE_ADDPOINT(1, 6, script1145(26, 23, int1), 725, script1145(26, 23, int1), 725, 0);
            CAM_MOVEALONG(0, 0, 800, 400, 1, 0);
            break;
        }
        case 4: {
            if ((SPLINE_LENGTH(0) == 7)) {
                CAM_MOVEALONG(0, 1, 400, 400, 1, 1);
            } else {
                CAM_SMOOTHRESET();
            };
            break;
        }
        case 5: {
            if ((SPLINE_LENGTH(0) == 7)) {
                CAM_MOVEALONG(0, 2, 400, 400, 1, 2);
            } else {
                CAM_SMOOTHRESET();
            };
            break;
        }
        case 6: {
            if ((SPLINE_LENGTH(0) == 7)) {
                CAM_MOVEALONG(0, 3, 400, 400, 1, 3);
            } else {
                CAM_SMOOTHRESET();
            };
            break;
        }
        case 7: {
            if ((SPLINE_LENGTH(0) == 7)) {
                CAM_MOVEALONG(0, 4, 400, 600, 1, 4);
                IF_SETONCAMFINISHED(callback(script1144, int0), int0);
            } else {
                CAM_SMOOTHRESET();
            };
            break;
        }
        case 8: {
            script2768(50, int0);
            SOUND_SYNTH(35224, 1, 0);
            break;
        }
        default: {
            CC_DELETEALL(int0);
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}