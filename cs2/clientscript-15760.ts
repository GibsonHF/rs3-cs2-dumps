//
function script15760(int0: number): number {
    switch (PLATFORMTYPE()) {
        case 0:
        case 5: {
            if ((dbrow_getfield(int0, 815200, 0) == 1)) {
                return 1;
            };
            break;
        }
        case 3:
        case 2: {
            if ((dbrow_getfield(int0, 815232, 0) == 1)) {
                return 1;
            };
            break;
        }
        case 1: {
            if ((dbrow_getfield(int0, 815216, 0) == 1)) {
                return 1;
            };
            break;
        }
        default: {
            return 1;
        }
    };
    return 0;
}