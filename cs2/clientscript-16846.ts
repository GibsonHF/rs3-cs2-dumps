//
function script16846(): obj {
    var int0 = STAT_BASE(0 as stat);
    var int1 = STAT_BASE(4 as stat);
    var int2 = STAT_BASE(6 as stat);
    if ((int0 >= int1)) {
        if ((int0 >= int2)) {
            return 53760 as obj;
        };
        if ((int2 >= int1)) {
            return 53756 as obj;
        };
        return 53764 as obj;
    };
    if ((int1 >= int2)) {
        return 53764 as obj;
    };
    return 53756 as obj;
}