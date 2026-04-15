//
function script7241(int0: obj): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if ((item_getparam(int0, 2824) != 0)) {
        if ((item_getparam(int0, 2869) > 0)) {
            return 9;
        };
        return 8;
    };
    if ((OC_WEARPOS(int0) == 13)) {
        if ((item_getparam(int0, 643) > 0)) {
            return 4;
        };
        if (((item_getparam(int0, 972) > 0) || (item_getparam(int0, 7596) > 0))) {
            return 10;
        };
        if ((OC_CATEGORY(int0) == 5368 as category)) {
            return 13;
        };
    } else if ((item_getparam(int0, 686) != -1 as struct)) {
        if ((item_getparam(int0, 2827) != 0)) {
            return 3;
        };
        if ((item_getparam(int0, 2826) != 0)) {
            return 2;
        };
        if ((item_getparam(int0, 2825) != 0)) {
            return 1;
        };
        if ((item_getparam(int0, 8898) != 0)) {
            return 11;
        };
    } else {
        if ((item_getparam(int0, 2823) != 0)) {
            return 7;
        };
        if ((item_getparam(int0, 2822) != 0)) {
            return 6;
        };
        if ((item_getparam(int0, 2821) != 0)) {
            return 5;
        };
        if ((item_getparam(int0, 8897) != 0)) {
            return 12;
        };
    };
    return 0;
}