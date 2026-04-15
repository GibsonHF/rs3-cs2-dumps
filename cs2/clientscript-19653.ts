//
function script19653(int0: obj): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int1 = item_getparam(int0, 1326);
    if ((int1 > 0)) {
        return int1;
    };
    if ((script17465(int0) == 0)) {
        return 0;
    };
    var int2 = item_getparam(int0, 4596);
    if ((int2 == 0)) {
        int2 = item_getparam(int0, 750);
    };
    var int3 = 0;
    switch (OC_WEARPOS(int0)) {
        case 0: {
            int3 = 10;
            break;
        }
        case 4: {
            int3 = 15;
            break;
        }
        case 7: {
            int3 = 15;
            break;
        }
        case 9: {
            int3 = 5;
            break;
        }
        case 10: {
            int3 = 5;
            break;
        }
        default: {
            return 0;
        }
    };
    int1 = (int2 * int3);
    return int1;
}