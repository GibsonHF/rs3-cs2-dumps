//
function script13953(): number {
    var int0 = STAT_BASE(1);
    if ((int0 >= 60)) {
        return 4;
    };
    if ((int0 >= 50)) {
        return 3;
    };
    if ((int0 >= 40)) {
        return 2;
    };
    if ((int0 >= 20)) {
        return 1;
    };
    return 0;
}