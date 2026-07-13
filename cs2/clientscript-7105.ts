//
function script7105(int0: number): number {
    if (((int0 == -1) || (int0 == 49384))) {
        return 0;
    };
    if (((MAP_MEMBERS() == 0) && (script7116(int0) == 1))) {
        return 0;
    };
    var int1 = item_getparam(int0, 2640);
    var int2 = item_getparam(int0, 2645);
    var int3 = 1;
    var int4 = item_getparam(int0, 317);
    if ((item_getparam(int0, 7801) > 0)) {
        int4 = 1;
    };
    while ((int1 > 0)) {
        if ((script7106(int0, int1, int2, int4, item_getparam(int0, 3649), int3) == 0)) {
            return 0;
        };
        switch (++int3) {
            case 2: {
                int1 = item_getparam(int0, 2641);
                int2 = item_getparam(int0, 2646);
                break;
            }
            case 3: {
                int1 = item_getparam(int0, 2642);
                int2 = item_getparam(int0, 2647);
                break;
            }
            case 4: {
                int1 = item_getparam(int0, 2643);
                int2 = item_getparam(int0, 2648);
                break;
            }
            case 5: {
                int1 = item_getparam(int0, 2644);
                int2 = item_getparam(int0, 2649);
                break;
            }
            default: {
                int1 = 0;
                break;
            }
        };
    };
    return 1;
}