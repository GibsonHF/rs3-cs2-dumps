//
function script12895(int0: int): int {
    var int1 = 0;
    if ((int0 == 1)) {
        int1 = varbitplayer_33893;
    } else if ((int0 == 2)) {
        int1 = varbitplayer_33896;
    } else {
        script12478(`Tuai Leit Berry Planter Code: elr1_berry_get_state called with unhandled patch ID ${inttostring(int0, 10)}`);
        return -1;
    };
    if ((int1 == 0)) {
        return 0;
    };
    if ((DATE_MINUTES() >= (2520 + int1))) {
        return 4;
    };
    if ((DATE_MINUTES() >= (SCALE(3, 4, 2520) + int1))) {
        return 3;
    };
    if ((DATE_MINUTES() >= (SCALE(1, 4, 2520) + int1))) {
        return 2;
    };
    return 1;
}