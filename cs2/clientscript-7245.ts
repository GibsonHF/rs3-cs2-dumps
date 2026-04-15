//
function script7245(int0: obj, int1: int): int {
    if ((item_getparam(int0, 4596) > 0)) {
        return item_getparam(int0, 4596);
    };
    var int2 = -1 as stat;
    switch (int1) {
        case 3:
        case 10: {
            int2 = 6 as stat;
            break;
        }
        case 2:
        case 4: {
            int2 = 4 as stat;
            break;
        }
        case 1: {
            if ((item_getparam(int0, 749) == 2 as stat)) {
                int2 = 2 as stat;
            } else {
                int2 = 0 as stat;
            };
            break;
        }
        case 11:
        case 13: {
            int2 = 28 as stat;
            break;
        }
        case 9:
        case 8:
        case 5:
        case 6:
        case 7:
        case 12: {
            int2 = 1 as stat;
            break;
        }
        default: {
            return 0;
        }
    };
    var int3 = 0;
    if ((item_getparam(int0, 749) == int2)) {
        int3 = item_getparam(int0, 750);
    } else if ((item_getparam(int0, 751) == int2)) {
        int3 = item_getparam(int0, 752);
    } else if ((item_getparam(int0, 753) == int2)) {
        int3 = item_getparam(int0, 754);
    } else if ((item_getparam(int0, 755) == int2)) {
        int3 = item_getparam(int0, 756);
    } else if ((item_getparam(int0, 757) == int2)) {
        int3 = item_getparam(int0, 758);
    } else if ((item_getparam(int0, 759) == int2)) {
        int3 = item_getparam(int0, 760);
    };
    return int3;
}