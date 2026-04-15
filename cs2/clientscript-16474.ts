//
function script16474(int0: int): boolean {
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
            if ((KEYHELD_CTRL() == true)) {
                return false;
            };
            if ((KEYHELD_ALT() == true)) {
                return false;
            };
            if ((KEYHELD_SHIFT() == true)) {
                return false;
            };
            break;
        }
    };
    return true;
}