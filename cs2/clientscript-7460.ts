//
function script7460(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if (((OC_WEARPOS(int0) > 0) && (OC_WEARPOS2(int0) > 0))) {
        return 2;
    };
    if (((item_getparam(int0, 2826) == 1) && (INV_TOTALPARAM(94 as inv, 2826) == 2))) {
        return 1;
    };
    if (((item_getparam(int0, 2825) == 1) && (INV_TOTALPARAM(94 as inv, 2825) == 2))) {
        return 1;
    };
    if (((item_getparam(int0, 2827) == 1) && (INV_TOTALPARAM(94 as inv, 2827) == 2))) {
        return 1;
    };
    if (((item_getparam(int0, 8898) == 1) && (INV_TOTALPARAM(94 as inv, 8898) == 2))) {
        return 1;
    };
    return 3;
}