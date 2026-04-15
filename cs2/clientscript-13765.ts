//
function script13765(int0: int, int1: int): void {
    if ((varbitplayer_21682 == 0)) {
        IF_SETHIDE(true, comp(1430, 244));
        return;
    };
    IF_SETHIDE(false, comp(1430, 244));
    if ((int0 == 0)) {
        script13766(int0, int1);
    } else if ((int0 == 1)) {
        if ((varbitplayer_38639 <= (14 / 2))) {
            script13766(int0, int1);
        } else {
            script13767(int1);
        };
    };
    if ((script8292(2, -1) == 1)) {
        script13768();
    };
    return;
}