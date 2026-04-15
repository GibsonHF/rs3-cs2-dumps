//
function script17465(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if ((((((OC_WEARPOS(int0) != 0) && (OC_WEARPOS(int0) != 4)) && (OC_WEARPOS(int0) != 7)) && (OC_WEARPOS(int0) != 9)) && (OC_WEARPOS(int0) != 10))) {
        return 0;
    };
    if ((item_getparam(int0, 2870) == 0)) {
        return 0;
    };
    if ((item_getparam(int0, 4328) != 0)) {
        return 0;
    };
    if (((((item_getparam(int0, 641) > 0) || (item_getparam(int0, 965) > 0)) || (item_getparam(int0, 643) > 0)) || (item_getparam(int0, 8881) > 0))) {
        return 0;
    };
    if ((item_getparam(int0, 2824) == 1)) {
        return 0;
    };
    if ((item_getparam(int0, 5541) == 1)) {
        return 0;
    };
    return 1;
}