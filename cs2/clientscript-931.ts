//
function script931(int0: obj): unknown_int {
    var int1 = item_getparam(int0, 770);
    if ((int1 == -1 as stat)) {
        return 1;
    };
    if ((STAT_BASE(int1) < item_getparam(int0, 771))) {
        return 0;
    };
    int1 = item_getparam(int0, 772);
    if ((int1 == -1 as stat)) {
        return 1;
    };
    if ((STAT_BASE(int1) < item_getparam(int0, 773))) {
        return 0;
    };
    int1 = item_getparam(int0, 774);
    if ((int1 == -1 as stat)) {
        return 1;
    };
    if ((STAT_BASE(int1) < item_getparam(int0, 775))) {
        return 0;
    };
    int1 = item_getparam(int0, 776);
    if ((int1 == -1 as stat)) {
        return 1;
    };
    if ((STAT_BASE(int1) < item_getparam(int0, 777))) {
        return 0;
    };
    int1 = item_getparam(int0, 778);
    if ((int1 == -1 as stat)) {
        return 1;
    };
    if ((STAT_BASE(int1) < item_getparam(int0, 779))) {
        return 0;
    };
    int1 = item_getparam(int0, 780);
    if ((int1 == -1 as stat)) {
        return 1;
    };
    if ((STAT_BASE(int1) < item_getparam(int0, 781))) {
        return 0;
    };
    return 1;
}