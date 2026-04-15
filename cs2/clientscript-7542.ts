//
function script7542(int0: int): unknown_int {
    if (((DATE_RUNEDAY() - 7251) < int0)) {
        return 0;
    };
    switch (int0) {
        case 0: {
            if ((script16373(0) == 1)) {
                return 2;
            };
            break;
        }
        case 1: {
            if ((script16373(1) == 1)) {
                return 2;
            };
            break;
        }
        case 2: {
            if ((script16373(2) == 1)) {
                return 2;
            };
            break;
        }
        case 3: {
            if ((script16373(3) == 1)) {
                return 2;
            };
            break;
        }
        case 4: {
            if ((script16373(4) == 1)) {
                return 2;
            };
            break;
        }
        case 5: {
            if ((script16373(5) == 1)) {
                return 2;
            };
            break;
        }
        case 6: {
            if ((script16373(6) == 1)) {
                return 2;
            };
            break;
        }
        case 7: {
            if ((script16373(7) == 1)) {
                return 2;
            };
            break;
        }
        case 8: {
            if ((script16373(8) == 1)) {
                return 2;
            };
            break;
        }
        case 9: {
            if ((script16373(9) == 1)) {
                return 2;
            };
            break;
        }
        case 10: {
            if ((script16373(10) == 1)) {
                return 2;
            };
            break;
        }
        case 11: {
            if ((script16373(11) == 1)) {
                return 2;
            };
            break;
        }
        case 12: {
            if ((script16373(12) == 1)) {
                return 2;
            };
            break;
        }
        case 13: {
            if ((script16373(13) == 1)) {
                return 2;
            };
            break;
        }
        default: {
            script12478(`Invalid task, id ${inttostring(int0, 10)}`);
            return 0;
        }
    };
    if ((DATE_RUNEDAY() > 7265)) {
        return 0;
    };
    return 1;
}