//
function script6188(int0: unknown_int, int1: int): unknown_int {
    var int2 = 0;
    if ((int0 == 1)) {
        int2 = varbitplayer_1906;
    } else if ((int0 == 3)) {
        int2 = varbitplayer_1907;
    } else {
        int2 = varbitplayer_1908;
    };
    if ((TESTBIT(int2, int1) == 1)) {
        return 1;
    };
    return 0;
}