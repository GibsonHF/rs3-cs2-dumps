//
function script9662(): string {
    var int0 = 0;
    var int1 = enum_getvalue(0, 0, 716 as cs2enum, 35);
    if ((int1 == 0)) {
        return "0";
    };
    int0 = MAX(250, SCALE(enum_getvalue(0, 0, 716 as cs2enum, STAT_BASE(18 as stat)), int1, 10000));
    if ((int0 > 10000)) {
        int0 = 10000;
    };
    return inttostring(int0, 10);
}