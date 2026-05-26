//
function script11118(int0: number, int1: number): number {
    switch (int0) {
        case 0: {
            if ((int1 <= -500)) {
                return 1;
            };
            break;
        }
        case 1: {
            if (((int1 > -500) && (int1 < 500))) {
                return 1;
            };
            break;
        }
        case 2: {
            if ((int1 >= 500)) {
                return 1;
            };
            break;
        }
        case -1: {
            return 1;
        }
    };
    return 0;
}