//
function script12450(int0: unknown_int, int1: int): void {
    if ((script7942() == 0)) {
        script12447();
    };
    var int2 = MAX(1, (varclient_4667 / 12));
    var int3 = MAX(1, (varclient_4668 / 2));
    var int4 = 1000;
    var int5 = 3000;
    switch (int0) {
        case 0: {
            var int1 = ((int1 / int4) * int2);
            if ((int1 != 0)) {
                CAM2_SETLOOKATORIENTATION_XMOVEMENT(int1);
            };
            break;
        }
        case 1: {
            int1 = ((int1 / int4) * int2);
            if ((int1 != 0)) {
                CAM2_SETLOOKATORIENTATION_ZMOVEMENT(int1);
            };
            break;
        }
        case 2: {
            int1 = (((int1 / int5) * -1) * int3);
            if ((int1 != 0)) {
                CAM2_SETLOOKATORIENTATION_YROTATION(int1);
            };
            break;
        }
        case 3: {
            int1 = (((int1 / int5) * -1) * int3);
            if ((int1 != 0)) {
                CAM2_SETLOOKATORIENTATION_XROTATION(int1);
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}