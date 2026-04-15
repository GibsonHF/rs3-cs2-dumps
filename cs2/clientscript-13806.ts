//
function script13806(int0: stat): int {
    var int1 = STAT_BASE(int0);
    if ((int1 >= 60)) {
        return 3;
    };
    if ((int1 >= 40)) {
        return 2;
    };
    if ((int1 >= 20)) {
        return 1;
    };
    return 0;
}