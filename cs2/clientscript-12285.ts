//
function script12285(int0: number, int1: number): number {
    switch (int0) {
        case 3: {
            if ((int1 == 1)) {
                return 31;
            };
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                return 32;
            };
            break;
        }
        case 1: {
            if (((int1 != 31) && (int1 != 32))) {
                return int1;
            };
            break;
        }
    };
    return -1;
}