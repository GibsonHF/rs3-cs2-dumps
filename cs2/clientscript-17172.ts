//
function script17172(int0: obj, int1: int): int {
    switch (int1) {
        case 7:
        case 6:
        case 5:
        case 12: {
            if ((((((((OC_WEARPOS(int0) == 0) || (OC_WEARPOS(int0) == 4)) || (OC_WEARPOS(int0) == 7)) || (OC_WEARPOS(int0) == 9)) || (OC_WEARPOS(int0) == 10)) && (item_getparam(int0, 2870) > 0)) && (item_getparam(int0, 2832) == 0))) {
                if (((((item_getparam(int0, 641) > 0) || (item_getparam(int0, 643) > 0)) || (item_getparam(int0, 965) > 0)) || (item_getparam(int0, 8881) > 0))) {
                    return 2;
                };
                return 1;
            };
            break;
        }
    };
    return 0;
}