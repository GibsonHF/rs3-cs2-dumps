//
function script8979(int0: int): component {
    if ((int0 == 1)) {
        if ((TESTBIT(varplayer_3643, 10) == 1)) {
            return comp(1496, 137);
        };
        if ((TESTBIT(varplayer_3643, 11) == 1)) {
            return comp(1496, 121);
        };
        if ((TESTBIT(varplayer_3643, 12) == 1)) {
            return comp(1496, 116);
        };
        return comp(-1, 65535);
    };
    if ((int0 == 2)) {
        if ((TESTBIT(varplayer_3643, 11) == 1)) {
            return comp(1496, 121);
        };
        if ((TESTBIT(varplayer_3643, 12) == 1)) {
            return comp(1496, 116);
        };
        return comp(-1, 65535);
    };
    if ((int0 == 3)) {
        if ((TESTBIT(varplayer_3643, 12) == 1)) {
            return comp(1496, 116);
        };
        return comp(-1, 65535);
    };
    return comp(-1, 65535);
}