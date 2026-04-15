//
function script7229(int0: int, int1: int, int2: int, int3: int): void {
    var int0 = MIN(int0, 6);
    switch (MODULO(MIN(int1, int0), 6)) {
        case 1: {
            CC_SETPOSITION(0, (int2 + (35 * (int3 / int0))), 1, 0);
            break;
        }
        case 2: {
            switch (MODULO(int3, int0)) {
                case 0: {
                    CC_SETPOSITION(((0 - 36) / 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION((36 / 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (MODULO(int3, int0)) {
                case 0: {
                    CC_SETPOSITION((0 - 36), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION(0, (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION(36, (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
            };
            break;
        }
        case 4: {
            switch (MODULO(int3, int0)) {
                case 0: {
                    CC_SETPOSITION(SCALE((0 - 36), 2, 3), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION(((0 - 36) / 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION((36 / 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 3: {
                    CC_SETPOSITION(SCALE(36, 2, 3), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
            };
            break;
        }
        case 5: {
            switch (MODULO(int3, int0)) {
                case 0: {
                    CC_SETPOSITION(((0 - 36) * 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION((0 - 36), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION(0, (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 3: {
                    CC_SETPOSITION(36, (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 4: {
                    CC_SETPOSITION((36 * 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
            };
            break;
        }
        default: {
            switch (MODULO(int3, int0)) {
                case 0: {
                    CC_SETPOSITION(SCALE((0 - 36), 2, 5), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 1: {
                    CC_SETPOSITION(SCALE((0 - 36), 2, 3), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 2: {
                    CC_SETPOSITION(((0 - 36) / 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 3: {
                    CC_SETPOSITION((36 / 2), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 4: {
                    CC_SETPOSITION(SCALE(36, 2, 3), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
                case 5: {
                    CC_SETPOSITION(SCALE(36, 2, 5), (int2 + (35 * (int3 / int0))), 1, 0);
                    break;
                }
            };
            break;
        }
    };
    return;
}