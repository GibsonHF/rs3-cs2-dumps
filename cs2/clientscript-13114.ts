//
function script13114(): int {
    var int0 = 0;
    var int1 = 0;
    while ((int0 < 24)) {
        if (((enum_getvalue(0, 1, 8887 as cs2enum, int0) == false) && (TESTBIT(varplayer_5667, int0) == 1))) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return int1;
}