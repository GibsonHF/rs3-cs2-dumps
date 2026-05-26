//
function script13767(int0: number): void {
    var int1 = ((36 * MODULO(varbitplayer_38639, (14 / 2))) - 2);
    var int2 = 0;
    var int3 = 2;
    IF_SETHIDE(0, 93716730);
    IF_SETHIDE(0, 93716731);
    if ((int0 == 0)) {
        int1 = ((36 * (varbitplayer_38639 - (14 / 2))) - 2);
        IF_SETPOSITION(0, 0, 0, 0, 93716727);
        IF_SETSIZE(int3, 0, 0, 1, 93716727);
        IF_SETPOSITION(0, 0, 2, 0, 93716729);
        IF_SETSIZE(int3, (36 - 2), 0, 0, 93716729);
        IF_SETPOSITION(0, 0, 0, 0, 93716732);
        IF_SETSIZE(0, int3, 1, 0, 93716732);
        IF_SETPOSITION(0, 0, 0, 2, 93716728);
        IF_SETSIZE(int1, int3, 0, 0, 93716728);
        IF_SETPOSITION(int1, 0, 0, 2, 93716730);
        IF_SETSIZE(int3, (36 + 2), 0, 0, 93716730);
        IF_SETPOSITION(0, (36 - 2), 2, 0, 93716731);
        IF_SETSIZE((245 - int1), int3, 0, 0, 93716731);
    } else if ((int0 == 1)) {
        int1 = (((36 - 1) * (varbitplayer_38639 - (14 / 2))) - 2);
        int2 = (((36 - 1) * (14 - varbitplayer_38639)) + 2);
        IF_SETPOSITION(0, 0, 0, 0, 93716727);
        IF_SETSIZE(int3, 0, 0, 1, 93716727);
        IF_SETPOSITION(0, 0, 2, 0, 93716729);
        IF_SETSIZE(int3, int1, 0, 0, 93716729);
        IF_SETPOSITION(0, 0, 0, 0, 93716732);
        IF_SETSIZE(0, int3, 1, 0, 93716732);
        IF_SETPOSITION(0, 0, 0, 2, 93716728);
        IF_SETSIZE((36 - 2), int3, 0, 0, 93716728);
        IF_SETPOSITION((36 - 2), 0, 0, 2, 93716730);
        IF_SETSIZE(int3, int2, 0, 0, 93716730);
        IF_SETPOSITION(0, int1, 2, 0, 93716731);
        IF_SETSIZE((36 + 2), int3, 0, 0, 93716731);
    };
    return;
}