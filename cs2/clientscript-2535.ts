//
function script2535(int0: obj, int1: obj): unknown_int {
    if ((OC_UNCERT(int1) != -1 as obj)) {
        var int1 = OC_UNCERT(int1);
    };
    if ((((item_getparam(int0, 2640) == 14) && (item_getparam(int1, 770) == 13 as stat)) && (item_getparam(int1, 771) <= script20007(int0)))) {
        return 1;
    };
    return 0;
}