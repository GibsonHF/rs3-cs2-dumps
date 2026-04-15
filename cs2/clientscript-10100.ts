//
function script10100(int0: unknown_int, int1: component, int2: int, int3: int): void {
    var int4 = IF_GETX(int1);
    var int5 = IF_GETY(int1);
    var int6 = 1;
    if ((int1 == comp(1515, 11))) {
        int6 = 2;
    };
    switch (int0) {
        case 0: {
            if ((int4 > -30)) {
                int4 = (int4 - int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));
            };
            break;
        }
        case 1: {
            if ((int4 < int2)) {
                int4 = (int4 + int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));
            };
            break;
        }
        case 2: {
            if ((int5 > -30)) {
                int5 = (int5 - int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));
            };
            break;
        }
        case 3: {
            if ((int5 < int3)) {
                int5 = (int5 + int6);
            } else {
                IF_SETONTIMER(callback(), comp(1515, 15));
            };
            break;
        }
    };
    IF_SETPOSITION(int4, int5, 0, 0, int1);
    return;
}