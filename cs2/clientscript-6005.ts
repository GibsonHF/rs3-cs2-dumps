//
function script6005(int0: number, int1: number): void {
    if ((varclient_4147 == 1)) {
        return;
    };
    varclient_4146 = int0;
    script6228(varplayer_4381);
    IF_SETONTIMER(callback(), comp(1043, 2));  // 6awe3_rewards:skill_book
    if ((struct_getparam(int1, 4219) == 0)) {
        script8056(68354201, -1, 1);
        script8059(2);
    } else {
        script8056(68354205, -1, 1);
        script8056(68354209, -1, 2);
    };
    return;
}