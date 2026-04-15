//
function script20261(int0: int): int {
    if ((varbitplayer_58404 == 0)) {
        return -1;
    };
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_58404 != 63)) {
        int2 = varbitplayer_58404;
    };
    while ((int1 <= int2)) {
        if ((script20142(int1) == true)) {
            return int1;
        };
        int1 = (int1 + 1);
    };
    return MIN(int1, (int0 - 1));
}