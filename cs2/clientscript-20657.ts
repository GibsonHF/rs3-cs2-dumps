//
function script20657(int0: int, int1: int, int2: int): void {
    switch (MODULO(MIN(int0, 5), 5)) {
        case 1: {
            CC_SETPOSITION(0, (int1 + (35 * (int2 / 5))), 1, 0);
            break;
        }
        case 2: {
            switch (MODULO(int2, 5)) {
                case 0: {
                    CC_SETPOSITION(((0 - 36) / 2), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION((36 / 2), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (MODULO(int2, 5)) {
                case 0: {
                    CC_SETPOSITION((0 - 36), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION(0, (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION(36, (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (MODULO(int2, 5)) {
                case 0: {
                    CC_SETPOSITION(SCALE((0 - 36), 2, 3), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION(((0 - 36) / 2), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION((36 / 2), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 3: {
                    CC_SETPOSITION(SCALE(36, 2, 3), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
            };
            break;
        }
        case 0: {
            switch (MODULO(int2, 5)) {
                case 0: {
                    CC_SETPOSITION(((0 - 36) * 2), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION((0 - 36), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION(0, (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 3: {
                    CC_SETPOSITION(36, (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
                case 4: {
                    CC_SETPOSITION((36 * 2), (int1 + (35 * (int2 / 5))), 1, 0);
                    break;
                }
            };
            break;
        }
    };
    return;
}