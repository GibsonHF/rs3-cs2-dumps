//
function script16846(): number {
    var int0 = STAT_BASE(0);
    var int1 = STAT_BASE(4);
    var int2 = STAT_BASE(6);
    if ((int0 >= int1)) {
        if ((int0 >= int2)) {
            return 53760;
        };
        if ((int2 >= int1)) {
            return 53756;
        };
        return 53764;
    };
    if ((int1 >= int2)) {
        return 53764;
    };
    return 53756;
}