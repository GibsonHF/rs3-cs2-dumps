//
function script13825(int0: obj, int1: int): int {
    var int2 = 0;
    switch (int1) {
        case 3:
        case 10: {
            int2 = item_getparam(int0, 965);
            break;
        }
        case 2:
        case 4: {
            int2 = item_getparam(int0, 643);
            break;
        }
        case 1: {
            int2 = item_getparam(int0, 641);
            break;
        }
        case 11: {
            int2 = item_getparam(int0, 8881);
            break;
        }
        default: {
            return 0;
        }
    };
    if ((OC_WEARPOS(int0) == 5)) {
        return (int2 / 2);
    };
    return int2;
}