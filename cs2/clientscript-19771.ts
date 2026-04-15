//
function script19771(int0: int, int1: unknown_int): unknown_int {
    switch (int0) {
        case 0: {
            if ((int1 > 3)) {
                return 1;
            };
            break;
        }
        case 1: {
            if (((int1 < 4) || (int1 > 6))) {
                return 1;
            };
            break;
        }
        case 2: {
            if (((int1 < 7) || (int1 > 9))) {
                return 1;
            };
            break;
        }
        case 3: {
            if ((int1 < 10)) {
                return 1;
            };
            break;
        }
    };
    if ((int1 != -1)) {
        return 2;
    };
    return 1;
}