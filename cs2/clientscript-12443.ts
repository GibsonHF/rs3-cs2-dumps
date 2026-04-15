//
function script12443(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    switch (int0) {
        case 1: {
            int1 = varclient_4667;
            break;
        }
        case 2: {
            int2 = (varclient_4667 * -1);
            break;
        }
        case 3: {
            int1 = (varclient_4667 * -1);
            break;
        }
        case 4: {
            int2 = varclient_4667;
            break;
        }
        case 5: {
            int3 = varclient_4667;
            break;
        }
        case 6: {
            int3 = (varclient_4667 * -1);
            break;
        }
        case 7: {
            int5 = (2 * varclient_4668);
            break;
        }
        case 8: {
            int5 = (2 * (varclient_4668 * -1));
            break;
        }
        case 9: {
            int4 = (2 * (varclient_4668 * -1));
            break;
        }
        case 10: {
            int4 = (2 * varclient_4668);
            break;
        }
        default: {
            return;
        }
    };
    if ((varclient_4718 != 1)) {
        if ((varclient_4718 == 0)) {
            if ((int1 != 0)) {
                CAM2_SETLOOKATORIENTATION_ZMOVEMENT(int1);
            };
            if ((int2 != 0)) {
                CAM2_SETLOOKATORIENTATION_XMOVEMENT(int2);
            };
            if ((int3 != 0)) {
                CAM2_GETPOSITIONPOINT_POINT();
                MOVECOORD_FINE(stack(), 0, 0, int3, 0);
                CAM2_SETPOSITIONPOINT_POINT(stack());
            };
        };
        if ((int4 != 0)) {
            CAM2_SETLOOKATORIENTATION_XROTATION(int4);
        };
        if ((int5 != 0)) {
            CAM2_SETLOOKATORIENTATION_YROTATION(int5);
        };
    };
    return;
}