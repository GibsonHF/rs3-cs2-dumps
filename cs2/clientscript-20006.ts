//
function script20006(int0: obj): int {
    var int1 = 5;
    if ((OC_CATEGORY(int0) == 5571 as category)) {
        int1 = 3;
    };
    if (((item_getparam(int0, 2645) >= 100) || (item_getparam(int0, 2645) >= 100))) {
        if ((STAT_BASE(12 as stat) >= struct_getparam(52876, 2212))) {
            int1 = (int1 + 2);
        } else if ((STAT_BASE(12 as stat) >= struct_getparam(52875, 2212))) {
            int1 = (int1 + 1);
        };
    };
    return int1;
}