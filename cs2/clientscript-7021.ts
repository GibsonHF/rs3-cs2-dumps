//
function script7021(int0: stat, int1: int): string {
    if ((((int0 != -1 as stat) && (int1 > 0)) && (STAT_BASE(int0) < int1))) {
        return "<col=FF0000>";
    };
    return "<col=FFFFFF>";
}