//
function script7103(int0: unknown_int, int1: unknown_int): int {
    switch (int0) {
        case 0: {
            switch (int1) {
                case 1: {
                    return 1;
                }
                case 2: {
                    return 2;
                }
                case 3: {
                    return 4;
                }
                case 4: {
                    return 8;
                }
            };
            break;
        }
        case 1: {
            switch (int1) {
                case 0: {
                    return 2;
                }
                case 1: {
                    return 3;
                }
                case 2: {
                    return 4;
                }
                case 3: {
                    return 8;
                }
            };
            break;
        }
        case 2: {
            switch (int1) {
                case 0: {
                    return 1;
                }
                case 1: {
                    return 2;
                }
                case 2: {
                    return 4;
                }
                case 3: {
                    return 8;
                }
                case 4: {
                    return 16;
                }
            };
            break;
        }
        default: {
            switch (int1) {
                case 0: {
                    return 2;
                }
                case 1: {
                    return 3;
                }
                case 2: {
                    return 4;
                }
                case 3: {
                    return 8;
                }
            };
            break;
        }
    };
    return 0;
}