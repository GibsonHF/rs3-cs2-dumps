//
function script8943(): int {
    if ((varbitplayer_60107 != 2)) {
        return 0;
    };
    var int0 = script8942();
    var int1 = 65;
    if ((varbitplayer_1668 < SCALE(script2915(), 100, 60))) {
        int1 = (int1 + 50);
    };
    int0 = SCALE(int0, 100, int1);
    return int0;
}