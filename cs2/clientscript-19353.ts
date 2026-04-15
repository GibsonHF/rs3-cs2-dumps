//
function script19353(): int {
    if ((varbitplayer_56792 == 1)) {
        return 200;
    };
    var int0 = 0;
    if ((ACHIEVEMENT_REQSTATE(3534 as achievement) == -2)) {
        int0 = (int0 + 30);
    };
    if ((ACHIEVEMENT_REQSTATE(3538 as achievement) == -2)) {
        int0 = (int0 + 20);
    };
    if ((ACHIEVEMENT_REQSTATE(3557 as achievement) == -2)) {
        int0 = (int0 + 20);
    };
    if ((ACHIEVEMENT_REQSTATE(3584 as achievement) == -2)) {
        int0 = (int0 + 20);
    };
    if ((ACHIEVEMENT_REQSTATE(3597 as achievement) == -2)) {
        int0 = (int0 + 10);
    };
    return int0;
}