//
function script6680(int0: stat): int {
    if ((varplayer_10966 == 1)) {
        return SCALE(STAT(int0), 100, 250);
    };
    return enum_getvalue(0, 0, 10146 as cs2enum, STAT(int0));
}