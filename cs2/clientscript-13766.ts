//
function script13766(int0: number, int1: number): void {
    var int2 = ((36 * varbitplayer_38639) - 2);
    var int3 = 2;
    IF_SETHIDE(1, 93716730);
    IF_SETHIDE(1, 93716731);
    if ((int1 == 0)) {
        if ((varbitplayer_27169 == 1)) {
            int2 = (((36 + 1) * varbitplayer_38639) - 2);
        } else if ((int0 == 1)) {
            int2 = (((36 - 1) * varbitplayer_38639) - 2);
        };
        IF_SETPOSITION(0, 0, 0, 0, 93716727);
        IF_SETSIZE(int3, 36, 0, 0, 93716727);
        IF_SETPOSITION(int2, 0, 0, 0, 93716729);
        IF_SETSIZE(int3, 36, 0, 0, 93716729);
        IF_SETPOSITION(0, 0, 0, 0, 93716732);
        IF_SETSIZE(int2, int3, 0, 0, 93716732);
        IF_SETPOSITION(0, (36 - 2), 0, 0, 93716728);
        IF_SETSIZE(int2, int3, 0, 0, 93716728);
    } else if ((int1 == 1)) {
        if ((int0 == 1)) {
            int2 = (((36 - 1) * varbitplayer_38639) - 2);
        };
        IF_SETPOSITION(0, 0, 0, 0, 93716727);
        IF_SETSIZE(int3, int2, 0, 0, 93716727);
        IF_SETPOSITION((36 - 2), 0, 0, 0, 93716729);
        IF_SETSIZE(int3, int2, 0, 0, 93716729);
        IF_SETPOSITION(0, 0, 0, 0, 93716732);
        IF_SETSIZE(36, int3, 0, 0, 93716732);
        IF_SETPOSITION(0, int2, 0, 0, 93716728);
        IF_SETSIZE(36, int3, 0, 0, 93716728);
    };
    return;
}