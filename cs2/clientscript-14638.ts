//
function script14638(int0: dbrow): int {
    var int1 = dbrow_getfield(int0, 368704, 0);
    if ((int1 == -1)) {
        int1 = STAT_BASE(27 as stat);
    };
    return MAX(40, int1);
}