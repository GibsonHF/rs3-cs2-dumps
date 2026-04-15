//
function script20700(): int {
    var int0 = 20;
    if ((varbitplayer_60830 > 0)) {
        int0 = (int0 + 3);
    };
    int0 = (int0 + (3 * (varbitplayer_60830 / 10)));
    int0 = MAX(20, MIN(int0, (20 + (3 * 10))));
    return int0;
}