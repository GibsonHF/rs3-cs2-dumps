//
function script4253(): int {
    if ((BITCOUNT(varbitplayer_51563) == 0)) {
        return 1;
    };
    if ((BITCOUNT(varbitplayer_51563) == 6)) {
        return 6;
    };
    var int0 = 2;
    while ((int0 <= 6)) {
        if ((TESTBIT(varbitplayer_51563, (int0 - 2)) == 0)) {
            return (int0 - 1);
        };
        int0 = (int0 + 1);
    };
    return (int0 - 1);
}