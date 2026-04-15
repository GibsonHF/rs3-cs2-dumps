//
function script8252(int0: obj): int {
    if ((varbitplayer_45522[1] == 1)) {
        return 0;
    };
    var int1 = item_getparam(int0, 396);
    if ((varbitplayer_44137[1] == 1)) {
        int1 = SCALE(int1, 100, (100 - 20));
    };
    return int1;
}