//
function script8437(int0: int, int1: int): cs2enum {
    var int2 = -1 as cs2enum;
    switch (int0) {
        case 1: {
            int2 = 10147 as cs2enum;
            break;
        }
        case 2: {
            int2 = 6738 as cs2enum;
            break;
        }
        case 3:
        case 8:
        case 9:
        case 10:
        case 11: {
            int2 = 6740 as cs2enum;
            break;
        }
        case 4:
        case 14:
        case 15: {
            int2 = 16973 as cs2enum;
            break;
        }
        case 5: {
            switch (int1) {
                case 0: {
                    int2 = 6736 as cs2enum;
                    break;
                }
                case 1: {
                    int2 = 6737 as cs2enum;
                    break;
                }
            };
            break;
        }
        case 12: {
            int2 = 6736 as cs2enum;
            break;
        }
        case 13: {
            int2 = 6737 as cs2enum;
            break;
        }
    };
    return int2;
}