//
function script20568(int0: stat): unknown_int {
    var int1 = script11151(int0);
    if ((STAT_VISIBLE_XP(int0) >= 200000000)) {
        return 3;
    };
    if ((script20569(int0) == 0)) {
        return 0;
    };
    if ((int1 >= 50000000)) {
        return 2;
    };
    return 1;
}