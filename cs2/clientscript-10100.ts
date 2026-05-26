//
function script10100(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GETX(int1);
    var int5 = IF_GETY(int1);
    var int6 = 1;
    if ((int1 == 99287051)) {
        int6 = 2;
    };
    switch (int0) {
        case 0: {
            if ((int4 > -30)) {
                int4 = (int4 - int6);
            } else {
                IF_SETONTIMER(callback(), 99287055);
            };
            break;
        }
        case 1: {
            if ((int4 < int2)) {
                int4 = (int4 + int6);
            } else {
                IF_SETONTIMER(callback(), 99287055);
            };
            break;
        }
        case 2: {
            if ((int5 > -30)) {
                int5 = (int5 - int6);
            } else {
                IF_SETONTIMER(callback(), 99287055);
            };
            break;
        }
        case 3: {
            if ((int5 < int3)) {
                int5 = (int5 + int6);
            } else {
                IF_SETONTIMER(callback(), 99287055);
            };
            break;
        }
    };
    IF_SETPOSITION(int4, int5, 0, 0, int1);
    return;
}