//
function script18161(int0: unknown_int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((int0 == 1)) {
        int1 = TESTBIT(varplayer_3238, 1);
        int2 = TESTBIT(varplayer_3238, 7);
        int3 = TESTBIT(varplayer_3238, 24);
    } else {
        int1 = TESTBIT(varplayer_3237, 1);
        int2 = TESTBIT(varplayer_3237, 7);
        int3 = TESTBIT(varplayer_3237, 24);
    };
    if ((((int1 + int2) + int3) == 3)) {
        return 1;
    };
    return 0;
}