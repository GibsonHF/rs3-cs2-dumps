//
function script7116(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 1;
    };
    if (((OC_MEMBERS(int0) == 1) || (item_getparam(int0, 2639) == true))) {
        return 1;
    };
    var int1 = item_getparam(int0, 2650);
    var int2 = 1;
    while ((int2 <= 3)) {
        if (((int1 != -1 as obj) && (OC_MEMBERS(int1) == 1))) {
            return 1;
        };
        switch (++int2) {
            case 2: {
                int1 = item_getparam(int0, 2651);
                break;
            }
            case 3: {
                int1 = item_getparam(int0, 2652);
                break;
            }
            default: {
                int1 = -1 as obj;
                break;
            }
        };
    };
    int1 = item_getparam(int0, 2655);
    while ((int2 <= 10)) {
        if (((int1 != -1 as obj) && (OC_MEMBERS(int1) == 1))) {
            return 1;
        };
        switch (++int2) {
            case 2: {
                int1 = item_getparam(int0, 2656);
                break;
            }
            case 3: {
                int1 = item_getparam(int0, 2657);
                break;
            }
            case 4: {
                int1 = item_getparam(int0, 2658);
                break;
            }
            case 5: {
                int1 = item_getparam(int0, 2659);
                break;
            }
            case 6: {
                int1 = item_getparam(int0, 2660);
                break;
            }
            case 7: {
                int1 = item_getparam(int0, 2661);
                break;
            }
            case 8: {
                int1 = item_getparam(int0, 2662);
                break;
            }
            case 9: {
                int1 = item_getparam(int0, 2663);
                break;
            }
            case 10: {
                int1 = item_getparam(int0, 2664);
                break;
            }
            default: {
                int1 = -1 as obj;
                break;
            }
        };
    };
    return 0;
}