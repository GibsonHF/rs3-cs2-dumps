//
function script13808(int0: stat): int {
    var int1 = STAT_BASE(int0);
    if (((MAP_MEMBERS() == 1) && (int1 >= 70))) {
        return 2;
    };
    if ((int1 >= 40)) {
        return 1;
    };
    return 0;
}