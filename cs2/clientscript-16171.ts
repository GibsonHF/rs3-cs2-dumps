//
function script16171(int0: int, int1: int, int2: stat): unknown_int {
    if (((STAT_BASE(int2) >= int0) && (STAT_BASE(int2) <= int1))) {
        return 1;
    };
    return 0;
}