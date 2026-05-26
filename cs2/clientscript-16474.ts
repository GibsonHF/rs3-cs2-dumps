//
function script16474(int0: number): number {
    switch (int0) {
        case 1: {
            return KEYHELD_CTRL();
        }
        case 2: {
            return KEYHELD_ALT();
        }
        case 4: {
            return KEYHELD_SHIFT();
        }
        case 8: {
            if ((KEYHELD_CTRL() == 1)) {
                return 0;
            };
            if ((KEYHELD_ALT() == 1)) {
                return 0;
            };
            if ((KEYHELD_SHIFT() == 1)) {
                return 0;
            };
            break;
        }
    };
    return 1;
}