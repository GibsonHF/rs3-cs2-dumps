//
function script13042(int0: int, int1: unknown_int): unknown_int {
    var int2 = 0;
    switch (int0) {
        case 20: {
            if ((int1 == 1)) {
                int2 = 20;
            } else {
                script471(int0, int1);
                return 1;
            };
            break;
        }
        case 15: {
            int2 = 5;
            break;
        }
        case 21: {
            if ((int1 == 1)) {
                script471(int0, int1);
                return 1;
            };
            int2 = 5;
            break;
        }
        case 22: {
            int2 = 5;
            break;
        }
        case 1: {
            if ((int1 == 1)) {
                script471(int0, int1);
                return 1;
            };
            int2 = 2;
            break;
        }
        case 24: {
            int2 = 2;
            break;
        }
        case 19: {
            int2 = 1;
            break;
        }
        case 29: {
            if ((int1 == 1)) {
                int2 = 10;
            } else {
                script471(int0, int1);
                return 1;
            };
            break;
        }
        case 3: {
            if ((int1 == 1)) {
                int2 = 10;
            };
            break;
        }
        default: {
            script471(int0, int1);
            return 1;
        }
    };
    if (((int2 > 0) && ((RANDOM(100) < int2) || (script13048() == 1)))) {
        script471(int0, int1);
        return 1;
    };
    return 0;
}