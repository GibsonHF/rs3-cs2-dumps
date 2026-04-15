//
function script3574(): int {
    var int0 = 0;
    int0 = varbitplayer_45335;
    if ((int0 == 0)) {
        return 0;
    };
    if ((DATE_MINUTES() >= (2880 + int0))) {
        return 5;
    };
    if ((DATE_MINUTES() >= (SCALE(3, 4, 2880) + int0))) {
        return 4;
    };
    if ((DATE_MINUTES() >= (SCALE(2, 4, 2880) + int0))) {
        return 3;
    };
    if ((DATE_MINUTES() >= (SCALE(1, 4, 2880) + int0))) {
        return 2;
    };
    return 1;
}