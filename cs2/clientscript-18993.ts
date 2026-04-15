//
function script18993(int0: int): unknown_int {
    if ((script5875(int0) > 0)) {
        return 2;
    };
    var int1 = varplayer_7940;
    if ((int0 > 31)) {
        int1 = varplayer_7941;
        var int0 = (int0 - 32);
    };
    if ((TESTBIT(int1, int0) == 1)) {
        return 1;
    };
    return 0;
}